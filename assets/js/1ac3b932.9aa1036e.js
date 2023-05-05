"use strict";(self.webpackChunkreact_blog=self.webpackChunkreact_blog||[]).push([[9595],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,v=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(4137));const o={sidebar_position:11},i="Vue-Router",l={unversionedId:"Vue/Vue-Router",id:"Vue/Vue-Router",title:"Vue-Router",description:"\u6587\u6863\u5730\u5740: Vue-RouterV4",source:"@site/docs/Vue/Vue-Router.mdx",sourceDirName:"Vue",slug:"/Vue/Vue-Router",permalink:"/docs/Vue/Vue-Router",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Vue-Fragment",permalink:"/docs/Vue/Vue-Fragment"},next:{title:"Vue-Pinia",permalink:"/docs/Vue/Vue-Pinia"}},u={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8def\u7531\u7ec4\u4ef6",id:"\u8def\u7531\u7ec4\u4ef6",level:2},{value:"<code>&lt;router-view /&gt;</code>",id:"router-view-",level:3},{value:"<code>&lt;router-link /&gt;</code>",id:"router-link-",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u52a8\u6001\u8def\u7531",id:"\u52a8\u6001\u8def\u7531",level:3},{value:"\u5d4c\u5957\u8def\u7531",id:"\u5d4c\u5957\u8def\u7531",level:3},{value:"\u8def\u7531\u4f20\u53c2",id:"\u8def\u7531\u4f20\u53c2",level:3},{value:"\u8def\u7531\u5b88\u536b",id:"\u8def\u7531\u5b88\u536b",level:3},{value:"\u8def\u7531\u5143\u4fe1\u606f",id:"\u8def\u7531\u5143\u4fe1\u606f",level:3},{value:"\u8def\u7531\u61d2\u52a0\u8f7d",id:"\u8def\u7531\u61d2\u52a0\u8f7d",level:3}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vue-router"},"Vue-Router"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Vue\u5b98\u7f51\u8def\u7531\u7ec4\u4ef6\u5e93")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6587\u6863\u5730\u5740: ",(0,a.kt)("a",{parentName:"p",href:"https://router.vuejs.org/"},"Vue-RouterV4"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"\u4ec0\u4e48\u662f\u8def\u7531"),"\n\u8def\u7531\u5c31\u662f\u6839\u636eurl\u7684\u53d8\u5316\u52a0\u8f7d\u76f8\u5e94\u7684\u7ec4\u4ef6\u5230\u9875\u9762\u4e0a"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u6700\u7ec8\u4f1a\u88ab\u6e32\u67d3\u6210html\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"<a>")," \u6807\u7b7e")))),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm i vue-router@4\n# yarn\nyarn add vue-router@4\n# pnpm\npnpm i vue-router@4\n")),(0,a.kt)("h2",{id:"\u8def\u7531\u7ec4\u4ef6"},"\u8def\u7531\u7ec4\u4ef6"),(0,a.kt)("h3",{id:"router-view-"},(0,a.kt)("inlineCode",{parentName:"h3"},"<router-view />")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"router-view "),"\u5c06\u663e\u793a\u4e0e url \u5bf9\u5e94\u7684\u7ec4\u4ef6\u3002\u4f60\u53ef\u4ee5\u628a\u5b83\u653e\u5728\u4efb\u4f55\u5730\u65b9\uff0c\u4ee5\u9002\u5e94\u4f60\u7684\u5e03\u5c40\u3002"),(0,a.kt)("h3",{id:"router-link-"},(0,a.kt)("inlineCode",{parentName:"h3"},"<router-link />")),(0,a.kt)("p",null,"\u4f7f\u7528\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"router-link "),"\u6765\u521b\u5efa\u94fe\u63a5\u3002\u8fd9\u4f7f\u5f97 ",(0,a.kt)("inlineCode",{parentName:"p"},"Vue Router")," \u53ef\u4ee5\u5728\u4e0d\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u7684\u60c5\u51b5\u4e0b\u66f4\u6539 URL\uff0c\u5904\u7406 URL \u7684\u751f\u6210\u4ee5\u53ca\u7f16\u7801\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u8def\u7531\u7ec4\u4ef6")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"template"),",\u4e5f\u53ef\u4ee5\u662f\u5f15",(0,a.kt)("inlineCode",{parentName:"li"},"\u5165\u7684\u5176\u4ed6\u7ec4\u4ef6"))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e9b\u8def\u7531")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8def\u7531\u90fd\u9700\u8981\u6620\u5c04\u5230\u4e00\u4e2a\u7ec4\u4ef6, \u5305\u62ec\u5d4c\u5957\u8def\u7531")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8def\u7531\u5b9e\u4f8b\u5e76\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"li"},"routes")," \u914d\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6erouter"),(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5e76\u6302\u8f7d\u5230\u6839\u5b9e\u4f8b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u4ee5 this.$route \u7684\u5f62\u5f0f\u8bbf\u95ee\u5f53\u524d\u8def\u7531"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// router/index.js\nimport { createRouter, createWebHistory } from 'vue-router'\nimport Home from '../views/Home.vue'\nconst routes = [\n  {\n    path: '/',\n    name: 'Home',\n    component: Home\n  },\n  {\n    path: '/about',\n    name: 'About',\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: () => import(/* webpackChunkName: \"about\" */ '../views/About.vue')\n  }\n]\nconst router = createRouter({\n  history: createWebHistory(process.env.BASE_URL),\n  routes\n})\nexport default router\n")),(0,a.kt)("h3",{id:"\u52a8\u6001\u8def\u7531"},"\u52a8\u6001\u8def\u7531"),(0,a.kt)("h3",{id:"\u5d4c\u5957\u8def\u7531"},"\u5d4c\u5957\u8def\u7531"),(0,a.kt)("h3",{id:"\u8def\u7531\u4f20\u53c2"},"\u8def\u7531\u4f20\u53c2"),(0,a.kt)("h3",{id:"\u8def\u7531\u5b88\u536b"},"\u8def\u7531\u5b88\u536b"),(0,a.kt)("h3",{id:"\u8def\u7531\u5143\u4fe1\u606f"},"\u8def\u7531\u5143\u4fe1\u606f"),(0,a.kt)("h3",{id:"\u8def\u7531\u61d2\u52a0\u8f7d"},"\u8def\u7531\u61d2\u52a0\u8f7d"))}s.isMDXComponent=!0}}]);