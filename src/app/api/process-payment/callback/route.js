import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentID = searchParams.get("paymentID");
    const status = searchParams.get("status");
    const enrollmentId = searchParams.get("enrollmentId");

    console.log("bKash callback received:", {
      paymentID,
      status,
      enrollmentId,
    });

    if (!paymentID) {
      return new Response(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Payment Error</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #fef2f2; }
            .container { max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .error { color: #dc2626; }
            .btn { display: inline-block; background: #fbbf24; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="error">❌ Payment Error</h1>
            <p>Invalid payment information received.</p>
            <a href="/" class="btn">Return to Home</a>
            <a href="https://wa.me/8801538309105" class="btn">Contact Support</a>
          </div>
        </body>
        </html>
      `,
        {
          headers: { "Content-Type": "text/html" },
        },
      );
    }

    // Process the callback by calling the main payment processing endpoint
    try {
      const callbackResult = await fetch(
        `${process.env.APP_URL}/api/process-payment`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            enrollmentId: enrollmentId,
            paymentStatus: status === "success" ? "completed" : "failed",
            paymentMethod: "bkash",
            paymentID: paymentID,
          }),
        },
      );

      const result = await callbackResult.json();

      const isSuccess = status === "success" && result.success;

      return new Response(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>${isSuccess ? "Payment Successful" : "Payment Failed"}</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { 
              font-family: 'Arial', sans-serif; 
              text-align: center; 
              padding: 20px; 
              background: ${isSuccess ? "#f0fdf4" : "#fef2f2"}; 
              margin: 0;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: white; 
              padding: 40px; 
              border-radius: 15px; 
              box-shadow: 0 4px 20px rgba(0,0,0,0.1); 
            }
            .success { color: #059669; }
            .error { color: #dc2626; }
            .btn { 
              display: inline-block; 
              background: ${isSuccess ? "#22c55e" : "#fbbf24"}; 
              color: white; 
              padding: 12px 25px; 
              text-decoration: none; 
              border-radius: 8px; 
              margin: 10px; 
              font-weight: bold;
            }
            .payment-details {
              background: #f9fafb;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              text-align: left;
            }
            .whatsapp-btn {
              background: #25d366;
              color: white;
            }
            h1 { font-size: 28px; margin-bottom: 20px; }
            p { font-size: 16px; line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="container">
            ${
              isSuccess
                ? `
              <h1 class="success">🎉 Payment Successful!</h1>
              <p class="success"><strong>আপনার পেমেন্ট সফল হয়েছে!</strong></p>
              <div class="payment-details">
                <h3>Payment Details / পেমেন্ট বিস্তারিত:</h3>
                <p><strong>Payment ID:</strong> ${paymentID}</p>
                <p><strong>Status:</strong> <span style="color: #059669;">Completed ✅</span></p>
                <p><strong>Date:</strong> ${new Date().toLocaleDateString("en-GB")}</p>
              </div>
              <p>🎓 <strong>Welcome to BrainEdify!</strong> Your enrollment has been confirmed.</p>
              <p>📧 You will receive a confirmation email shortly.</p>
              <p>📞 Our team will contact you within 24 hours to finalize your class schedule.</p>
              <div style="margin: 30px 0;">
                <a href="/" class="btn">Return to Home</a>
                <a href="https://wa.me/8801538309105?text=আসসালামু আলাইকুম! আমার bKash পেমেন্ট সফল হয়েছে। Payment ID: ${paymentID}" class="btn whatsapp-btn">📱 WhatsApp Us</a>
              </div>
              <p style="color: #6b7280; font-size: 14px;">
                For any queries, contact us at: <strong>01538309105</strong><br>
                কোনো প্রশ্নের জন্য যোগাযোগ করুন: <strong>০১৫৩৮৩০৯১০৫</strong>
              </p>
            `
                : `
              <h1 class="error">❌ Payment Failed</h1>
              <p class="error"><strong>আপনার পেমেন্ট সফল হয়নি!</strong></p>
              <div class="payment-details">
                <h3>Payment Details / পেমেন্ট বিস্তারিত:</h3>
                <p><strong>Payment ID:</strong> ${paymentID}</p>
                <p><strong>Status:</strong> <span style="color: #dc2626;">Failed ❌</span></p>
                <p><strong>Date:</strong> ${new Date().toLocaleDateString("en-GB")}</p>
              </div>
              <p>😔 Unfortunately, your payment could not be processed.</p>
              <p><strong>দুঃখিত, আপনার পেমেন্ট সফল হয়নি।</strong></p>
              <h3>📱 Alternative Payment Methods:</h3>
              <div style="background: #fef7ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p><strong>Manual bKash Payment:</strong></p>
                <p>1. Send Money to: <strong style="color: #dc2626;">01538309105</strong></p>
                <p>2. Send screenshot via WhatsApp</p>
                <p>3. We'll confirm your enrollment manually</p>
              </div>
              <div style="margin: 30px 0;">
                <a href="/" class="btn">Try Again</a>
                <a href="https://wa.me/8801538309105?text=আসসালামু আলাইকুম! আমার bKash পেমেন্ট সফল হয়নি। সহায়তা চাই। Payment ID: ${paymentID}" class="btn whatsapp-btn">📱 Get Help via WhatsApp</a>
              </div>
              <p style="color: #6b7280; font-size: 14px;">
                Need help? Contact us at: <strong>01538309105</strong><br>
                সাহায্য চান? যোগাযোগ করুন: <strong>০১৫৩৮৩০৯১০৫</strong>
              </p>
            `
            }
          </div>
          <script>
            // Auto-redirect to WhatsApp after 10 seconds for successful payments
            ${
              isSuccess
                ? `
              setTimeout(() => {
                if (confirm('Redirect to WhatsApp to confirm with our team?\\nআমাদের টিমের সাথে নিশ্চিত করতে WhatsApp এ যাবেন?')) {
                  window.location.href = 'https://wa.me/8801538309105?text=আসসালামু আলাইকুম! আমার bKash পেমেন্ট সফল হয়েছে। Payment ID: ${paymentID}';
                }
              }, 10000);
            `
                : ""
            }
          </script>
        </body>
        </html>
      `,
        {
          headers: { "Content-Type": "text/html" },
        },
      );
    } catch (error) {
      console.error("Error processing bKash callback:", error);

      return new Response(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Processing Error</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #fef2f2; }
            .container { max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .error { color: #dc2626; }
            .btn { display: inline-block; background: #fbbf24; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="error">⚠️ Processing Error</h1>
            <p>We're having trouble processing your payment callback.</p>
            <p><strong>আপনার পেমেন্ট প্রক্রিয়াকরণে সমস্যা হচ্ছে।</strong></p>
            <p>Please contact our support team with your Payment ID: <strong>${paymentID}</strong></p>
            <a href="/" class="btn">Return to Home</a>
            <a href="https://wa.me/8801538309105?text=আসসালামু আলাইকুম! আমার bKash পেমেন্টে সমস্যা হয়েছে। Payment ID: ${paymentID}" class="btn">📱 Contact Support</a>
          </div>
        </body>
        </html>
      `,
        {
          headers: { "Content-Type": "text/html" },
        },
      );
    }
  } catch (error) {
    console.error("bKash callback error:", error);

    return new Response(
      `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Callback Error</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #fef2f2; }
          .container { max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .error { color: #dc2626; }
          .btn { display: inline-block; background: #fbbf24; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 class="error">🚨 System Error</h1>
          <p>An unexpected error occurred while processing your payment.</p>
          <p><strong>আপনার পেমেন্ট প্রসেসিংয়ে একটি সমস্যা হয়েছে।</strong></p>
          <p>Please contact our support team immediately.</p>
          <a href="/" class="btn">Return to Home</a>
          <a href="https://wa.me/8801538309105" class="btn">📱 Contact Support</a>
        </div>
      </body>
      </html>
    `,
      {
        headers: { "Content-Type": "text/html" },
      },
    );
  }
}

// Handle POST requests from bKash webhook
export async function POST(request) {
  try {
    const body = await request.json();
    console.log("bKash webhook POST received:", body);

    // Process the webhook data
    const { paymentID, status, trxID, enrollmentId } = body;

    if (paymentID) {
      // Forward to the main webhook handler
      const result = await fetch(`${process.env.APP_URL}/api/process-payment`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enrollmentId: enrollmentId,
          paymentStatus:
            status === "success" || status === "Completed"
              ? "completed"
              : "failed",
          transactionId: trxID,
          paymentMethod: "bkash",
          paymentID: paymentID,
        }),
      });

      return Response.json({
        success: true,
        message: "Webhook processed successfully",
      });
    }

    return Response.json(
      {
        success: false,
        message: "Invalid webhook data",
      },
      { status: 400 },
    );
  } catch (error) {
    console.error("bKash webhook POST error:", error);
    return Response.json(
      {
        success: false,
        message: "Webhook processing failed",
      },
      { status: 500 },
    );
  }
}
