if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DHwWQuI9.js",revision:null},{url:"assets/index-DTilCljX.css",revision:null},{url:"assets/index.es-cU37vxbB.js",revision:null},{url:"assets/purify.es-DGIRlouP.js",revision:null},{url:"index.html",revision:"eb29a28ebabda56a9543269cb153a35a"},{url:"registerSW.js",revision:"24a0eb6b304c7b321faaef4ca6a1c507"},{url:"pwa-64x64.png",revision:"a53cbe1132bcd75738afe299e5a35d3b"},{url:"pwa-192x192.png",revision:"cd956217d933ac572037462e5722e9b9"},{url:"pwa-512x512.png",revision:"b980339f7ec9246ed20afa556cd5699f"},{url:"maskable-icon-512x512.png",revision:"bf3e9265d61fe25139c8543e97f3e50a"},{url:"manifest.webmanifest",revision:"1b528fd44fea720d909261195fdb1d54"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
