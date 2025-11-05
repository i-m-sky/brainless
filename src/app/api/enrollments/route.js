import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    console.log("🔥 Starting enrollment API request");
    const body = await request.json();
    console.log("📋 Received body:", body);

    const {
      studentName,
      email,
      phone,
      grade,
      subjects,
      parentName,
      parentPhone,
      paymentMethod,
      discountPercentage,
      amountPaid,
    } = body;

    // Enhanced validation - Make parent info optional but encouraged
    if (
      !studentName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !grade?.trim()
    ) {
      console.log("❌ Validation failed - missing required student fields");
      return Response.json(
        {
          error:
            "Please fill all required student information (Name, Email, Phone, Grade).",
        },
        { status: 400 },
      );
    }

    // Validate subjects
    if (!subjects || subjects.trim() === "") {
      console.log("❌ Validation failed - no subjects selected");
      return Response.json(
        {
          error: "Please select at least one subject or course.",
        },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      console.log("❌ Validation failed - invalid email");
      return Response.json(
        {
          error: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    // Validate phone number (basic validation for BD numbers)
    const phoneRegex = /^(\+?88)?01[3-9]\d{8}$/;
    const cleanPhone = phone.trim().replace(/\s/g, "");
    if (!phoneRegex.test(cleanPhone) && cleanPhone.length < 10) {
      console.log("❌ Validation failed - invalid phone number");
      return Response.json(
        {
          error: "Please enter a valid phone number (at least 10 digits).",
        },
        { status: 400 },
      );
    }

    console.log("💾 Attempting to insert enrollment into database");

    // Insert enrollment into database with comprehensive error handling
    const result = await sql`
      INSERT INTO enrollments (
        student_name, 
        email, 
        phone, 
        grade, 
        subjects, 
        parent_name, 
        parent_phone,
        payment_method,
        amount_paid,
        discount_percentage,
        payment_status,
        created_at,
        updated_at
      )
      VALUES (
        ${studentName.trim()}, 
        ${email.trim()}, 
        ${cleanPhone}, 
        ${grade.trim()}, 
        ${subjects.trim()}, 
        ${parentName?.trim() || ""}, 
        ${parentPhone?.trim() || ""},
        ${paymentMethod || "bkash"},
        ${parseInt(amountPaid) || 0},
        ${parseInt(discountPercentage) || 0},
        'pending',
        NOW(),
        NOW()
      )
      RETURNING id, student_name, email, created_at, amount_paid, subjects, grade
    `;

    console.log("✅ Database insert successful:", result[0]);

    const enrollmentData = result[0];
    const amount = enrollmentData.amount_paid || 0;

    // Send confirmation email
    let emailSent = false;
    let emailError = null;

    try {
      console.log("📧 Sending confirmation email to:", enrollmentData.email);
      const emailResponse = await fetch(
        `${process.env.APP_URL || "http://localhost:3000"}/api/send-enrollment-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentData: {
              student_name: enrollmentData.student_name,
              email: enrollmentData.email,
              phone: cleanPhone,
              grade: enrollmentData.grade,
              subjects: enrollmentData.subjects,
              parent_name: parentName?.trim() || "",
              parent_phone: parentPhone?.trim() || "",
              payment_status: "pending",
              payment_method: paymentMethod || "bkash",
              amount_paid: enrollmentData.amount_paid,
              discount_percentage: parseInt(discountPercentage) || 0,
            },
          }),
        },
      );

      if (emailResponse.ok) {
        const emailResult = await emailResponse.json();
        console.log("✅ Email sent successfully:", emailResult);
        emailSent = true;
      } else {
        const errorText = await emailResponse.text();
        console.error("❌ Email API returned error:", errorText);
        emailError = `Email service error: ${errorText}`;
      }
    } catch (emailErr) {
      console.error("❌ Email sending failed:", emailErr);
      emailError = `Email failed: ${emailErr.message}`;
      // Continue with enrollment even if email fails
    }

    // Determine discount info for message
    let discountInfo = "";
    if (subjects.includes("Basic English and Communication")) {
      discountInfo = "\n🎁 20% discount applied for English course!";
    } else if (
      subjects.includes("Math") &&
      subjects.includes("Physics") &&
      subjects.includes("Chemistry")
    ) {
      discountInfo =
        "\n🎯 Intensive Care Grooming Batch - All 3 Science Subjects!";
    }

    // Include email status in response
    const emailStatusMessage = emailSent
      ? "\n✅ Confirmation email sent! Check your inbox (and spam folder)."
      : "\n⚠️ Email could not be sent. Please save this information and contact us at 01538309105.";

    return Response.json({
      success: true,
      emailSent: emailSent,
      emailError: emailError,
      message: `🎉 Enrollment Submitted Successfully! 

📝 Student: ${enrollmentData.student_name}
📚 Course: ${enrollmentData.grade} - ${enrollmentData.subjects}
💰 Amount: ৳${amount}${discountInfo}

💳 bKash PAYMENT INSTRUCTIONS:
1. Send Money via bKash to: 01538309105
2. Amount: ৳${amount}
3. Reference: ${enrollmentData.student_name}
4. Take screenshot of successful payment
5. Send screenshot via WhatsApp: 01538309105

${emailStatusMessage}
📞 We'll contact you within 24 hours to confirm!

🚀 Ready to start your learning journey with BrainEdify!`,
      enrollment: enrollmentData,
      paymentInstructions: {
        method: "bkash",
        number: "01538309105",
        amount: amount,
        reference: enrollmentData.student_name,
        whatsapp: "01538309105",
      },
    });
  } catch (error) {
    console.error("❌ Enrollment error:", error);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });

    // Check for specific database errors
    if (error.message.includes('relation "enrollments" does not exist')) {
      return Response.json(
        {
          error: `Database is initializing. Please wait a moment and try again.`,
        },
        { status: 503 },
      );
    }

    if (error.message.includes("duplicate key value")) {
      return Response.json(
        {
          error: `This email or phone number is already registered. Please use a different email/phone or contact us at 01538309105.`,
        },
        { status: 409 },
      );
    }

    // Return user-friendly error message
    return Response.json(
      {
        error: `Unable to process enrollment right now. Please try again in a few moments or contact support via WhatsApp: 01538309105`,
      },
      { status: 500 },
    );
  }
}

export async function GET(request) {
  try {
    const enrollments =
      await sql`SELECT * FROM enrollments ORDER BY created_at DESC`;
    return Response.json(enrollments);
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    return Response.json(
      { error: "Failed to fetch enrollments" },
      { status: 500 },
    );
  }
}

// Add PUT method for admin to update payment status
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, payment_status, admin_notes, transaction_id } = body;

    if (!id) {
      return Response.json(
        { error: "Enrollment ID is required" },
        { status: 400 },
      );
    }

    const result = await sql`
      UPDATE enrollments 
      SET 
        payment_status = ${payment_status || "pending"},
        admin_notes = ${admin_notes || ""},
        transaction_id = ${transaction_id || ""},
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    if (result.length === 0) {
      return Response.json({ error: "Enrollment not found" }, { status: 404 });
    }

    return Response.json({
      success: true,
      message: "Enrollment updated successfully",
      enrollment: result[0],
    });
  } catch (error) {
    console.error("Error updating enrollment:", error);
    return Response.json(
      { error: "Failed to update enrollment" },
      { status: 500 },
    );
  }
}
