import { sendEmail } from "@/app/api/utils/send-email";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    console.log("🧪 Testing email service with:", email);

    const testEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>BrainEdify Email Test</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 500px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white; padding: 20px; text-align: center; border-radius: 8px; }
          .content { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 10px 0; }
          .success { color: #059669; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎓 BrainEdify Email Test</h1>
            <p>Email Service Configuration Test</p>
          </div>
          <div class="content">
            <h2 class="success">✅ Email Service Working!</h2>
            <p>This is a test email from BrainEdify Academic Center.</p>
            <p><strong>If you received this email, your email configuration is working correctly!</strong></p>
            <hr>
            <p><strong>Test Details:</strong></p>
            <ul>
              <li>Recipient: ${email}</li>
              <li>Test Time: ${new Date().toLocaleString()}</li>
              <li>Service: Resend API</li>
            </ul>
            <hr>
            <p style="color: #6b7280; font-size: 14px;">
              This is an automated test email from BrainEdify Academic Center.<br>
              📞 Contact: 01538309105 | 🌐 Website: BrainEdify
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
BrainEdify Email Service Test

✅ Email Service Working!

This is a test email from BrainEdify Academic Center.

If you received this email, your email configuration is working correctly!

Test Details:
- Recipient: ${email}
- Test Time: ${new Date().toLocaleString()}
- Service: Resend API

This is an automated test email from BrainEdify Academic Center.
Contact: 01538309105
    `;

    // Attempt to send test email
    const result = await sendEmail({
      to: email,
      from: "BrainEdify Test <test@brainedify.com>",
      subject:
        "🧪 BrainEdify Email Service Test - " + new Date().toLocaleDateString(),
      html: testEmailContent,
      text: textContent,
    });

    console.log("✅ Test email sent successfully:", result);

    return Response.json({
      success: true,
      message: `✅ Test email sent successfully to ${email}! Check your inbox (and spam folder).`,
      emailId: result.id,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Email test failed:", error);

    let errorMessage = "Email test failed";
    let suggestions = [];

    if (error.message.includes("RESEND_API_KEY")) {
      errorMessage = "Email service not configured";
      suggestions = [
        "Add RESEND_API_KEY to your environment variables",
        "Sign up for a free Resend account at https://resend.com",
        "Get your API key from the Resend dashboard",
      ];
    } else if (error.message.includes("authentication failed")) {
      errorMessage = "Invalid API key";
      suggestions = [
        "Verify your RESEND_API_KEY is correct",
        "Check if the API key has the right permissions",
        "Generate a new API key if needed",
      ];
    } else if (error.message.includes("validation failed")) {
      errorMessage = "Email format or content invalid";
      suggestions = [
        "Check the email address format",
        "Verify the sender domain is configured in Resend",
      ];
    }

    return Response.json(
      {
        success: false,
        error: errorMessage,
        details: error.message,
        suggestions: suggestions,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return Response.json({
    message: "Email Test Endpoint",
    description:
      'Send a POST request with { "email": "your@email.com" } to test email functionality',
    example: {
      method: "POST",
      body: { email: "test@example.com" },
    },
  });
}
