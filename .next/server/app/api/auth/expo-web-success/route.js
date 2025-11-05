"use strict";(()=>{var e={};e.id=808,e.ids=[808],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8893:e=>{e.exports=require("buffer")},4770:e=>{e.exports=require("crypto")},1764:e=>{e.exports=require("util")},1568:e=>{e.exports=require("zlib")},7956:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>l,patchFetch:()=>m,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>h,staticGenerationAsyncStorage:()=>d});var s={};r.r(s),r.d(s,{GET:()=>n});var o=r(9303),a=r(8716),p=r(670),i=r(2990);async function n(e){let[t,r]=await Promise.all([(0,i.LP)({req:e,secret:process.env.AUTH_SECRET,secureCookie:process.env.AUTH_URL?.startsWith("https")||!1,raw:!0}),(0,i.LP)({req:e,secret:process.env.AUTH_SECRET,secureCookie:process.env.AUTH_URL?.startsWith("https")||!1})]);if(!r)return new Response(`
			<html>
				<body>
					<script>
						window.parent.postMessage({ type: 'AUTH_ERROR', error: 'Unauthorized' }, '*');
					</script>
				</body>
			</html>
			`,{status:401,headers:{"Content-Type":"text/html"}});let s={type:"AUTH_SUCCESS",jwt:t,user:{id:r.sub,email:r.email,name:r.name}};return new Response(`
		<html>
			<body>
				<script>
					window.parent.postMessage(${JSON.stringify(s)}, '*');
				</script>
			</body>
		</html>
		`,{headers:{"Content-Type":"text/html"}})}let u=new o.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/auth/expo-web-success/route",pathname:"/api/auth/expo-web-success",filename:"route",bundlePath:"app/api/auth/expo-web-success/route"},resolvedPagePath:"/home/sky/Downloads/create-anything/apps/web/src/app/api/auth/expo-web-success/route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:h}=u,l="/api/auth/expo-web-success/route";function m(){return(0,p.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:d})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,46],()=>r(7956));module.exports=s})();