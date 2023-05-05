"use strict";(self.webpackChunkreact_blog=self.webpackChunkreact_blog||[]).push([[799],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(4137));const o={sidebar_position:10},i="useMemo",s={unversionedId:"React/useMemo",id:"React/useMemo",title:"useMemo",description:"useMemo \u4e3b\u8981\u7528\u4e8e\u6027\u80fd\u4f18\u5316\uff0c\u5728\u590d\u6742\u7684\u8ba1\u7b97\u573a\u666f\u4e0b\u4f7f\u7528\u3002",source:"@site/docs/React/useMemo.mdx",sourceDirName:"React",slug:"/React/useMemo",permalink:"/docs/React/useMemo",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"useRef",permalink:"/docs/React/useRef"},next:{title:"useCallBack",permalink:"/docs/React/useCallBack"}},c={},m=[],l={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usememo"},"useMemo"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"useMemo\u5e38\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"h5"},"React \u6027\u80fd\u4f18\u5316"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"useMemo \u4e3b\u8981\u7528\u4e8e\u6027\u80fd\u4f18\u5316\uff0c\u5728\u590d\u6742\u7684\u8ba1\u7b97\u573a\u666f\u4e0b\u4f7f\u7528\u3002\nuseMemo\u7684\u4f5c\u7528\u4e3b\u8981\u662f \u6570\u636e\u7f13\u5b58\uff0c\u5f53\u7f13\u5b58\u7684\u72b6\u6001\u6570\u636e\uff0c\u53d1\u751f\u6539\u53d8\u65f6\u624d\u4f1a\u5237\u65b0\u6570\u636e\uff0c\u5982\u679c\u7f13\u5b58\u7684\u72b6\u6001\u6570\u636e\u6ca1\u6709\u53d1\u751f\u6539\u53d8\u3002 \u5219\u4e0d\u4f1a\u5237\u65b0\u7f13\u5b58\u533a\u57df\uff0c\u4ece\u800c\u8fbe\u5230\u90e8\u5206\u533a\u57df\u7f13\u5b58\u7684\u6548\u679c\uff0c\u51cf\u5c11\u91cd\u590d\u6e32\u67d3\u6b21\u6570\uff0c\u63d0\u9ad8\u5e94\u7528\u6027\u80fd"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u7236\u7ec4\u4ef6\u66f4\u65b0\u4f1a\u5bfc\u81f4\u5b50\u7ec4\u4ef6\u4e5f\u66f4\u65b0\uff0c\u4f7f\u7528memo \u7f13\u5b58\u5b50\u7ec4\u4ef6\uff0c\u4f7f\u5176\u4e0d\u53d7\u7236\u7ea7\u7ec4\u4ef6\u66f4\u65b0\u7684\u5f71\u54cd")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4f46\u662fmemo\u53ea\u80fd\u7f13\u5b58\u7eaf\u9759\u6001\u7684\uff0c\u4e0d\u80fd\u7f13\u5b58\u4e8b\u4ef6\u8fd9\u79cd\u52a8\u6001\u7684\uff0c\u9700\u8981\u642d\u914duseCallback\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"useMemo\u548cuseCallback\u7684\u533a\u522b\u5c31\u662f useCallback\u76f4\u63a5\u6267\u884c\u51fd\u6570\uff0c\u800cuseMemo\u8fd4\u56de\u8fd9\u4e2a\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u4e2d\u8fd4\u56de\u51fd\u6570: \u9ad8\u9636\u7ec4\u4ef6")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"//useMemo \u548cuseCallback\nimport React,{useState,memo,useCallback,useMemo} from 'react'\n\nconst Child = memo((props) => {\n  console.log('\u6211\u88abmemo\u7f13\u5b58\u4e86');\n  return  <button onClick={() => props.doSth()}>\u7d2f\u52a0</button>\n})\n\nexport default function App() {\n  const [num,setNum] = useState(1);\n\n  //useCallback\n  // const doSth = useCallback(() => {\n  //   setNum(num => num +1)\n  // },[])\n\n  //useMemo\n  //\u548cuseCallback\u7684\u533a\u522b\u5c31\u662f \u4e00\u4e2a\u662f\u76f4\u63a5\u8c03\u7528\u51fd\u6570\uff0c\u4e00\u4e2a\u662f\u8fd4\u56de\u8c03\u7528\u7684\u51fd\u6570\n  //\u4e5f\u53eb\u9ad8\u9636\u51fd\u6570:  \u51fd\u6570\u4e2d\u8fd4\u56de\u8fd4\u56de\u51fd\u6570\n  const doSth = useMemo(() => {\n    return ()=> setNum(num => num +1)\n  },[])\n\n  return (\n    <div>\n      <h3>\u6570\u5b57\u4e3a: {num}</h3>\n      <Child doSth={doSth} />\n      {/* \u8fd9\u91cc\u5b50\u7ec4\u4ef6\u65e0\u5f71\u54cd\uff0c\u4f46\u662f\u6bcf\u6b21\u66f4\u65b0\u7236\u7ec4\u4ef6\u81ea\u8eab\u7684\u6570\u636e\u90fd\u4f1a\u91cd\u65b0\u6e32\u67d3\u5b50\u7ec4\u4ef6\uff0c\u975e\u5e38\u8017\u6027\u80fd,\u53ef\u4ee5\u4f7f\u7528memo\u7f13\u5b58 */}\n    </div>\n  )\n}\n")))}u.isMDXComponent=!0}}]);