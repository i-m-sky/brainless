"use strict";(()=>{var e={};e.id=528,e.ids=[528],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9196:(e,t,i)=>{i.r(t),i.d(t,{originalPathname:()=>f,patchFetch:()=>E,requestAsyncStorage:()=>m,routeModule:()=>c,serverHooks:()=>p,staticGenerationAsyncStorage:()=>u});var a={};i.r(a),i.d(a,{GET:()=>d,POST:()=>l});var r=i(9303),s=i(8716),o=i(670),n=i(6814);async function l(e){try{let{email:t}=await e.json();if(!t||!t.includes("@"))return Response.json({error:"Please provide a valid email address"},{status:400});console.log("\uD83E\uDDEA Testing email service with:",t);let i=`
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
              <li>Recipient: ${t}</li>
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
    `,a=`
BrainEdify Email Service Test

✅ Email Service Working!

This is a test email from BrainEdify Academic Center.

If you received this email, your email configuration is working correctly!

Test Details:
- Recipient: ${t}
- Test Time: ${new Date().toLocaleString()}
- Service: Resend API

This is an automated test email from BrainEdify Academic Center.
Contact: 01538309105
    `,r=await (0,n.C)({to:t,from:"BrainEdify Test <test@brainedify.com>",subject:"\uD83E\uDDEA BrainEdify Email Service Test - "+new Date().toLocaleDateString(),html:i,text:a});return console.log("✅ Test email sent successfully:",r),Response.json({success:!0,message:`✅ Test email sent successfully to ${t}! Check your inbox (and spam folder).`,emailId:r.id,timestamp:new Date().toISOString()})}catch(i){console.error("❌ Email test failed:",i);let e="Email test failed",t=[];return i.message.includes("RESEND_API_KEY")?(e="Email service not configured",t=["Add RESEND_API_KEY to your environment variables","Sign up for a free Resend account at https://resend.com","Get your API key from the Resend dashboard"]):i.message.includes("authentication failed")?(e="Invalid API key",t=["Verify your RESEND_API_KEY is correct","Check if the API key has the right permissions","Generate a new API key if needed"]):i.message.includes("validation failed")&&(e="Email format or content invalid",t=["Check the email address format","Verify the sender domain is configured in Resend"]),Response.json({success:!1,error:e,details:i.message,suggestions:t,timestamp:new Date().toISOString()},{status:500})}}async function d(){return Response.json({message:"Email Test Endpoint",description:'Send a POST request with { "email": "your@email.com" } to test email functionality',example:{method:"POST",body:{email:"test@example.com"}}})}let c=new r.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/test-email/route",pathname:"/api/test-email",filename:"route",bundlePath:"app/api/test-email/route"},resolvedPagePath:"/home/sky/Downloads/create-anything/apps/web/src/app/api/test-email/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:u,serverHooks:p}=c,f="/api/test-email/route";function E(){return(0,o.patchFetch)({serverHooks:p,staticGenerationAsyncStorage:u})}},9303:(e,t,i)=>{e.exports=i(517)},6814:(e,t,i)=>{i.d(t,{C:()=>a});async function a({to:e,from:t,subject:i,html:a,text:r}){try{if(!process.env.RESEND_API_KEY)throw console.warn("⚠️ RESEND_API_KEY not configured - email sending disabled"),Error("Email service not configured. Please add RESEND_API_KEY to environment variables.");console.log("\uD83D\uDCE7 Attempting to send email to:",e),console.log("\uD83D\uDCE7 Subject:",i);let s=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({from:t||"BrainEdify <noreply@brainedify.com>",to:Array.isArray(e)?e:[e],subject:i,html:a,text:r})}),o=await s.json();if(!s.ok){if(console.error("❌ Resend API error:",{status:s.status,statusText:s.statusText,data:o}),422===s.status)throw Error(`Email validation failed: ${o.message||"Invalid email format or content"}`);if(401===s.status)throw Error("Email service authentication failed - invalid API key");if(429===s.status)throw Error("Email service rate limit exceeded - please try again later");throw Error(`Email service error (${s.status}): ${o.message||"Unknown error"}`)}return console.log("✅ Email sent successfully via Resend:",o),{id:o.id,success:!0}}catch(e){throw console.error("❌ Email sending failed:",e),Error(`Failed to send email: ${e.message}`)}}}};var t=require("../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[948],()=>i(9196));module.exports=a})();