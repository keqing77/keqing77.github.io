"use strict";(self.webpackChunkreact_blog=self.webpackChunkreact_blog||[]).push([[3815],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),u=a(7094),s=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:m,values:v,groupId:b,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:C}=(0,u.U)(),[w,O]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=b){const e=N[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==w&&(E(t),O(n),null!=b&&C(b,String(n)))},P=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:P,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},6617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={slug:"blog",title:"\u8fc1\u79fb\u5230docusaurus\u8bb0\u5f55",authors:"lavard",tags:["docusaurus"]},u=void 0,s={permalink:"/blog/blog",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-7-26-blog.mdx",source:"@site/blog/2022-7-26-blog.mdx",title:"\u8fc1\u79fb\u5230docusaurus\u8bb0\u5f55",description:"\u4e3a\u4f55\u9009\u62e9 docusaurus?",date:"2022-07-26T00:00:00.000Z",formattedDate:"July 26, 2022",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:2.53,truncated:!1,authors:[{name:"lavard",title:"Front End Engineer @ Thoughworks",url:"https://github.com/lalalavard",imageURL:"https://avatars.githubusercontent.com/u/48318812?v=4",key:"lavard"}],frontMatter:{slug:"blog",title:"\u8fc1\u79fb\u5230docusaurus\u8bb0\u5f55",authors:"lavard",tags:["docusaurus"]},prevItem:{title:"\u6f2b\u753b\u9605\u8bfb\u6e05\u5355",permalink:"/blog/comic"},nextItem:{title:"\u4e00\u4e2a\u524d\u7aef\u5de5\u7a0b\u5e08\u7684\u684c\u9762\u642d\u914d!",permalink:"/blog/desktop"}},c={authorsImageUrls:[void 0]},p=[{value:"\u4e3a\u4f55\u9009\u62e9 docusaurus?",id:"\u4e3a\u4f55\u9009\u62e9-docusaurus",level:2},{value:"\u8fc1\u79fb\u82b1\u8d39\u65f6\u95f4",id:"\u8fc1\u79fb\u82b1\u8d39\u65f6\u95f4",level:2},{value:"\u4f53\u9a8c\u611f\u60f3",id:"\u4f53\u9a8c\u611f\u60f3",level:2},{value:"\u90e8\u7f72\u4e0e\u81ea\u52a8\u5316\u6784\u5efa",id:"\u90e8\u7f72\u4e0e\u81ea\u52a8\u5316\u6784\u5efa",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e3a\u4f55\u9009\u62e9-docusaurus"},"\u4e3a\u4f55\u9009\u62e9 docusaurus?"),(0,r.kt)("p",null,"\u7b14\u8005\u4e4b\u524d\u7684\u535a\u5ba2\u4e00\u5f00\u59cb\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"hexo"),"\u642d\u5efa\u7684, \u540e\u6765\u5b66\u4e60\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"vue"),",\u5076\u7136\u901b\u77e5\u4e4e\u53d1\u73b0\u5c24\u5927\u5199\u4e86\u4e2a\u9879\u76ee,\u6ca1\u9519\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"vuepress"),", \u4e00\u4f7f\u7528\u4fbf\u7231\u4e0a\u4e86,\u540e\u6765\u968f\u7740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Vue3"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Vite"),"\u7684\u8bde\u751f\u53c8\u8fc1\u79fb\u81f3",(0,r.kt)("inlineCode",{parentName:"p"},"Vitepress"),", \u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"Vite"),"\u95ea\u7535\u822c\u7684\u6784\u5efa\u901f\u5ea6\u5341\u5206\u6ee1\u610f, \u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"Vitepress"),"\u5c24\u5927\u4ea4\u7ed9\u4e86 core team \u7684\u65e5\u672c\u5f00\u53d1\u8005,\u4f46\u8fd9\u5f00\u53d1\u8005\u5b9e\u5728\u592a\u61d2\u4e86, \u5b58\u5728\u8bb8\u591a",(0,r.kt)("inlineCode",{parentName:"p"},"Bug")," , \u52a0\u4e0a\u5728\u5de5\u4f5c\u4e2d\u66f4\u591a\u5730\u7684\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"React"),", \u6700\u7ec8\u51b3\u5b9a\u8fc1\u79fb\u81f3",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5404\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\u5bf9\u6bd4")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"VitePress",label:"VitePress",mdxType:"TabItem"},"VitePress\u5341\u5206\u5f3a\u5927,\u501f\u52a9\u4e8eVue3\u7684\u5f3a\u5927\u8868\u8fbe\u80fd\u529b\u548cVite\u7684\u95ea\u7535\u822c\u6784\u5efa\u901f\u5ea6, \u4e00\u5ea6\u4f7f\u6211\u60f3\u8981\u4e3a\u5176\u8d21\u732e\u4ee3\u7801 , \u4f46\u73b0\u5728\u7684\u5de5\u4f5c\u6280\u672f\u6808\u548cVue\u76f8\u5173\u4e0d\u591a, \u52a0\u4e0a\u6211\u592a\u61d2\u4e86\ud83d\ude0a"),(0,r.kt)(o.Z,{value:"docusaurus",label:"docusaurus",mdxType:"TabItem"},"Facebook\u56e2\u961f\u503e\u529b\u4e4b\u4f5c, \u5b8c\u6210\u5ea6\u5f88\u9ad8 , \u65e2\u80fd\u5f00\u7bb1\u5373\u7528,\u53c8\u80fd\u5f88\u597d\u5730\u6ee1\u8db3\u5b9a\u5236\u5316\u9700\u6c42,\u975e\u5e38\u81ea\u7531\u4e14\u5f3a\u5927, awesome! \ud83d\udc4f"),(0,r.kt)(o.Z,{value:"banana",label:"Next.js",mdxType:"TabItem"},"\u6740\u9e21\u7109\u7528\u725b\u5200, docusaurus\u5df2\u7ecf\u5f88\u597d\u5730\u6ee1\u8db3\u4e86\u6211\u7684\u9700\u6c42, \u9664\u975e\u540e\u7eed\u8981\u8ffd\u6c42\u66f4\u597d\u7684SEO\u6027\u80fd")))),(0,r.kt)("h2",{id:"\u8fc1\u79fb\u82b1\u8d39\u65f6\u95f4"},"\u8fc1\u79fb\u82b1\u8d39\u65f6\u95f4"),(0,r.kt)("p",null,"\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"VitePress"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus"),"\u90fd\u662f\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Markdown"),"\u62d3\u5c55\u8bed\u6cd5, \u5e76\u5206\u522b\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"Vue"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"React"),"\u7ec4\u4ef6, \u6240\u4ee5\u8fc1\u79fb\u7684\u4e3b\u8981\u5de5\u4f5c\u90fd\u662f\u4e00\u4e9b\u7684\u683c\u5f0f\u7684\u66f4\u6539,\u4ee5\u53ca\u9759\u6001\u8d44\u6e90\u8def\u5f84\u7684\u66f4\u6539, \u540c\u65f6\u5bf9\u6837\u5f0f\u8fdb\u884c\u4e86\u91cd\u6784, \u9646\u7eed\u8fd8\u662f\u82b1\u4e86\u4e00\u5468\u591a\u7684\u65f6\u95f4 \ud83d\ude07, \u4e0b\u6b21\u4e0d\u6298\u817e\u4e86~"),(0,r.kt)("h2",{id:"\u4f53\u9a8c\u611f\u60f3"},"\u4f53\u9a8c\u611f\u60f3"),(0,r.kt)("p",null,"\u6839\u636e\u6211\u7684\u6027\u80fd\u6d4b\u8bd5, \u7f51\u7ad9\u52a0\u8f7d\u901f\u5ea6 \u662f\u6bd4 ",(0,r.kt)("inlineCode",{parentName:"p"},"VitePress")," \u8981\u6162\u7684, \u4e3b\u8981\u662f\u4ee5\u4e0b\u4e24\u65b9\u9762"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9879\u76ee\u51b7\u542f\u52a8"),(0,r.kt)("li",{parentName:"ul"},"\u9875\u9762\u70ed\u66f4\u65b0")),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"vite")," \u7684\u533a\u522b \ud83d\ude02 , \u5e0c\u671b\u6709\u671d\u4e00\u65e5\u4e5f\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Vite")," \u7ed3\u5408\u5728\u4e00\u8d77."),(0,r.kt)("h2",{id:"\u90e8\u7f72\u4e0e\u81ea\u52a8\u5316\u6784\u5efa"},"\u90e8\u7f72\u4e0e\u81ea\u52a8\u5316\u6784\u5efa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u90e8\u7f72\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"github pages"),", \u540e\u7eed\u4f1a\u6258\u7ba1\u81f3 ",(0,r.kt)("inlineCode",{parentName:"li"},"vercel")),(0,r.kt)("li",{parentName:"ul"},"\u91c7\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"github action"),"\u81ea\u52a8\u5316\u6784\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u7eed\u8fd8\u4f1a\u5957\u4e0a",(0,r.kt)("inlineCode",{parentName:"li"},"Cloud flare"),"\u7684 cdn \u67b6\u52bf")))}m.isMDXComponent=!0}}]);