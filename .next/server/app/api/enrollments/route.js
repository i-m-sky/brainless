"use strict";(()=>{var e={};e.id=940,e.ids=[940],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8449:(e,t,n)=>{n.r(t),n.d(t,{originalPathname:()=>g,patchFetch:()=>f,requestAsyncStorage:()=>c,routeModule:()=>m,serverHooks:()=>h,staticGenerationAsyncStorage:()=>p});var s={};n.r(s),n.d(s,{GET:()=>u,POST:()=>l,PUT:()=>d});var r=n(9303),a=n(8716),o=n(670),i=n(1872);async function l(e){try{console.log("\uD83D\uDD25 Starting enrollment API request");let t=await e.json();console.log("\uD83D\uDCCB Received body:",t);let{studentName:n,email:s,phone:r,grade:a,subjects:o,parentName:l,parentPhone:u,paymentMethod:d,discountPercentage:m,amountPaid:c}=t;if(!n?.trim()||!s?.trim()||!r?.trim()||!a?.trim())return console.log("❌ Validation failed - missing required student fields"),Response.json({error:"Please fill all required student information (Name, Email, Phone, Grade)."},{status:400});if(!o||""===o.trim())return console.log("❌ Validation failed - no subjects selected"),Response.json({error:"Please select at least one subject or course."},{status:400});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim()))return console.log("❌ Validation failed - invalid email"),Response.json({error:"Please enter a valid email address."},{status:400});let p=r.trim().replace(/\s/g,"");if(!/^(\+?88)?01[3-9]\d{8}$/.test(p)&&p.length<10)return console.log("❌ Validation failed - invalid phone number"),Response.json({error:"Please enter a valid phone number (at least 10 digits)."},{status:400});console.log("\uD83D\uDCBE Attempting to insert enrollment into database");let h=await (0,i.Z)`
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
        ${n.trim()}, 
        ${s.trim()}, 
        ${p}, 
        ${a.trim()}, 
        ${o.trim()}, 
        ${l?.trim()||""}, 
        ${u?.trim()||""},
        ${d||"bkash"},
        ${parseInt(c)||0},
        ${parseInt(m)||0},
        'pending',
        NOW(),
        NOW()
      )
      RETURNING id, student_name, email, created_at, amount_paid, subjects, grade
    `;console.log("✅ Database insert successful:",h[0]);let g=h[0],f=g.amount_paid||0,E=!1,y=null;try{console.log("\uD83D\uDCE7 Sending confirmation email to:",g.email);let e=await fetch(`${process.env.APP_URL||"http://localhost:3000"}/api/send-enrollment-email`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({studentData:{student_name:g.student_name,email:g.email,phone:p,grade:g.grade,subjects:g.subjects,parent_name:l?.trim()||"",parent_phone:u?.trim()||"",payment_status:"pending",payment_method:d||"bkash",amount_paid:g.amount_paid,discount_percentage:parseInt(m)||0}})});if(e.ok){let t=await e.json();console.log("✅ Email sent successfully:",t),E=!0}else{let t=await e.text();console.error("❌ Email API returned error:",t),y=`Email service error: ${t}`}}catch(e){console.error("❌ Email sending failed:",e),y=`Email failed: ${e.message}`}let _="";o.includes("Basic English and Communication")?_="\n\uD83C\uDF81 20% discount applied for English course!":o.includes("Math")&&o.includes("Physics")&&o.includes("Chemistry")&&(_="\n\uD83C\uDFAF Intensive Care Grooming Batch - All 3 Science Subjects!");let R=E?"\n✅ Confirmation email sent! Check your inbox (and spam folder).":"\n⚠️ Email could not be sent. Please save this information and contact us at 01538309105.";return Response.json({success:!0,emailSent:E,emailError:y,message:`🎉 Enrollment Submitted Successfully! 

📝 Student: ${g.student_name}
📚 Course: ${g.grade} - ${g.subjects}
💰 Amount: ৳${f}${_}

💳 bKash PAYMENT INSTRUCTIONS:
1. Send Money via bKash to: 01538309105
2. Amount: ৳${f}
3. Reference: ${g.student_name}
4. Take screenshot of successful payment
5. Send screenshot via WhatsApp: 01538309105

${R}
📞 We'll contact you within 24 hours to confirm!

🚀 Ready to start your learning journey with BrainEdify!`,enrollment:g,paymentInstructions:{method:"bkash",number:"01538309105",amount:f,reference:g.student_name,whatsapp:"01538309105"}})}catch(e){if(console.error("❌ Enrollment error:",e),console.error("Error details:",{name:e.name,message:e.message,stack:e.stack}),e.message.includes('relation "enrollments" does not exist'))return Response.json({error:"Database is initializing. Please wait a moment and try again."},{status:503});if(e.message.includes("duplicate key value"))return Response.json({error:"This email or phone number is already registered. Please use a different email/phone or contact us at 01538309105."},{status:409});return Response.json({error:"Unable to process enrollment right now. Please try again in a few moments or contact support via WhatsApp: 01538309105"},{status:500})}}async function u(e){try{let e=await (0,i.Z)`SELECT * FROM enrollments ORDER BY created_at DESC`;return Response.json(e)}catch(e){return console.error("Error fetching enrollments:",e),Response.json({error:"Failed to fetch enrollments"},{status:500})}}async function d(e){try{let{id:t,payment_status:n,admin_notes:s,transaction_id:r}=await e.json();if(!t)return Response.json({error:"Enrollment ID is required"},{status:400});let a=await (0,i.Z)`
      UPDATE enrollments 
      SET 
        payment_status = ${n||"pending"},
        admin_notes = ${s||""},
        transaction_id = ${r||""},
        updated_at = NOW()
      WHERE id = ${t}
      RETURNING *
    `;if(0===a.length)return Response.json({error:"Enrollment not found"},{status:404});return Response.json({success:!0,message:"Enrollment updated successfully",enrollment:a[0]})}catch(e){return console.error("Error updating enrollment:",e),Response.json({error:"Failed to update enrollment"},{status:500})}}let m=new r.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/enrollments/route",pathname:"/api/enrollments",filename:"route",bundlePath:"app/api/enrollments/route"},resolvedPagePath:"/home/sky/Downloads/create-anything/apps/web/src/app/api/enrollments/route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:p,serverHooks:h}=m,g="/api/enrollments/route";function f(){return(0,o.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:p})}},1872:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(2237);let r=()=>{throw Error("No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set")};r.transaction=()=>{throw Error("No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set")};let a=process.env.DATABASE_URL?(0,s.qn)(process.env.DATABASE_URL):r}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[948,52],()=>n(8449));module.exports=s})();