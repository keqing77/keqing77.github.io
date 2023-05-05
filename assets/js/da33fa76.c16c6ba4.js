"use strict";(self.webpackChunkreact_blog=self.webpackChunkreact_blog||[]).push([[6495],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(v,l(l({ref:t},s),{},{components:n})):a.createElement(v,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(4137));const r={sidebar_position:1},l="Vue-introduce",o={unversionedId:"Vue/Vue-introduce",id:"Vue/Vue-introduce",title:"Vue-introduce",description:"\u2728Vue\u7684\u7531\u6765",source:"@site/docs/Vue/Vue-introduce.mdx",sourceDirName:"Vue",slug:"/Vue/Vue-introduce",permalink:"/docs/Vue/Vue-introduce",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Vue",permalink:"/docs/category/tutorial---vue"},next:{title:"Vue-setup & composition-api",permalink:"/docs/Vue/Vue-setup-composition-api"}},p={},u=[{value:"\u2728Vue\u7684\u7531\u6765",id:"vue\u7684\u7531\u6765",level:2},{value:"Vue\u4f5c\u8005",id:"vue\u4f5c\u8005",level:2},{value:"Vue\u7279\u70b9",id:"vue\u7279\u70b9",level:2},{value:"\u5b66\u4e60\u7248\u672c",id:"\u5b66\u4e60\u7248\u672c",level:2},{value:"\u57fa\u7840\u8bed\u6cd5",id:"\u57fa\u7840\u8bed\u6cd5",level:2},{value:"\u6570\u636e\u7ed1\u5b9a",id:"\u6570\u636e\u7ed1\u5b9a",level:3},{value:"\u5c5e\u6027\u7ed1\u5b9a",id:"\u5c5e\u6027\u7ed1\u5b9a",level:3},{value:"\u6307\u4ee4(directive)",id:"\u6307\u4ee4directive",level:3},{value:"v-if",id:"v-if",level:4},{value:"v-show",id:"v-show",level:4},{value:"v-model",id:"v-model",level:4},{value:"v-for",id:"v-for",level:4},{value:"v-bind",id:"v-bind",level:4},{value:"v-on",id:"v-on",level:4},{value:"v-slot",id:"v-slot",level:4}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vue-introduce"},"Vue-introduce"),(0,i.kt)("h2",{id:"vue\u7684\u7531\u6765"},"\u2728Vue\u7684\u7531\u6765"),(0,i.kt)("p",null,"\u5148\u7b80\u5355\u56de\u987e\u4e00\u4e0b\u524d\u7aef\u5de5\u7a0b\u5316\u7684\u53d1\u5c55\u5427"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Angular.js\u57282009\u5e74Google\u5185\u90e8\u4f7f\u7528\u5e76\u5f00\u6e90"),(0,i.kt)("li",{parentName:"ul"},"React\u662fFacebook\u57282013\u5e74\u5f00\u6e90\u7684\u4e00\u6b3e\u524d\u7aef\u6846\u67b6"),(0,i.kt)("li",{parentName:"ul"},"Vue\u7ed3\u5408\u4e86Angular\u548cReact\u7684\u4f18\u52bf,\u4e0e2014\u5e74\u53d1\u5e03")),(0,i.kt)("h2",{id:"vue\u4f5c\u8005"},"Vue\u4f5c\u8005"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5c24\u96e8\u6eaa, ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e2d\u56fd\u4eba"),", \u65e9\u5e74\u5c31\u8bfb\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e0a\u6d77\u590d\u65e6\u9644\u4e2d"),",\u672c\u79d1\u6bd5\u4e1a\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"Colgate University"),"\u827a\u672f\u53f2\uff0c\u7814\u7a76\u751f\u9636\u6bb5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Parsons"),"\u8bbe\u8ba1\u5b66\u9662\u83b7\u5f97Design & Technology\u827a\u672f\u7855\u58eb\u5b66\u4f4d\uff0c\u662f\u8bbe\u8ba1\u548c\u6280\u672f\u7684\u6df7\u5408\u3002\u6b63\u662f\u5728\u8bfb\u7855\u58eb\u671f\u95f4\uff0c\u4ed6\u5076\u7136\u63a5\u89e6\u5230\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript")," \uff0c\u4ece\u6b64\u88ab\u8fd9\u95e8\u7f16\u7a0b\u8bed\u8a00\u6df1\u6df1\u5438\u5f15\uff0c\u5f00\u542f\u4e86\u81ea\u5df1\u7684\u524d\u7aef\u751f\u6daf, \u8ddd\u4ed6\u672c\u4eba\u91c7\u8bbf\u6240\u8bf4: \u5f00\u59cb\u505a\u524d\u7aef\u7684\u4e00\u4e2a\u91cd\u8981\u539f\u56e0\u662f\uff0c\u6ca1\u6709\u4eba\u5e2e\u4ed6\u628a\u7f51\u7ad9\u8bbe\u8ba1\u51fa\u6765\u7684\u4f5c\u54c1\u653e\u5230\u7f51\u7ad9\u4e0a\u7ed9\u522b\u4eba\u6b23\u8d4f, \u968f\u540e\u5165\u804c",(0,i.kt)("inlineCode",{parentName:"p"},"Google"),", \u540e\u53d1\u5e03\u4e2a\u4eba\u9879\u76ee",(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),"\u5927\u83b7\u6210\u529f\u5168\u804c\u53bb\u7ef4\u62a4",(0,i.kt)("inlineCode",{parentName:"p"},"vuejs")," , \u5982\u4ecaVue\u5df2\u7ecf\u662f\u524d\u7aef\u4e09\u5927\u6846\u67b6\u4e4b\u4e00")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c24\u96e8\u6eaa\u4e5f\u662f\u4e2a\u8f6e\u5b50\u54e5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5c24\u96e8\u6eaa\u5f97\u76ca\u4e8eVue\u7684\u84ec\u52c3\u53d1\u5c55, \u4e5f\u9020\u4e86\u8bb8\u591a\u9020\u798f\u4e1a\u754c\u7684\u8f6e\u5b50,\u5176\u4e2d\u6bd4\u8f83\u8457\u540d\u7684\u6709"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Vue")," (\u524d\u7aefstar\u6570\u91cf\u6700\u591a)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Vite")," (\u4e0b\u4e00\u4ee3\u524d\u7aef\u6784\u5efa\u5de5\u5177)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VuePress & VitePress")," (\u672c\u7ad9\u6240\u91c7\u7528\u7684\u7684\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u4ed6\u61c2\u4e2a\u9524\u5b50Vue")," \u59cb\u4f5c\u4fd1\u8005 ...etc")))),(0,i.kt)("h2",{id:"vue\u7279\u70b9"},"Vue\u7279\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e2d\u6587\u793e\u533a\u6d3b\u8dc3 (\u6307\u77e5\u4e4e\u5c24\u5927\ud83d\ude01)"),(0,i.kt)("li",{parentName:"ul"},"\u6027\u80fd\u5353\u8d8a, API\u7b80\u5355\u6613\u7528, \u6613\u4e0a\u624b (\u5b66\u5b8c\u524d\u7aef\u4e09\u4ef6\u5957\u5c31\u53ef\u4ee5\u770b\u6587\u6863\u4e0a\u624b\u64b8)"),(0,i.kt)("li",{parentName:"ul"},"SFC(single file component)"),(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h2",{id:"\u5b66\u4e60\u7248\u672c"},"\u5b66\u4e60\u7248\u672c"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u90fd2022\u5e74\u4e86,\u8fd8\u4e0d\u5f00\u59cb\u5b66Vue3\ud83d\ude21")),(0,i.kt)("p",null,"\u4f20\u9001\u6587\u6863: ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue3")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create vite\n# chose vue\n")),(0,i.kt)("p",null,"\u5355\u6587\u4ef6\u7ec4\u4ef6, ",(0,i.kt)("inlineCode",{parentName:"p"},".vue"),"\u4f1a\u7f16\u8bd1\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"html"),", \u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"tmplate(\u7ed3\u6784)"),",",(0,i.kt)("inlineCode",{parentName:"p"},"style(\u6837\u5f0f)"),",",(0,i.kt)("inlineCode",{parentName:"p"},"script(\u903b\u8f91)")," \u4e09\u90e8\u5206"),(0,i.kt)("h2",{id:"\u57fa\u7840\u8bed\u6cd5"},"\u57fa\u7840\u8bed\u6cd5"),(0,i.kt)("h3",{id:"\u6570\u636e\u7ed1\u5b9a"},"\u6570\u636e\u7ed1\u5b9a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<span>Message: {{ msg }}</span>")," Vue\u4f7f\u7528\u53cc\u5927\u62ec\u53f7\u7684\u8bed\u6cd5\u63d2\u503c , \u8f7b\u677e\u5c06",(0,i.kt)("inlineCode",{parentName:"p"}," \u7ec4\u4ef6\u5b9e\u4f8b\u7684\u5c5e\u6027\u503c")," \u5173\u8054\u5728\u4e00\u8d77, \u4f60\u8fd8\u53ef\u4ee5\u5728\u5176\u4e2d\u5199",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u8868\u8fbe\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"{{ number + 1 }}\n\n{{ ok ? 'YES' : 'NO' }}\n\n{{ message.split('').reverse().join('') }}\n\n<div :id=\"`list-${id}`\"></div>\n")),(0,i.kt)("h3",{id:"\u5c5e\u6027\u7ed1\u5b9a"},"\u5c5e\u6027\u7ed1\u5b9a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'<img :src="xxx" />')," \u4f7f\u7528v-bind:\u5c5e\u6027\u540d=\u503c ,\u8fdb\u884c\u5c5e\u6027\u503c\u7ed1\u5b9a, ",(0,i.kt)("inlineCode",{parentName:"p"},"v-bind"),"\u88ab\u79f0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"\u6307\u4ee4")," , \u4f60\u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},":")),(0,i.kt)("h3",{id:"\u6307\u4ee4directive"},"\u6307\u4ee4(directive)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6307\u4ee4\u662f\u5e26\u6709v-\u524d\u7f00\u7684\u7279\u6b8a\u5c5e\u6027 , \u542f\u53d1\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"}," Angular")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ng-xx"))),(0,i.kt)("h4",{id:"v-if"},"v-if"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script setup>\nconst seen = true;\n<\/script>\n\n<p v-if="seen">Now you see me</p>  // Now you see me\n')),(0,i.kt)("h4",{id:"v-show"},"v-show"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script setup>\nconst seen = true;\n<\/script>\n\n<p v-show="seen">Now you see me</p>  // Now you see me\n')),(0,i.kt)("h4",{id:"v-model"},"v-model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script setup>\nconst searchText = true;\n<\/script>\n\n<input v-model="searchText" />\n')),(0,i.kt)("h4",{id:"v-for"},"v-for"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div v-for="item in items">\n  {{ item.text }}\n</div>\n\n<div v-for="(item, index) in items"></div>\n<div v-for="(value, key) in object"></div>\n<div v-for="(value, name, index) in object"></div>\n\n<div v-for="item in items" :key="item.id">\n  {{ item.text }}\n</div>\n')),(0,i.kt)("h4",{id:"v-bind"},"v-bind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\nNote that there are some constraints to the argument expression,\nas explained in the "Dynamic Argument Value Constraints" and "Dynamic Argument Syntax Constraints" sections below.\n--\x3e\n<a v-bind:[attributeName]="url"> ... </a>\n\n\x3c!-- shorthand --\x3e\n<a :[attributeName]="url"> ... </a>\n')),(0,i.kt)("h4",{id:"v-on"},"v-on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a v-on:[eventName]="doSomething"> ... </a>\n\n\x3c!-- shorthand --\x3e\n<a @[eventName]="doSomething">\n')),(0,i.kt)("h4",{id:"v-slot"},"v-slot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Named slots --\x3e\n<BaseLayout>\n  <template v-slot:header>\n    Header content\n  </template>\n\n  <template v-slot:default>\n    Default slot content\n  </template>\n\n  <template v-slot:footer>\n    Footer content\n  </template>\n</BaseLayout>\n\n\x3c!-- Named slot that receives props --\x3e\n<InfiniteScroll>\n  <template v-slot:item="slotProps">\n    <div class="item">\n      {{ slotProps.item.text }}\n    </div>\n  </template>\n</InfiniteScroll>\n\n\x3c!-- Default slot that receive props, with destructuring --\x3e\n<Mouse v-slot="{ x, y }">\n  Mouse position: {{ x }}, {{ y }}\n</Mouse>\n')))}c.isMDXComponent=!0}}]);