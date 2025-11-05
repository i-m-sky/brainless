"use strict";(()=>{var e={};e.id=164,e.ids=[164],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6451:(e,t,a)=>{a.r(t),a.d(t,{originalPathname:()=>b,patchFetch:()=>E,requestAsyncStorage:()=>y,routeModule:()=>h,serverHooks:()=>_,staticGenerationAsyncStorage:()=>f});var n={};a.r(n),a.d(n,{POST:()=>d,PUT:()=>m});var s=a(9303),r=a(8716),o=a(670),i=a(1872);let p={base_url:process.env.BKASH_BASE_URL||"https://tokenized.sandbox.bka.sh/v1.2.0-beta",app_key:process.env.BKASH_APP_KEY,app_secret:process.env.BKASH_APP_SECRET,username:process.env.BKASH_USERNAME,password:process.env.BKASH_PASSWORD};async function c(){try{let e=await fetch(`${p.base_url}/tokenized/checkout/token/grant`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",username:p.username,password:p.password},body:JSON.stringify({app_key:p.app_key,app_secret:p.app_secret})}),t=await e.json();if(!e.ok)throw Error(`bKash token error: ${t.errorMessage||e.statusText}`);return t.id_token}catch(e){throw console.error("bKash token generation failed:",e),e}}async function u(e,t,a,n){try{let s=await fetch(`${p.base_url}/tokenized/checkout/create`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",authorization:e,"x-app-key":p.app_key},body:JSON.stringify({mode:"0011",payerReference:n,callbackURL:`${process.env.APP_URL}/api/process-payment/callback`,amount:t.toString(),currency:"BDT",intent:"sale",merchantInvoiceNumber:a})}),r=await s.json();if(!s.ok)throw Error(`bKash payment creation failed: ${r.errorMessage||s.statusText}`);return r}catch(e){throw console.error("bKash payment creation failed:",e),e}}async function l(e,t){try{let a=await fetch(`${p.base_url}/tokenized/checkout/execute`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",authorization:e,"x-app-key":p.app_key},body:JSON.stringify({paymentID:t})}),n=await a.json();if(!a.ok)throw Error(`bKash payment verification failed: ${n.errorMessage||a.statusText}`);return n}catch(e){throw console.error("bKash payment verification failed:",e),e}}async function d(e){try{let t=await e.json(),{enrollmentId:a,paymentMethod:n,amount:s,transactionId:r,status:o,action:p}=t;if(!a)return Response.json({error:"Enrollment ID is required"},{status:400});let d=await (0,i.Z)`
      SELECT * FROM enrollments WHERE id = ${a}
    `;if(0===d.length)return Response.json({error:"Enrollment not found"},{status:404});let m=d[0];if("create_bkash_payment"===p)try{if(!s||s<=0)return Response.json({error:"Valid payment amount is required"},{status:400});let e=`BED-${a}-${Date.now()}`,t=await c(),n=await u(t,s,e,m.student_name);return await (0,i.Z)`
          UPDATE enrollments
          SET 
            payment_method = 'bkash',
            admin_notes = ${`bKash payment created: ${n.paymentID}`},
            updated_at = NOW()
          WHERE id = ${a}
        `,Response.json({success:!0,message:"bKash payment created successfully",payment:{paymentID:n.paymentID,bkashURL:n.bkashURL,invoiceNo:e,amount:s,currency:"BDT"}})}catch(e){return console.error("bKash payment creation error:",e),Response.json({success:!1,error:"Unable to create bKash payment. Please try manual payment method.",fallback:{method:"manual_bkash",number:"01538309105",amount:s,reference:m.student_name}},{status:500})}if("verify_bkash_payment"===p)try{let{paymentID:e}=t;if(!e)return Response.json({error:"Payment ID is required"},{status:400});let n=await c(),s=await l(n,e),r="Completed"===s.transactionStatus?"completed":"failed",o=await (0,i.Z)`
          UPDATE enrollments
          SET 
            payment_status = ${r},
            transaction_id = ${s.trxID||e},
            amount_paid = ${parseInt(s.amount)||0},
            admin_notes = ${`bKash payment verified: ${s.transactionStatus}`},
            updated_at = NOW()
          WHERE id = ${a}
          RETURNING *
        `;return Response.json({success:!0,message:`bKash payment ${r}`,verification:s,enrollment:o[0]})}catch(e){return console.error("bKash payment verification error:",e),Response.json({success:!1,error:"Payment verification failed"},{status:500})}if(!n||!s)return Response.json({error:"Payment method and amount are required"},{status:400});let h=await (0,i.Z)`
      UPDATE enrollments
      SET 
        payment_status = ${o||"pending"},
        transaction_id = ${r||null},
        payment_method = ${n},
        amount_paid = ${parseInt(s)||0},
        updated_at = NOW()
      WHERE id = ${a}
      RETURNING *
    `;if(0===h.length)return Response.json({error:"Enrollment not found"},{status:404});if(console.log(`Payment processed for enrollment ${a}:`,{method:n,amount:s,status:o,transactionId:r}),"completed"===o)try{await fetch(`${process.env.APP_URL}/api/send-enrollment-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({studentData:{...h[0],payment_status:"completed"}})})}catch(e){console.error("Failed to send payment confirmation email:",e)}return Response.json({success:!0,message:"Payment recorded successfully",enrollment:h[0]})}catch(e){return console.error("Payment processing error:",e),Response.json({error:"Failed to process payment"},{status:500})}}async function m(e){try{let{enrollmentId:t,paymentStatus:a,transactionId:n,paymentMethod:s,paymentID:r}=await e.json();if(!t||!a)return Response.json({error:"Missing required fields for webhook"},{status:400});if("bkash"===s&&r)try{let e=await c(),a=await l(e,r),o="Completed"===a.transactionStatus?"completed":"failed",p=await (0,i.Z)`
          UPDATE enrollments
          SET 
            payment_status = ${o},
            transaction_id = ${a.trxID||n||null},
            amount_paid = ${parseInt(a.amount)||0},
            admin_notes = ${`bKash webhook verified: ${a.transactionStatus}`},
            updated_at = NOW()
          WHERE id = ${t}
          RETURNING *
        `;return console.log(`Payment webhook processed for enrollment ${t}:`,{status:o,method:s,trxID:a.trxID}),Response.json({success:!0,message:"Payment webhook processed",enrollment:p[0]})}catch(e){console.error("bKash webhook verification failed:",e)}let o=await (0,i.Z)`
      UPDATE enrollments
      SET 
        payment_status = ${a},
        transaction_id = ${n||null},
        updated_at = NOW()
      WHERE id = ${t}
      RETURNING *
    `;if(0===o.length)return Response.json({error:"Enrollment not found"},{status:404});return console.log(`Payment status updated for enrollment ${t}:`,{status:a,method:s}),Response.json({success:!0,message:"Payment status updated",enrollment:o[0]})}catch(e){return console.error("Webhook processing error:",e),Response.json({error:"Failed to process webhook"},{status:500})}}let h=new s.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/process-payment/route",pathname:"/api/process-payment",filename:"route",bundlePath:"app/api/process-payment/route"},resolvedPagePath:"/home/sky/Downloads/create-anything/apps/web/src/app/api/process-payment/route.js",nextConfigOutput:"",userland:n}),{requestAsyncStorage:y,staticGenerationAsyncStorage:f,serverHooks:_}=h,b="/api/process-payment/route";function E(){return(0,o.patchFetch)({serverHooks:_,staticGenerationAsyncStorage:f})}},1872:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(2237);let s=()=>{throw Error("No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set")};s.transaction=()=>{throw Error("No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set")};let r=process.env.DATABASE_URL?(0,n.qn)(process.env.DATABASE_URL):s}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),n=t.X(0,[948,52],()=>a(6451));module.exports=n})();