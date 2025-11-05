"use strict";(()=>{var e={};e.id=462,e.ids=[462],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3663:(e,t,a)=>{a.r(t),a.d(t,{originalPathname:()=>m,patchFetch:()=>u,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>h,staticGenerationAsyncStorage:()=>d});var r={};a.r(r),a.d(r,{GET:()=>i,POST:()=>p});var n=a(9303),o=a(8716),s=a(670);async function i(e){try{let{searchParams:t}=new URL(e.url),a=t.get("paymentID"),r=t.get("status"),n=t.get("enrollmentId");if(console.log("bKash callback received:",{paymentID:a,status:r,enrollmentId:n}),!a)return new Response(`
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
      `,{headers:{"Content-Type":"text/html"}});try{let e=await fetch(`${process.env.APP_URL}/api/process-payment`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enrollmentId:n,paymentStatus:"success"===r?"completed":"failed",paymentMethod:"bkash",paymentID:a})}),t=await e.json(),o="success"===r&&t.success;return new Response(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${o?"Payment Successful":"Payment Failed"}</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { 
              font-family: 'Arial', sans-serif; 
              text-align: center; 
              padding: 20px; 
              background: ${o?"#f0fdf4":"#fef2f2"}; 
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
              background: ${o?"#22c55e":"#fbbf24"}; 
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
            ${o?`
              <h1 class="success">🎉 Payment Successful!</h1>
              <p class="success"><strong>আপনার পেমেন্ট সফল হয়েছে!</strong></p>
              <div class="payment-details">
                <h3>Payment Details / পেমেন্ট বিস্তারিত:</h3>
                <p><strong>Payment ID:</strong> ${a}</p>
                <p><strong>Status:</strong> <span style="color: #059669;">Completed ✅</span></p>
                <p><strong>Date:</strong> ${new Date().toLocaleDateString("en-GB")}</p>
              </div>
              <p>🎓 <strong>Welcome to BrainEdify!</strong> Your enrollment has been confirmed.</p>
              <p>📧 You will receive a confirmation email shortly.</p>
              <p>📞 Our team will contact you within 24 hours to finalize your class schedule.</p>
              <div style="margin: 30px 0;">
                <a href="/" class="btn">Return to Home</a>
                <a href="https://wa.me/8801538309105?text=আসসালামু আলাইকুম! আমার bKash পেমেন্ট সফল হয়েছে। Payment ID: ${a}" class="btn whatsapp-btn">📱 WhatsApp Us</a>
              </div>
              <p style="color: #6b7280; font-size: 14px;">
                For any queries, contact us at: <strong>01538309105</strong><br>
                কোনো প্রশ্নের জন্য যোগাযোগ করুন: <strong>০১৫৩৮৩০৯১০৫</strong>
              </p>
            `:`
              <h1 class="error">❌ Payment Failed</h1>
              <p class="error"><strong>আপনার পেমেন্ট সফল হয়নি!</strong></p>
              <div class="payment-details">
                <h3>Payment Details / পেমেন্ট বিস্তারিত:</h3>
                <p><strong>Payment ID:</strong> ${a}</p>
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
                <a href="https://wa.me/8801538309105?text=আসসালামু আলাইকুম! আমার bKash পেমেন্ট সফল হয়নি। সহায়তা চাই। Payment ID: ${a}" class="btn whatsapp-btn">📱 Get Help via WhatsApp</a>
              </div>
              <p style="color: #6b7280; font-size: 14px;">
                Need help? Contact us at: <strong>01538309105</strong><br>
                সাহায্য চান? যোগাযোগ করুন: <strong>০১৫৩৮৩০৯১০৫</strong>
              </p>
            `}
          </div>
          <script>
            // Auto-redirect to WhatsApp after 10 seconds for successful payments
            ${o?`
              setTimeout(() => {
                if (confirm('Redirect to WhatsApp to confirm with our team?\\nআমাদের টিমের সাথে নিশ্চিত করতে WhatsApp এ যাবেন?')) {
                  window.location.href = 'https://wa.me/8801538309105?text=আসসালামু আলাইকুম! আমার bKash পেমেন্ট সফল হয়েছে। Payment ID: ${a}';
                }
              }, 10000);
            `:""}
          </script>
        </body>
        </html>
      `,{headers:{"Content-Type":"text/html"}})}catch(e){return console.error("Error processing bKash callback:",e),new Response(`
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
            <p>Please contact our support team with your Payment ID: <strong>${a}</strong></p>
            <a href="/" class="btn">Return to Home</a>
            <a href="https://wa.me/8801538309105?text=আসসালামু আলাইকুম! আমার bKash পেমেন্টে সমস্যা হয়েছে। Payment ID: ${a}" class="btn">📱 Contact Support</a>
          </div>
        </body>
        </html>
      `,{headers:{"Content-Type":"text/html"}})}}catch(e){return console.error("bKash callback error:",e),new Response(`
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
    `,{headers:{"Content-Type":"text/html"}})}}async function p(e){try{let t=await e.json();console.log("bKash webhook POST received:",t);let{paymentID:a,status:r,trxID:n,enrollmentId:o}=t;if(a)return await fetch(`${process.env.APP_URL}/api/process-payment`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enrollmentId:o,paymentStatus:"success"===r||"Completed"===r?"completed":"failed",transactionId:n,paymentMethod:"bkash",paymentID:a})}),Response.json({success:!0,message:"Webhook processed successfully"});return Response.json({success:!1,message:"Invalid webhook data"},{status:400})}catch(e){return console.error("bKash webhook POST error:",e),Response.json({success:!1,message:"Webhook processing failed"},{status:500})}}a(1872);let c=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/process-payment/callback/route",pathname:"/api/process-payment/callback",filename:"route",bundlePath:"app/api/process-payment/callback/route"},resolvedPagePath:"/home/sky/Downloads/create-anything/apps/web/src/app/api/process-payment/callback/route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:h}=c,m="/api/process-payment/callback/route";function u(){return(0,s.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:d})}},1872:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(2237);let n=()=>{throw Error("No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set")};n.transaction=()=>{throw Error("No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set")};let o=process.env.DATABASE_URL?(0,r.qn)(process.env.DATABASE_URL):n}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[948,52],()=>a(3663));module.exports=r})();