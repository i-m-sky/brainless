export async function sendEmail({ to, from, subject, html, text }) {
  try {
    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️ RESEND_API_KEY not configured - email sending disabled");
      throw new Error(
        "Email service not configured. Please add RESEND_API_KEY to environment variables.",
      );
    }

    console.log("📧 Attempting to send email to:", to);
    console.log("📧 Subject:", subject);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        // Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        Authorization: `Bearer re_iQdcLxxW_2YSLDbpEJFXQP3cqW2qzDNDo`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: from || "BrainEdify <noreply@brainedify.com>",
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
        text,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Resend API error:", {
        status: response.status,
        statusText: response.statusText,
        data: data,
      });

      // Provide more specific error messages
      if (response.status === 422) {
        throw new Error(
          `Email validation failed: ${data.message || "Invalid email format or content"}`,
        );
      } else if (response.status === 401) {
        throw new Error(
          "Email service authentication failed - invalid API key",
        );
      } else if (response.status === 429) {
        throw new Error(
          "Email service rate limit exceeded - please try again later",
        );
      } else {
        throw new Error(
          `Email service error (${response.status}): ${data.message || "Unknown error"}`,
        );
      }
    }

    console.log("✅ Email sent successfully via Resend:", data);
    return { id: data.id, success: true };
  } catch (error) {
    console.error("❌ Email sending failed:", error);

    // Re-throw with more context
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
