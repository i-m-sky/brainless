export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || !message.trim()) {
      return Response.json(
        {
          error: "Message is required",
          success: false,
        },
        { status: 400 },
      );
    }

    // Enhanced system prompt optimized for BrainEdify
    const systemPrompt = `You are BrainEdify's helpful AI assistant. You can understand and respond in English, Bengali (বাংলা), and Banglish (Bangla written in English).

🏫 ABOUT BRAINEDIFY:
BrainEdify Academic Center (ব্রেইনএডিফাই একাডেমিক সেন্টার) - Your pathway to academic excellence!

📚 COURSES OFFERED:
🔬 SCIENCE SUBJECTS:
• Physics (পদার্থবিজ্ঞান): Mechanics, Electricity, Optics, Modern Physics
• Chemistry (রসায়ন): Organic, Inorganic, Physical Chemistry  
• Biology (জীববিজ্ঞান): Cell Biology, Genetics, Ecology, Human Physiology
• Mathematics (গণিত): Higher Math & General Math - Algebra, Geometry, Calculus, Statistics

📖 ENGLISH COURSE:
• IELTS preparation (আইইএলটিএস প্রস্তুতি)
• Communication skills & Career development
• Grammar, vocabulary, speaking, writing improvement
• Reading comprehension & professional English

🎯 TARGET STUDENTS: Grades 6-12 (ষষ্ঠ থেকে দ্বাদশ শ্রেণী)

💰 PRICING (মূল্য তালিকা):
• Single subject: ৳1,500/month (প্রতি বিষয় মাসিক)
• 3 subjects: ৳3,800/month (Save ৳700!)
• 5 subjects: ৳6,000/month (Save ৳1,500!)
• English course: ৳2,000/month
• Any package + English: +৳1,500/month

🎁 SPECIAL OFFERS:
• Early bird discount: Up to 20% off (December 30, 2025 deadline)
• Group discounts for siblings
• Merit-based scholarships

⏰ CLASS SCHEDULE:
🎯 Science Intensive Batch: 4 days/week
📖 English Course: 3 days/week
• Small batches (8-12 students max)
• Individual attention guaranteed
• Both online & offline options
• Flexible timing & make-up classes

👨‍🏫 EXPERT INSTRUCTORS:
• CEO: MD ROBIN JAMAL - IELTS Band 7 Certified, 5+ years experience
• Quality mentors from BUET, DU, IBA
• 500+ successful students
• Personal mentoring approach

💳 PAYMENT METHODS:
• bKash: 01538309105
• Mobile banking & bank transfer accepted
• Installment options available

📋 ENROLLMENT PROCESS:
1. Fill enrollment form on website
2. Choose subjects/grade
3. Pay 50% of first month's bill to secure seat
4. Receive confirmation & materials
5. Start classes within 24-48 hours

📞 CONTACT:
• Phone/WhatsApp: 01538309105
• Available 24/7 for queries
• Location: Bangladesh

RESPONSE GUIDELINES:
• Always respond in the same language the user uses
• Be warm, encouraging, and helpful
• Include specific action steps
• Guide users to enrollment/contact info
• Use appropriate emojis
• End with clear next steps

COMMON BANGLISH PHRASES:
• "course er details den" = course details please
• "koto taka lagbe" = how much cost
• "admit korte chai" = want to get admitted
• "teacher kemon" = how are teachers
• "payment kivabe korbo" = how to make payment

Remember: Guide students toward enrollment while providing accurate, helpful information about BrainEdify's exceptional academic programs and supportive learning environment.`;

    // Make request to ChatGPT with optimized settings for Vercel

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message.trim() }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });
    
    // const response = await fetch("http://localhost:3000/integrations/chat-gpt/conversationgpt4", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     messages: [
    //       {
    //         role: "system",
    //         content: systemPrompt,
    //       },
    //       {
    //         role: "user",
    //         content: message.trim(),
    //       },
    //     ],
    //     stream: false,
    //     max_tokens: 1000, // Limit for faster responses
    //     temperature: 0.7, // Balanced creativity
    //   }),
    // });

    if (!response.ok) {
      console.error(
        `ChatGPT API error: ${response.status} ${response.statusText}`,
      );

      // Handle different error types
      if (response.status === 429) {
        return Response.json(
          {
            error:
              "I'm getting too many requests right now. Please wait a moment and try again! 😊",
            success: false,
          },
          { status: 429 },
        );
      }

      if (response.status >= 500) {
        
        return Response.json(
          {
            error:
              "The AI service is temporarily unavailable. Please contact us directly at 01538309105 for immediate assistance! 📞",
            success: false,
          },
          { status: 503 },
        );
      }

      throw new Error(`ChatGPT API returned ${response.status}`);
    }

    const data = await response.json();

    // Validate response structure
    if (
      !data ||
      !data.choices ||
      !data.choices[0] ||
      !data.choices[0].message ||
      !data.choices[0].message.content
    ) {
      console.error("Invalid ChatGPT response structure:", data);
      throw new Error("Invalid response from AI service");
    }

    const aiResponse = data.choices[0].message.content.trim();

    // Enhanced response formatting
    let formattedResponse = aiResponse;

    // Add helpful contact reminder for enrollment-related queries
    if (
      message.toLowerCase().includes("enroll") ||
      message.toLowerCase().includes("admit") ||
      message.toLowerCase().includes("ভর্তি") ||
      message.includes("korte chai")
    ) {
      formattedResponse +=
        "\n\n💡 Ready to enroll? Contact us:\n📞 WhatsApp: 01538309105\n🌐 Use the enrollment form on this website!";
    }

    return Response.json({
      message: formattedResponse,
      success: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chatbot API error:", error);

    // Detailed error logging for debugging
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack?.split("\n").slice(0, 5), // First 5 lines of stack
    });

    // User-friendly error responses based on error type
    let errorMessage =
      "I'm having trouble responding right now. Please try again or contact us directly at 01538309105! 😊";
    let statusCode = 500;

    if (
      error.message.includes("timeout") ||
      error.message.includes("TIMEOUT")
    ) {
      errorMessage =
        "Response took too long. Please try a shorter question or contact us at 01538309105! ⏰";
      statusCode = 408;
    } else if (
      error.message.includes("network") ||
      error.message.includes("fetch")
    ) {
      errorMessage =
        "Network connection issue. Please check your connection and try again! 🌐";
      statusCode = 503;
    } else if (error.message.includes("JSON")) {
      errorMessage =
        "There was a problem processing your message. Please try rephrasing or contact us at 01538309105! 📝";
      statusCode = 400;
    }

    return Response.json(
      {
        error: errorMessage,
        success: false,
        timestamp: new Date().toISOString(),
        // Include error code for debugging (only in development)
        ...(process.env.NODE_ENV === "development" && {
          errorCode: error.name,
          errorDetail: error.message,
        }),
      },
      { status: statusCode },
    );
  }
}
