import sql from "@/app/api/utils/sql";

// bKash Configuration
const BKASH_CONFIG = {
  base_url:
    process.env.BKASH_BASE_URL ||
    "https://tokenized.sandbox.bka.sh/v1.2.0-beta", // Use sandbox for testing
  app_key: process.env.BKASH_APP_KEY,
  app_secret: process.env.BKASH_APP_SECRET,
  username: process.env.BKASH_USERNAME,
  password: process.env.BKASH_PASSWORD,
};

// Get bKash Token
async function getBKashToken() {
  try {
    const response = await fetch(
      `${BKASH_CONFIG.base_url}/tokenized/checkout/token/grant`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          username: BKASH_CONFIG.username,
          password: BKASH_CONFIG.password,
        },
        body: JSON.stringify({
          app_key: BKASH_CONFIG.app_key,
          app_secret: BKASH_CONFIG.app_secret,
        }),
      },
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        `bKash token error: ${data.errorMessage || response.statusText}`,
      );
    }

    return data.id_token;
  } catch (error) {
    console.error("bKash token generation failed:", error);
    throw error;
  }
}

// Create bKash Payment
async function createBKashPayment(token, amount, invoiceNo, studentName) {
  try {
    const response = await fetch(
      `${BKASH_CONFIG.base_url}/tokenized/checkout/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: token,
          "x-app-key": BKASH_CONFIG.app_key,
        },
        body: JSON.stringify({
          mode: "0011",
          payerReference: studentName,
          callbackURL: `${process.env.APP_URL}/api/process-payment/callback`,
          amount: amount.toString(),
          currency: "BDT",
          intent: "sale",
          merchantInvoiceNumber: invoiceNo,
        }),
      },
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        `bKash payment creation failed: ${data.errorMessage || response.statusText}`,
      );
    }

    return data;
  } catch (error) {
    console.error("bKash payment creation failed:", error);
    throw error;
  }
}

// Verify bKash Payment
async function verifyBKashPayment(token, paymentID) {
  try {
    const response = await fetch(
      `${BKASH_CONFIG.base_url}/tokenized/checkout/execute`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: token,
          "x-app-key": BKASH_CONFIG.app_key,
        },
        body: JSON.stringify({
          paymentID: paymentID,
        }),
      },
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        `bKash payment verification failed: ${data.errorMessage || response.statusText}`,
      );
    }

    return data;
  } catch (error) {
    console.error("bKash payment verification failed:", error);
    throw error;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      enrollmentId,
      paymentMethod,
      amount,
      transactionId,
      status,
      action,
    } = body;

    if (!enrollmentId) {
      return Response.json(
        { error: "Enrollment ID is required" },
        { status: 400 },
      );
    }

    // Get enrollment details
    const enrollment = await sql`
      SELECT * FROM enrollments WHERE id = ${enrollmentId}
    `;

    if (enrollment.length === 0) {
      return Response.json({ error: "Enrollment not found" }, { status: 404 });
    }

    const enrollmentData = enrollment[0];

    // Handle different payment actions
    if (action === "create_bkash_payment") {
      try {
        // Validate required fields for bKash payment
        if (!amount || amount <= 0) {
          return Response.json(
            { error: "Valid payment amount is required" },
            { status: 400 },
          );
        }

        // Generate invoice number
        const invoiceNo = `BED-${enrollmentId}-${Date.now()}`;

        // Get bKash token
        const token = await getBKashToken();

        // Create payment
        const paymentData = await createBKashPayment(
          token,
          amount,
          invoiceNo,
          enrollmentData.student_name,
        );

        // Update enrollment with payment creation details
        await sql`
          UPDATE enrollments
          SET 
            payment_method = 'bkash',
            admin_notes = ${`bKash payment created: ${paymentData.paymentID}`},
            updated_at = NOW()
          WHERE id = ${enrollmentId}
        `;

        return Response.json({
          success: true,
          message: "bKash payment created successfully",
          payment: {
            paymentID: paymentData.paymentID,
            bkashURL: paymentData.bkashURL,
            invoiceNo: invoiceNo,
            amount: amount,
            currency: "BDT",
          },
        });
      } catch (error) {
        console.error("bKash payment creation error:", error);
        return Response.json(
          {
            success: false,
            error:
              "Unable to create bKash payment. Please try manual payment method.",
            fallback: {
              method: "manual_bkash",
              number: "01538309105",
              amount: amount,
              reference: enrollmentData.student_name,
            },
          },
          { status: 500 },
        );
      }
    }

    // Handle payment verification
    if (action === "verify_bkash_payment") {
      try {
        const { paymentID } = body;

        if (!paymentID) {
          return Response.json(
            { error: "Payment ID is required" },
            { status: 400 },
          );
        }

        // Get bKash token
        const token = await getBKashToken();

        // Verify payment
        const verificationData = await verifyBKashPayment(token, paymentID);

        // Update enrollment with verification results
        const paymentStatus =
          verificationData.transactionStatus === "Completed"
            ? "completed"
            : "failed";

        const result = await sql`
          UPDATE enrollments
          SET 
            payment_status = ${paymentStatus},
            transaction_id = ${verificationData.trxID || paymentID},
            amount_paid = ${parseInt(verificationData.amount) || 0},
            admin_notes = ${`bKash payment verified: ${verificationData.transactionStatus}`},
            updated_at = NOW()
          WHERE id = ${enrollmentId}
          RETURNING *
        `;

        return Response.json({
          success: true,
          message: `bKash payment ${paymentStatus}`,
          verification: verificationData,
          enrollment: result[0],
        });
      } catch (error) {
        console.error("bKash payment verification error:", error);
        return Response.json(
          {
            success: false,
            error: "Payment verification failed",
          },
          { status: 500 },
        );
      }
    }

    // Handle manual payment recording (traditional method)
    if (!paymentMethod || !amount) {
      return Response.json(
        { error: "Payment method and amount are required" },
        { status: 400 },
      );
    }

    // Update enrollment with payment information
    const result = await sql`
      UPDATE enrollments
      SET 
        payment_status = ${status || "pending"},
        transaction_id = ${transactionId || null},
        payment_method = ${paymentMethod},
        amount_paid = ${parseInt(amount) || 0},
        updated_at = NOW()
      WHERE id = ${enrollmentId}
      RETURNING *
    `;

    if (result.length === 0) {
      return Response.json({ error: "Enrollment not found" }, { status: 404 });
    }

    console.log(`Payment processed for enrollment ${enrollmentId}:`, {
      method: paymentMethod,
      amount,
      status,
      transactionId,
    });

    // Send confirmation email if payment is completed
    if (status === "completed") {
      try {
        await fetch(`${process.env.APP_URL}/api/send-enrollment-email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentData: {
              ...result[0],
              payment_status: "completed",
            },
          }),
        });
      } catch (emailError) {
        console.error("Failed to send payment confirmation email:", emailError);
      }
    }

    return Response.json({
      success: true,
      message: "Payment recorded successfully",
      enrollment: result[0],
    });
  } catch (error) {
    console.error("Payment processing error:", error);
    return Response.json(
      { error: "Failed to process payment" },
      { status: 500 },
    );
  }
}

