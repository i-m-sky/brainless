(()=>{var e={};e.id=207,e.ids=[207],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5002:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>h,tree:()=>d}),t(318),t(9195),t(5866);var r=t(3191),a=t(8716),n=t(7922),i=t.n(n),l=t(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let d=["",{children:["test-email",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,318)),"/home/sky/Downloads/create-anything/apps/web/src/app/test-email/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,9195)),"/home/sky/Downloads/create-anything/apps/web/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/home/sky/Downloads/create-anything/apps/web/src/app/test-email/page.jsx"],m="/test-email/page",u={require:t,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/test-email/page",pathname:"/test-email",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1788:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},536:(e,s,t)=>{Promise.resolve().then(t.bind(t,9884))},9309:(e,s,t)=>{Promise.resolve().then(t.bind(t,6831))},6831:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var r=t(326),a=t(7577);function n(){let[e,s]=(0,a.useState)(""),[t,n]=(0,a.useState)(null),[i,l]=(0,a.useState)(!1),o=async()=>{if(!e){n({success:!1,message:"Please enter an email address"});return}l(!0),n(null);try{let s=await fetch("/api/test-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})}),t=await s.json();n(t)}catch(e){n({success:!1,message:"Failed to test email: "+e.message})}finally{l(!1)}};return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8",children:r.jsx("div",{className:"max-w-md mx-auto",children:(0,r.jsxs)("div",{className:"bg-white shadow-xl rounded-lg p-8",children:[(0,r.jsxs)("div",{className:"text-center mb-8",children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"\uD83E\uDDEA Email Test"}),r.jsx("p",{className:"text-gray-600 mt-2",children:"Test BrainEdify email service configuration"})]}),(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Test Email Address"}),r.jsx("input",{id:"email",type:"email",value:e,onChange:e=>s(e.target.value),placeholder:"Enter your email address",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"})]}),r.jsx("button",{onClick:o,disabled:i||!e,className:"w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",children:i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white inline",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending Test Email..."]}):"\uD83D\uDCE7 Send Test Email"})]}),t&&r.jsx("div",{className:`mt-6 p-4 rounded-lg ${t.success?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:(0,r.jsxs)("div",{className:"flex",children:[r.jsx("div",{className:"flex-shrink-0",children:t.success?r.jsx("svg",{className:"h-5 w-5 text-green-400",viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}):r.jsx("svg",{className:"h-5 w-5 text-red-400",viewBox:"0 0 20 20",fill:"currentColor",children:r.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),(0,r.jsxs)("div",{className:"ml-3",children:[r.jsx("h3",{className:`text-sm font-medium ${t.success?"text-green-800":"text-red-800"}`,children:t.success?"Success!":"Error"}),(0,r.jsxs)("div",{className:`mt-2 text-sm ${t.success?"text-green-700":"text-red-700"}`,children:[r.jsx("p",{children:t.message}),t.details&&(0,r.jsxs)("p",{className:"mt-1 text-xs opacity-75",children:["Details: ",t.details]})]}),t.suggestions&&t.suggestions.length>0&&(0,r.jsxs)("div",{className:"mt-3",children:[r.jsx("h4",{className:"text-sm font-medium text-red-800",children:"Suggestions:"}),r.jsx("ul",{className:"mt-1 text-sm text-red-700 space-y-1",children:t.suggestions.map((e,s)=>(0,r.jsxs)("li",{className:"flex items-start",children:[r.jsx("span",{className:"mr-2",children:"•"}),r.jsx("span",{children:e})]},s))})]})]})]})}),(0,r.jsxs)("div",{className:"mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[r.jsx("h3",{className:"text-sm font-medium text-blue-800 mb-2",children:"\uD83D\uDCCB Setup Instructions:"}),(0,r.jsxs)("div",{className:"text-sm text-blue-700 space-y-1",children:[(0,r.jsxs)("p",{children:["1. ",r.jsx("strong",{children:"Sign up"})," for a free account at"," ",r.jsx("a",{href:"https://resend.com",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"resend.com"})]}),(0,r.jsxs)("p",{children:["2. ",r.jsx("strong",{children:"Get your API key"})," from the Resend dashboard"]}),(0,r.jsxs)("p",{children:["3. ",r.jsx("strong",{children:"Add environment variable:"})," ",r.jsx("code",{className:"bg-blue-100 px-1 rounded",children:"RESEND_API_KEY=your_api_key"})]}),(0,r.jsxs)("p",{children:["4. ",r.jsx("strong",{children:"Test your configuration"})," using this page"]})]})]}),r.jsx("div",{className:"mt-6 text-center",children:r.jsx("a",{href:"/",className:"text-yellow-600 hover:text-yellow-800 font-medium",children:"← Back to BrainEdify Home"})})]})})})}},9884:(e,s,t)=>{"use strict";t.d(s,{ClientProviders:()=>l});var r=t(326),a=t(4951),n=t(4976);let i=new a.S({defaultOptions:{queries:{staleTime:3e5,cacheTime:18e5,retry:1,refetchOnWindowFocus:!1}}});function l({children:e}){return r.jsx(n.aH,{client:i,children:e})}},9195:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i,metadata:()=>n});var r=t(9510);let a=(0,t(8570).createProxy)(String.raw`/home/sky/Downloads/create-anything/apps/web/src/components/ClientProviders.jsx#ClientProviders`);t(5023);let n={title:"BrainEdify - Premier Educational Platform",description:"Transform your academic journey with our comprehensive courses and expert instructors."};function i({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{children:r.jsx("style",{dangerouslySetInnerHTML:{__html:`
            /* Base smooth transitions */
            * {
              transition: opacity 0.2s ease, transform 0.2s ease;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }

            /* Custom fade animations */
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes slideInUp {
              from { 
                opacity: 0; 
                transform: translateY(50px); 
              }
              to { 
                opacity: 1; 
                transform: translateY(0); 
              }
            }

            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }

            /* Animation utility classes */
            .animate-fadeIn {
              animation: fadeIn 0.5s ease-out;
            }

            .animate-slideInUp {
              animation: slideInUp 0.6s ease-out;
            }

            .animate-shimmer {
              animation: shimmer 2s infinite;
            }

            /* Enhanced scrollbar for better UX */
            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 4px;
            }

            ::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #ff6b35, #f7931e);
              border-radius: 4px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, #f7931e, #ff6b35);
            }

            /* Enhanced focus states for accessibility */
            button:focus-visible,
            input:focus-visible,
            select:focus-visible {
              outline: 2px solid #ff6b35;
              outline-offset: 2px;
              box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1);
            }

            /* Loading states */
            .loading-shimmer {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }

            /* Button hover enhancements */
            .hover-lift:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
          `}})}),r.jsx("body",{className:"antialiased",children:r.jsx(a,{children:e})})]})}},318:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});let r=(0,t(8570).createProxy)(String.raw`/home/sky/Downloads/create-anything/apps/web/src/app/test-email/page.jsx#default`)},5023:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[948,250],()=>t(5002));module.exports=r})();