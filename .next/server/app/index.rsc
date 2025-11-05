2:I[9107,[],"ClientPageRoot"]
3:I[984,["473","static/chunks/473-03ad376cfd481db0.js","557","static/chunks/557-33d523e13a5ebc8d.js","954","static/chunks/954-a092385621704fe7.js","931","static/chunks/app/page-27a6d15b68a20cf3.js"],"default",1]
5:I[3854,["745","static/chunks/745-cedc4264590b4b25.js","185","static/chunks/app/layout-b391e112f564de66.js"],"ClientProviders"]
6:I[4707,[],""]
7:I[6423,[],""]
4:T99e,
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
          0:["VCSp8EbqFpQI7bLann-6X",[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],["",{"children":["__PAGE__",{},[["$L1",["$","$L2",null,{"props":{"params":{},"searchParams":{}},"Component":"$3"}],null],null],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/58805758248091a5.css","precedence":"next","crossOrigin":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":["$","style",null,{"dangerouslySetInnerHTML":{"__html":"$4"}}]}],["$","body",null,{"className":"antialiased","children":["$","$L5",null,{"children":["$","$L6",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L7",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[]}]}]}]]}]],null],null],["$L8",null]]]]
8:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"BrainEdify - Premier Educational Platform"}],["$","meta","3",{"name":"description","content":"Transform your academic journey with our comprehensive courses and expert instructors."}]]
1:null
