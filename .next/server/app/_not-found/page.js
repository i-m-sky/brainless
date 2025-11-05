(()=>{var e={};e.id=409,e.ids=[409],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8236:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>s.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>d}),n(7352),n(5866),n(9195);var r=n(3191),o=n(8716),i=n(7922),s=n.n(i),a=n(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);n.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,9195)),"/home/sky/Downloads/create-anything/apps/web/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"]}],u=[],c="/_not-found/page",f={require:n,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1788:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2994,23)),Promise.resolve().then(n.t.bind(n,6114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,9671,23)),Promise.resolve().then(n.t.bind(n,1868,23)),Promise.resolve().then(n.t.bind(n,4759,23))},536:(e,t,n)=>{Promise.resolve().then(n.bind(n,9884))},9884:(e,t,n)=>{"use strict";n.d(t,{ClientProviders:()=>a});var r=n(326),o=n(4951),i=n(4976);let s=new o.S({defaultOptions:{queries:{staleTime:3e5,cacheTime:18e5,retry:1,refetchOnWindowFocus:!1}}});function a({children:e}){return r.jsx(i.aH,{client:s,children:e})}},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{isNotFoundError:function(){return o},notFound:function(){return r}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return o},default:function(){return i}});let r=n(6399),o="next/dist/client/components/parallel-route-default.js";function i(){(0,r.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9195:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s,metadata:()=>i});var r=n(9510);let o=(0,n(8570).createProxy)(String.raw`/home/sky/Downloads/create-anything/apps/web/src/components/ClientProviders.jsx#ClientProviders`);n(5023);let i={title:"BrainEdify - Premier Educational Platform",description:"Transform your academic journey with our comprehensive courses and expert instructors."};function s({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{children:r.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}})}),r.jsx("body",{className:"antialiased",children:r.jsx(o,{children:e})})]})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[948,250],()=>n(8236));module.exports=r})();