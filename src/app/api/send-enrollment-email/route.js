import { sendEmail } from "@/app/api/utils/send-email";

export async function POST(request) {
  try {
    const { studentData } = await request.json();

    if (!studentData || !studentData.email) {
      return Response.json(
        { error: "Student data and email are required" },
        { status: 400 },
      );
    }

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BrainEdify Enrollment Confirmation</title>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: white; padding: 30px; border: 1px solid #e5e7eb; }
          .footer { background: #f3f4f6; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 14px; color: #6b7280; }
          .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #fbbf24; }
          .course-list { background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0; }
          .contact-info { background: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .payment-info { background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #22c55e; }
          .btn { display: inline-block; background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 5px; }
          .bkash-btn { background: linear-gradient(135deg, #e91e63, #c2185b); }
          .emoji { font-size: 1.2em; }
          .status-badge { display: inline-block; background: #fbbf24; color: white; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
          .greeting-section { background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 25px; border-radius: 8px; margin: 20px 0; text-align: center; }
          .payment-steps { background: #fff7ed; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1><span class="emoji">🎓</span> BrainEdify Academic Center</h1>
            <p style="font-size: 18px; margin: 10px 0;">আসসালামু আলাইকুম ও শুভেচ্ছা! 🌟</p>
            <h2>Enrollment Confirmation</h2>
            <p>Welcome to your academic excellence journey!</p>
          </div>
          
          <div class="content">
            <div class="greeting-section">
              <h2><span class="emoji">🤝</span> Dear ${studentData.student_name},</h2>
              <p style="font-size: 16px; color: #1e40af; margin: 15px 0;">
                <strong>আপনাকে BrainEdify পরিবারে স্বাগতম জানাই!</strong><br>
                <em>Welcome to the BrainEdify Family!</em>
              </p>
              <p style="font-size: 15px; line-height: 1.8;">
                আমরা আপনার শিক্ষাগত সাফল্যের অংশীদার হতে পেরে গর্বিত। আপনার উজ্জ্বল ভবিষ্যৎ গড়তে আমরা প্রতিশ্রুতিবদ্ধ।<br>
                <em>We are proud to be your partner in academic success and committed to building your bright future.</em>
              </p>
            </div>

            <div class="highlight">
              <h3><span class="emoji">🎉</span> Registration Confirmed Successfully!</h3>
              <p><strong>আপনার ভর্তি আবেদন সফলভাবে গ্রহণ করা হয়েছে!</strong></p>
              <p>Your enrollment application has been successfully received. We're excited to have you join our community of 500+ successful students!</p>
            </div>
            
            <h3><span class="emoji">📋</span> Enrollment Details / ভর্তির বিস্তারিত</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
              <tr style="background: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Student Name / শিক্ষার্থীর নাম:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${studentData.student_name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Email / ইমেইল:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${studentData.email}</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Phone / ফোন:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${studentData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Grade / শ্রেণী:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${studentData.grade}</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Payment Status / পেমেন্ট অবস্থা:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">
                  <span class="status-badge">${studentData.payment_status === "pending" ? "Payment Pending / পেমেন্ট বকেয়া" : studentData.payment_status}</span>
                </td>
              </tr>
              ${
                studentData.parent_name
                  ? `
              <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Parent Name / অভিভাবকের নাম:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${studentData.parent_name}</td>
              </tr>
              `
                  : ""
              }
              ${
                studentData.parent_phone
                  ? `
              <tr style="background: #f9fafb;">
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Parent Phone / অভিভাবকের ফোন:</td>
                <td style="padding: 12px; border: 1px solid #e5e7eb;">${studentData.parent_phone}</td>
              </tr>
              `
                  : ""
              }
            </table>
            
            <div class="course-list">
              <h4><span class="emoji">📚</span> Selected Subjects / নির্বাচিত বিষয়সমূহ</h4>
              <p style="font-weight: bold; color: #f59e0b; font-size: 16px;">${studentData.subjects}</p>
              ${
                studentData.amount_paid
                  ? `
              <p style="font-size: 16px;"><strong>Course Fee / কোর্স ফি:</strong> <span style="color: #059669; font-size: 18px; font-weight: bold;">৳${studentData.amount_paid} BDT</span> ${studentData.discount_percentage > 0 ? `<span style="color: #dc2626;">(${studentData.discount_percentage}% discount applied! / ছাড় প্রয়োগ করা হয়েছে!)</span>` : ""}</p>
              `
                  : ""
              }
            </div>

            ${
              studentData.payment_status === "pending"
                ? `
            <div class="payment-info">
              <h3 style="color: #059669; margin-top: 0;"><span class="emoji">💳</span> bKash Payment Instructions / বিকাশ পেমেন্ট নির্দেশাবলী</h3>
              <div class="payment-steps">
                <h4 style="color: #ea580c; margin-top: 0;"><span class="emoji">📱</span> Easy bKash Payment Steps:</h4>
                <ol style="padding-left: 20px; line-height: 1.8;">
                  <li><strong>Send Money via bKash to:</strong> <span style="background: #fef2f2; padding: 3px 8px; border-radius: 4px; color: #dc2626; font-weight: bold;">01814187905</span></li>
                  <li><strong>Amount:</strong> <span style="color: #059669; font-weight: bold;">৳${studentData.amount_paid || "0"}</span></li>
                  <li><strong>Reference:</strong> Your name - ${studentData.student_name}</li>
                  <li><strong>Take screenshot</strong> of successful payment</li>
                  <li><strong>WhatsApp the screenshot</strong> to: <strong>01538309105</strong></li>
                </ol>
              </div>
              
              <div style="text-align: center; margin: 20px 0;">
                <a href="https://wa.me/8801538309105?text=আসসালামু আলাইকুম! আমি ${studentData.student_name}। আমার bKash পেমেন্টের স্ক্রিনশট পাঠাচ্ছি।" class="btn bkash-btn" style="color: white;">
                  <span class="emoji">📱</span> Send Payment Screenshot via WhatsApp
                </a>
              </div>
              
              <p style="text-align: center; color: #7c2d12; font-weight: bold; background: #fef7ff; padding: 10px; border-radius: 6px;">
                <span class="emoji">⏰</span> Your seat will be confirmed within 24 hours of payment verification!<br>
                <em>পেমেন্ট যাচাইয়ের ২৪ ঘন্টার মধ্যে আপনার আসন নিশ্চিত হবে!</em>
              </p>
            </div>
            `
                : ""
            }
            
            <div class="contact-info">
              <h4><span class="emoji">📞</span> Next Steps & Contact Information</h4>
              <p><strong>আমাদের টিম ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করবে:</strong></p>
              <ul style="line-height: 1.8;">
                <li><span class="emoji">📅</span> আপনার ক্লাসের সময়সূচী নিশ্চিত করতে / Confirm your class schedule</li>
                <li><span class="emoji">📚</span> স্টাডি ম্যাটেরিয়াল প্রদান করতে / Provide study materials</li>
                <li><span class="emoji">❓</span> আপনার যেকোনো প্রশ্নের উত্তর দিতে / Answer any questions</li>
                <li><span class="emoji">🎯</span> ব্যক্তিগত লক্ষ্য নির্ধারণ করতে / Set personal academic goals</li>
              </ul>
              
              <div style="background: #fef7ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p><strong><span class="emoji">📞</span> যোগাযোগের তথ্য / Contact Details:</strong></p>
                <ul style="margin: 10px 0;">
                  <li><span class="emoji">📱</span> Phone/WhatsApp: <strong style="color: #dc2626;">01538309105</strong></li>
                  <li><span class="emoji">💬</span> WhatsApp us anytime for instant support</li>
                  <li><span class="emoji">🌐</span> Visit our website for more information</li>
                  <li><span class="emoji">⌚</span> Available 24/7 for your queries</li>
                </ul>
              </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <h3 style="color: #dc2626;"><span class="emoji">⏰</span> Important Reminder / গুরুত্বপূর্ণ স্মরণীয়</h3>
              <p style="color: #dc2626; font-weight: bold; font-size: 16px;">Enrollment deadline: December 30, 2025</p>
              <p style="color: #dc2626; font-weight: bold;">ভর্তির শেষ তারিখ: ৩০ ডিসেম্বর, ২০২৫</p>
              <p style="color: #059669; font-weight: bold;">Secure your spot with early registration discount up to 20%!</p>
              
              <a href="https://wa.me/8801538309105?text=আসসালামু আলাইকুম! আমি ${studentData.student_name}। আমার ভর্তি সংক্রান্ত তথ্য জানতে চাই।" class="btn" style="color: white;">
                <span class="emoji">💬</span> WhatsApp Us Now
              </a>
              <a href="tel:+8801538309105" class="btn" style="color: white;">
                <span class="emoji">📞</span> Call Now
              </a>
            </div>
            
            <div class="highlight">
              <h4><span class="emoji">🏆</span> Why Choose BrainEdify? / কেন BrainEdify বেছে নেবেন?</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div style="flex: 1; min-width: 250px;">
                  <ul style="line-height: 2;">
                    <li><span class="emoji">✅</span> 500+ successful students / ৫০০+ সফল শিক্ষার্থী</li>
                    <li><span class="emoji">✅</span> 5+ years teaching experience / ৫+ বছরের অভিজ্ঞতা</li>
                    <li><span class="emoji">✅</span> IELTS Band 7 certified instructor / আইইএলটিএস ব্যান্ড ১৭ সার্টিফাইড</li>
                    <li><span class="emoji">✅</span> BUET, DU, IBA qualified teachers / বুয়েট, ঢাবি, আইবিএ শিক্ষকমণ্ডলী</li>
                    <li><span class="emoji">✅</span> Personal attention to each student / প্রতিটি শিক্ষার্থীর প্রতি ব্যক্তিগত মনোযোগ</li>
                    <li><span class="emoji">✅</span> Competitive market rates / প্রতিযোগিতামূলক বাজার দর</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style="text-align: center; background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;"><span class="emoji">🚀</span> Ready to Begin Your Success Journey?</h3>
              <p style="color: #92400e; font-weight: bold; margin: 10px 0;">আপনার সাফল্যের যাত্রা শুরু করার জন্য প্রস্তুত?</p>
              <p style="color: #451a03;">Complete your payment and secure your seat today!</p>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>BrainEdify Academic Center</strong></p>
            <p><span class="emoji">📍</span> Bangladesh | <span class="emoji">📞</span> 01538309105 | <span class="emoji">💬</span> WhatsApp Available</p>
            <p style="margin-top: 15px; font-size: 12px; color: #9ca3af;">
              This is an automated confirmation email. If you didn't enroll with BrainEdify, please contact us immediately.<br>
              এটি একটি স্বয়ংক্রিয় নিশ্চিতকরণ ইমেইল। যদি আপনি BrainEdify-তে ভর্তি না হয়ে থাকেন, অনুগ্রহ করে অবিলম্বে আমাদের সাথে যোগাযোগ করুন।
            </p>
            <p style="font-size: 12px; color: #9ca3af;">
              <span class="emoji">🎓</span> Your Success is Our Mission / আপনার সাফল্যই আমাদের লক্ষ্য <span class="emoji">🎓</span>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Text version for email clients that don't support HTML
    const textContent = `
BrainEdify Academic Center - Enrollment Confirmation

Congratulations, ${studentData.student_name}!

Your enrollment application has been successfully received. We're excited to have you join our community of successful students!

Enrollment Details:
- Student Name: ${studentData.student_name}
- Email: ${studentData.email}
- Phone: ${studentData.phone}
- Grade: ${studentData.grade}
- Selected Subjects: ${studentData.subjects}
- Payment Status: ${studentData.payment_status || "Pending"}
${studentData.parent_name ? `- Parent Name: ${studentData.parent_name}` : ""}
${studentData.parent_phone ? `- Parent Phone: ${studentData.parent_phone}` : ""}
${studentData.amount_paid ? `- Course Fee: ৳${studentData.amount_paid} BDT` : ""}

Next Steps:
Our team will contact you within 24 hours to:
- Confirm your class schedule
- Provide payment details
- Share study materials
- Answer any questions you may have

Contact Information:
- Phone/WhatsApp: 01538309105
- WhatsApp us anytime for instant support

Important Reminder:
Enrollment deadline: December 30, 2025
Secure your spot with early registration discount up to 20%!

Why Choose BrainEdify?
- 500+ successful students
- 5+ years of teaching experience
- IELTS Band 7 certified instructor
- Proven track record of academic excellence
- Personal attention to each student

BrainEdify Academic Center
Bangladesh | 01538309105 | WhatsApp Available

Your Success is Our Mission!
    `;

    try {
      console.log("Email==============",studentData)
      const emailResult = await sendEmail({
        to: studentData.email,
        from: "BrainEdify <noreply@brainedify.com>", // You can customize this with your verified domain
        // to:"falcon.akashkumar@gmail.com",
        // from: "BrainEdify <onboarding@resend.dev>",
        subject: `🎓 Welcome to BrainEdify! Enrollment Confirmation for ${studentData.student_name}`,
        html: htmlContent,
        text: textContent,
      });

      return Response.json({
        success: true,
        message: "Enrollment confirmation email sent successfully",
        emailId: emailResult.id,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);

      // If email fails, still return success for the enrollment but note the email issue
      return Response.json({
        success: true,
        message:
          "Enrollment successful, but confirmation email could not be sent. Please contact us to verify your enrollment.",
        emailError:
          "Email service not configured. Please add your RESEND_API_KEY to environment variables.",
        note: "Student enrollment was saved successfully in the database.",
      });
    }
  } catch (error) {
    console.error("Enrollment email API error:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to process enrollment confirmation email",
        details: error.message,
      },
      { status: 500 },
    );
  }
}
