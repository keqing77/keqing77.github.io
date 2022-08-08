"use strict";(self.webpackChunkreact_blog=self.webpackChunkreact_blog||[]).push([[2622],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const o={sidebar_position:6},l="useEffect",i={unversionedId:"React/useEffect",id:"React/useEffect",title:"useEffect",description:"side Effect",source:"@site/docs/React/useEffect.mdx",sourceDirName:"React",slug:"/React/useEffect",permalink:"/docs/React/useEffect",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"useState",permalink:"/docs/React/useState"},next:{title:"useReducer",permalink:"/docs/React/useReducer"}},c={},u=[{value:"side Effect",id:"side-effect",level:2},{value:"\u7eaf\u51fd\u6570",id:"\u7eaf\u51fd\u6570",level:3},{value:"\u526f\u4f5c\u7528",id:"\u526f\u4f5c\u7528",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u6e05\u9664\u526f\u4f5c\u7528",id:"\u6e05\u9664\u526f\u4f5c\u7528",level:3},{value:"\u6a21\u62df\u751f\u547d\u5468\u671f",id:"\u6a21\u62df\u751f\u547d\u5468\u671f",level:2},{value:"\u6a21\u62dfcomponentDidMount",id:"\u6a21\u62dfcomponentdidmount",level:3},{value:"\u6a21\u62dfcomponentDidUpdate",id:"\u6a21\u62dfcomponentdidupdate",level:3},{value:"\u6a21\u62dfcomponentWillUnmount",id:"\u6a21\u62dfcomponentwillunmount",level:3},{value:"\u81ea\u52a8\u5904\u7406\u4f9d\u8d56\u9879",id:"\u81ea\u52a8\u5904\u7406\u4f9d\u8d56\u9879",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"useeffect"},"useEffect"),(0,r.kt)("h2",{id:"side-effect"},"side Effect"),(0,r.kt)("h3",{id:"\u7eaf\u51fd\u6570"},"\u7eaf\u51fd\u6570"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8e\u51fd\u6570\u5f0f\u7f16\u7a0b\u8303\u5f0f\u4e2d\u7684\u7eaf\u51fd\u6570\u6982\u5ff5\uff0c\u5982\u679c\u4e00\u4e2a\u51fd\u6570\u6ee1\u8db3\u4ee5\u4e0b\u4e24\u4e2a\u6761\u4ef6\uff0c\u5c31\u53ef\u4ee5\u8bf4\u5b83\u662f\u7eaf\u7684\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5176\u8fd4\u56de\u503c\u4ec5\u7531\u5176\u8f93\u5165\u503c\u51b3\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u76f8\u540c\u7684\u8f93\u5165\u503c\uff0c\u5176\u8fd4\u56de\u503c\u603b\u662f\u76f8\u540c\u7684")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7eaf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5,6}","{5,6}":!0},"const sum = (a,b) => {\n  return a + b;\n}\nsum(1,2)  // 3\n// \u65e0\u8bba\u8c03\u7528\u591a\u5c11\u6b21, \u53ea\u8981\u4f20\u51651\u548c2, \u8fd4\u56de\u7684\u7ed3\u679c\u6c38\u8fdc\u662f3\n// \u8fd4\u56de\u503c\u53ea\u7531 \u51fd\u6570\u53c2\u6570\u51b3\u5b9a , \u4e0e\u5916\u754c\u53d8\u91cf\u65e0\u5173\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0d\u7eaf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{6}","{6}":!0},"const a = 2;\nconst sum = (b) => {\n  return a + b;\n}\nsum(1)\n// \u51fd\u6570\u7684\u8fd4\u56de\u503c\u4e0d\u786e\u5b9a, \u56e0\u4e3a\u4f7f\u7528\u4e86\u5916\u90e8\u53d8\u91cf a , \u5373\u4fbf\u4f7f\u7528\u4e86\u76f8\u540c\u7684\u53c2\u6570\u8f93\u5165, \u8fd4\u56de\u7ed3\u679c\u4f9d\u7136\u65e0\u6cd5\u4fdd\u8bc1\u662f\u76f8\u540c\u7684\n")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u7eaf\u7ec4\u4ef6")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u7eaf\u7684\u8bdd JSX\u662f\u4e0d\u53ef\u9884\u6d4b\u7684\uff0c\u591a\u6b21\u8c03\u7528\u8fd9\u4e2a\u7ec4\u4ef6\u5c06\u4ea7\u751f\u4e0d\u540c\u7684JSX"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7ec4\u4ef6\u5fc5\u987b\u662f\u7eaf\u7684\uff0c\u5b83\u4e0d\u5e94\u8be5\u6539\u53d8\u6e32\u67d3\u524d\u5b58\u5728\u7684\u4efb\u4f55\u5bf9\u8c61\u6216\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u540c\u7684\u8f93\u5165\uff0c\u76f8\u540c\u7684\u8f93\u51fa\u3002\u5728\u8f93\u5165\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u5e94\u8be5\u603b\u662f\u8fd4\u56de\u76f8\u540c\u7684JSX\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7prop\u6765\u89e3\u51b3\uff0c\u8fd4\u56de\u7684JSX\u53ea\u53d6\u51b3\u4e8eprops\u7684\u503c")))),(0,r.kt)("h3",{id:"\u526f\u4f5c\u7528"},"\u526f\u4f5c\u7528"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},'\u526f\u4f5c\u7528\u662f\u4e0d\u53ef\u9884\u6d4b\u7684\uff0c\u56e0\u4e3a\u5b83\u4eec\u662f\u4e0e "\u5916\u90e8\u4e16\u754c "\u4e00\u8d77\u8fdb\u884c\u7684\u884c\u52a8\u3002'),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u9700\u8981\u5728\u6211\u4eec\u7684React\u7ec4\u4ef6\u4e4b\u5916\u505a\u4e00\u4e9b\u4e8b\u60c5\u65f6\uff0c\u6211\u4eec\u4f1a\u6267\u884c\u4e00\u4e2a\u526f\u4f5c\u7528\u3002\u7136\u800c\uff0c\u6267\u884c\u4e00\u4e2a\u526f\u4f5c\u7528\u4e0d\u4f1a\u7ed9\u6211\u4eec\u4e00\u4e2a\u53ef\u9884\u6d4b\u7684\u7ed3\u679c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect"),"\u5b58\u5728\u7684\u539f\u56e0\uff1a\u63d0\u4f9b\u4e00\u79cd\u65b9\u6cd5\u6765\u5904\u7406\u5728\u672c\u6765\u662f\u7eafReact\u7ec4\u4ef6\u4e2d\u6267\u884c\u8fd9\u4e9b\u526f\u4f5c\u7528")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5e38\u89c1\u7684\u526f\u4f5c\u7528\u5305\u62ec\u3002"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"console.log"),(0,r.kt)("li",{parentName:"ul"},"\u5411API\u53d1\u51fa\u8bf7\u6c42\uff0c\u4ee5\u83b7\u53d6\u540e\u7aef\u670d\u52a1\u5668\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u4e0e\u6d4f\u89c8\u5668API\u8fdb\u884c\u4ea4\u4e92\uff08\u5373\u76f4\u63a5\u4f7f\u7528\u6587\u6863\u6216\u7a97\u53e3\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e0d\u53ef\u9884\u77e5\u7684\u8ba1\u65f6\u529f\u80fd\uff0c\u5982setTimeout\u6216setInterval"))),(0,r.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// 1. import useEffect\nimport { useEffect } from 'react';\n\nfunction MyComponent() {\n  // 2. call it above the returned JSX\n  // 3. pass two arguments to it: a function and an array\n  useEffect(() => {}, []);\n\n  // return ...\n}\n")),(0,r.kt)("h3",{id:"\u6e05\u9664\u526f\u4f5c\u7528"},"\u6e05\u9664\u526f\u4f5c\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Timer() {\n  const [time, setTime] = useState(0);\n\n  useEffect(() => {\n    let interval = setInterval(() => setTime(1), 1000);\n\n    return () => {\n      // setInterval cleared when component unmounts\n      clearInterval(interval);\n    }\n  }, []);\n}\n")),(0,r.kt)("h2",{id:"\u6a21\u62df\u751f\u547d\u5468\u671f"},"\u6a21\u62df\u751f\u547d\u5468\u671f"),(0,r.kt)("h3",{id:"\u6a21\u62dfcomponentdidmount"},"\u6a21\u62dfcomponentDidMount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u7b2c\u4e8c\u4e2a\u53c2\u6570, \u4f9d\u8d56\u9879\u4e3a\u7a7a\u6570\u7ec4\nuseEffect(()=>{console.log('\u7b2c\u4e00\u6b21\u6e32\u67d3\u65f6\u8c03\u7528')},[])\n")),(0,r.kt)("h3",{id:"\u6a21\u62dfcomponentdidupdate"},"\u6a21\u62dfcomponentDidUpdate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"//\u6ca1\u6709\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4ee3\u8868\u76d1\u542c\u6240\u6709\u7684\u5c5e\u6027\u66f4\u65b0\nuseEffect(()=>{console.log('\u4efb\u610f\u5c5e\u6027\u503c\u6539\u53d8')})\n//\u76d1\u542c\u591a\u4e2a\u5c5e\u6027\u7684\u53d8\u5316\u9700\u8981\u5c06\u5c5e\u6027\u4f5c\u4e3a\u6570\u7ec4\u4f20\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570\nuseEffect(()=>{console.log('a\u7684\u503c\u53d8\u5316\u4e86')},[a,b])\n")),(0,r.kt)("h3",{id:"\u6a21\u62dfcomponentwillunmount"},"\u6a21\u62dfcomponentWillUnmount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u4f7f\u7528return\nuseEffect(()=>{\n  const timer = setTimeout(()=>{\n      ...\n  },1000)\n  return()=>{\n      console.log('\u7ec4\u4ef6\u9500\u6bc1\u524d\u6e05\u9664\u5b9a\u65f6\u5668/\u76d1\u542c\u5668')\n      clearTimerout(timer)\n  }\n})\n")),(0,r.kt)("h3",{id:"\u81ea\u52a8\u5904\u7406\u4f9d\u8d56\u9879"},"\u81ea\u52a8\u5904\u7406\u4f9d\u8d56\u9879"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/Huxpro"},"\u9ec4\u7384")," \u6b63\u5728\u4e3aReact \u5f00\u53d1\u65b0\u7684 API ",(0,r.kt)("inlineCode",{parentName:"p"},"React Forget"),"\u6765\u89e3\u51b3 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u4f9d\u8d56\u9879\u7684\u95ee\u9898,"))}p.isMDXComponent=!0}}]);