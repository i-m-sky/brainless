"use strict";(()=>{var e={};e.id=145,e.ids=[145],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4791:(e,t,s)=>{s.r(t),s.d(t,{originalPathname:()=>h,patchFetch:()=>p,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>m,staticGenerationAsyncStorage:()=>u});var a={};s.r(a),s.d(a,{POST:()=>i});var n=s(9303),o=s(8716),r=s(670);async function i(e){try{let{message:t}=await e.json();if(!t||!t.trim())return Response.json({error:"Message is required",success:!1},{status:400});let s=`You are BrainEdify's helpful AI assistant. You can understand and respond in English, Bengali (বাংলা), and Banglish (Bangla written in English).

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

Remember: Guide students toward enrollment while providing accurate, helpful information about BrainEdify's exceptional academic programs and supportive learning environment.`,a=await fetch("/integrations/chat-gpt/conversationgpt4",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:s},{role:"user",content:t.trim()}],stream:!1,max_tokens:1e3,temperature:.7})});if(!a.ok){if(console.error(`ChatGPT API error: ${a.status} ${a.statusText}`),429===a.status)return Response.json({error:"I'm getting too many requests right now. Please wait a moment and try again! \uD83D\uDE0A",success:!1},{status:429});if(a.status>=500)return Response.json({error:"The AI service is temporarily unavailable. Please contact us directly at 01538309105 for immediate assistance! \uD83D\uDCDE",success:!1},{status:503});throw Error(`ChatGPT API returned ${a.status}`)}let n=await a.json();if(!n||!n.choices||!n.choices[0]||!n.choices[0].message||!n.choices[0].message.content)throw console.error("Invalid ChatGPT response structure:",n),Error("Invalid response from AI service");let o=n.choices[0].message.content.trim();return(t.toLowerCase().includes("enroll")||t.toLowerCase().includes("admit")||t.toLowerCase().includes("ভর্তি")||t.includes("korte chai"))&&(o+="\n\n\uD83D\uDCA1 Ready to enroll? Contact us:\n\uD83D\uDCDE WhatsApp: 01538309105\n\uD83C\uDF10 Use the enrollment form on this website!"),Response.json({message:o,success:!0,timestamp:new Date().toISOString()})}catch(s){console.error("Chatbot API error:",s),console.error("Error details:",{name:s.name,message:s.message,stack:s.stack?.split("\n").slice(0,5)});let e="I'm having trouble responding right now. Please try again or contact us directly at 01538309105! \uD83D\uDE0A",t=500;return s.message.includes("timeout")||s.message.includes("TIMEOUT")?(e="Response took too long. Please try a shorter question or contact us at 01538309105! ⏰",t=408):s.message.includes("network")||s.message.includes("fetch")?(e="Network connection issue. Please check your connection and try again! \uD83C\uDF10",t=503):s.message.includes("JSON")&&(e="There was a problem processing your message. Please try rephrasing or contact us at 01538309105! \uD83D\uDCDD",t=400),Response.json({error:e,success:!1,timestamp:new Date().toISOString(),...!1},{status:t})}}let c=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/chatbot/route",pathname:"/api/chatbot",filename:"route",bundlePath:"app/api/chatbot/route"},resolvedPagePath:"/home/sky/Downloads/create-anything/apps/web/src/app/api/chatbot/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:u,serverHooks:m}=c,h="/api/chatbot/route";function p(){return(0,r.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:u})}},9303:(e,t,s)=>{e.exports=s(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948],()=>s(4791));module.exports=a})();