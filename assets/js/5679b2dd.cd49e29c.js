"use strict";(self.webpackChunkreact_blog=self.webpackChunkreact_blog||[]).push([[5478],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(4137));const i={sidebar_position:9},o="useRef",c={unversionedId:"React/useRef",id:"React/useRef",title:"useRef",description:"- \u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 ref \u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u53ea\u6709\u4e2a current \u5c5e\u6027\uff0c\u521d\u59cb\u503c\u4e3a\u4f20\u5165\u7684\u53c2\u6570( initialValue )\u3002",source:"@site/docs/React/useRef.mdx",sourceDirName:"React",slug:"/React/useRef",permalink:"/docs/React/useRef",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"useContext",permalink:"/docs/React/useContext"},next:{title:"useMemo",permalink:"/docs/React/useMemo"}},l={},s=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useref"},"useRef"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"useRef\u7684\u4f5c\u7528\u8ba9\u4f60\u5f15\u7528\u4e00\u4e2a\u4e0d\u9700\u8981\u6e32\u67d3\u7684\u503c\u3002(\u6bd4\u5982\u7ed1\u5b9a\u9875\u9762\u7684DOM\u7684\u5143\u7d20\u503c)")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 ref \u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u53ea\u6709\u4e2a current \u5c5e\u6027\uff0c\u521d\u59cb\u503c\u4e3a\u4f20\u5165\u7684\u53c2\u6570( initialValue )\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7684 ref \u5bf9\u8c61\u5728\u7ec4\u4ef6\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u4fdd\u6301\u4e0d\u53d8"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u66f4\u65b0 current \u503c\u65f6\u5e76\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6(re-render) \uff0c\u8fd9\u662f\u4e0e useState \u4e0d\u540c\u7684\u5730\u65b9"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b0 useRef \u662f side effect (\u526f\u4f5c\u7528)\uff0c\u6240\u4ee5\u4e00\u822c\u5199\u5728 useEffect \u6216 event handler \u91cc"),(0,a.kt)("li",{parentName:"ul"},"useRef \u7c7b\u4f3c\u4e8e\u7c7b\u7ec4\u4ef6\u7684 this")))),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7528ref\u5f15\u7528\u4e00\u4e2a\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u7528\u4e00\u4e2a\u5f15\u7528\u6765\u64cd\u4f5cDOM"),(0,a.kt)("li",{parentName:"ol"},"\u907f\u514d\u91cd\u65b0\u521b\u5efa\u5f15\u7528\u7684\u5185\u5bb9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRef } from 'react';\n\nexport default function Counter() {\n  let ref = useRef(0);\n\n  function handleClick() {\n    ref.current = ref.current + 1;\n    alert('You clicked ' + ref.current + ' times!');\n  }\n\n  return (\n    <button onClick={handleClick}>\n      Click me!\n    </button>\n  );\n}\n")),(0,a.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent() {\n  // ...\n  // \ud83d\udea9 Don't write a ref during rendering\n  myRef.current = 123;\n  // ...\n  // \ud83d\udea9 Don't read a ref during rendering\n  return <h1>{myOtherRef.current}</h1>;\n}\n")),(0,a.kt)("p",{parentName:"div"},"You can read or write refs from event handlers or effects instead."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent() {\n  // ...\n  useEffect(() => {\n    // \u2705 You can read or write refs in effects\n    myRef.current = 123;\n  });\n  // ...\n  function handleClick() {\n    // \u2705 You can read or write refs in event handlers\n    doSomething(myOtherRef.current);\n  }\n  // ...\n}\n")))))}p.isMDXComponent=!0}}]);