// Handle bKash callback/webhook
export async function PUT(request) {
  try {
    const body = await request.json();
    const {
      enrollmentId,
      paymentStatus,
      transactionId,
      paymentMethod,
      paymentID,
    } = body;

    if (!enrollmentId || !paymentStatus) {
      return Response.json(
        { error: "Missing required fields for webhook" },
        { status: 400 },
      );
    }

    // For bKash webhooks, verify the payment
    if (paymentMethod === "bkash" && paymentID) {
      try {
        const token = await getBKashToken();
        const verificationData = await verifyBKashPayment(token, paymentID);

        const finalStatus =
          verificationData.transactionStatus === "Completed"
            ? "completed"
            : "failed";

        const result = await sql`
          UPDATE enrollments
          SET 
            payment_status = ${finalStatus},
            transaction_id = ${verificationData.trxID || transactionId || null},
            amount_paid = ${parseInt(verificationData.amount) || 0},
            admin_notes = ${`bKash webhook verified: ${verificationData.transactionStatus}`},
            updated_at = NOW()
          WHERE id = ${enrollmentId}
          RETURNING *
        `;

        console.log(
          `Payment webhook processed for enrollment ${enrollmentId}:`,
          {
            status: finalStatus,
            method: paymentMethod,
            trxID: verificationData.trxID,
          },
        );

        return Response.json({
          success: true,
          message: "Payment webhook processed",
          enrollment: result[0],
        });
      } catch (error) {
        console.error("bKash webhook verification failed:", error);
        // Fallback to basic status update
      }
    }

    // Basic status update for other payment methods or fallback
    const result = await sql`
      UPDATE enrollments
      SET 
        payment_status = ${paymentStatus},
        transaction_id = ${transactionId || null},
        updated_at = NOW()
      WHERE id = ${enrollmentId}
      RETURNING *
    `;

    if (result.length === 0) {
      return Response.json({ error: "Enrollment not found" }, { status: 404 });
    }

    console.log(`Payment status updated for enrollment ${enrollmentId}:`, {
      status: paymentStatus,
      method: paymentMethod,
    });

    return Response.json({
      success: true,
      message: "Payment status updated",
      enrollment: result[0],
    });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return Response.json(
      { error: "Failed to process webhook" },
      { status: 500 },
    );
  }
}
