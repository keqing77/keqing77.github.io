"use strict";(self.webpackChunkreact_blog=self.webpackChunkreact_blog||[]).push([[4022],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=c(n),s=i,d=g["".concat(p,".").concat(s)]||g[s]||m[s]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=g;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},469:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(4137));const l={},o="Git \u9762\u8bd5\u9898",a={type:"mdx",permalink:"/interview/git",source:"@site/src/pages/interview/git.mdx",title:"Git \u9762\u8bd5\u9898",description:"git \u4e0e svn \u7684\u533a\u522b\u5728\u54ea\u91cc",frontMatter:{}},p=[{value:"git \u4e0e svn \u7684\u533a\u522b\u5728\u54ea\u91cc",id:"git-\u4e0e-svn-\u7684\u533a\u522b\u5728\u54ea\u91cc",level:2},{value:"git pull \u548c git fetch \u7684\u533a\u522b",id:"git-pull-\u548c-git-fetch-\u7684\u533a\u522b",level:2},{value:"git rebase \u548c git merge \u7684\u533a\u522b",id:"git-rebase-\u548c-git-merge-\u7684\u533a\u522b",level:2},{value:"\u9879\u76ee\u53e6\u4e00\u6761\u5206\u652f\u51fa\u73b0 BUG \u4e86\uff0c\u4f60\u600e\u4e48\u529e?",id:"\u9879\u76ee\u53e6\u4e00\u6761\u5206\u652f\u51fa\u73b0-bug-\u4e86\u4f60\u600e\u4e48\u529e",level:2},{value:"\u64a4\u9500\u5df2\u7ecf\u63d0\u4ea4\u7684\u6587\u4ef6?",id:"\u64a4\u9500\u5df2\u7ecf\u63d0\u4ea4\u7684\u6587\u4ef6",level:2},{value:"\u64a4\u9500 add \u548c commit ?",id:"\u64a4\u9500-add-\u548c-commit-",level:2},{value:"\u63d0\u4ea4\u4ee3\u7801\u51b2\u7a81\u4e86\u8fd9\u4e48\u89e3\u51b3\uff1f\u5982\u4f55\u907f\u514d\u51b2\u7a81?",id:"\u63d0\u4ea4\u4ee3\u7801\u51b2\u7a81\u4e86\u8fd9\u4e48\u89e3\u51b3\u5982\u4f55\u907f\u514d\u51b2\u7a81",level:2},{value:"git submodule",id:"git-submodule",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-\u9762\u8bd5\u9898"},"Git \u9762\u8bd5\u9898"),(0,i.kt)("h2",{id:"git-\u4e0e-svn-\u7684\u533a\u522b\u5728\u54ea\u91cc"},"git \u4e0e svn \u7684\u533a\u522b\u5728\u54ea\u91cc"),(0,i.kt)("p",null,"git \u548c svn \u6700\u5927\u7684\u533a\u522b\u5728\u4e8e git \u662f\u5206\u5e03\u5f0f\u7684\uff0c\u800c svn \u662f\u96c6\u4e2d\u5f0f\u7684\u3002\u56e0\u6b64\u6211\u4eec\u4e0d\u80fd\u518d\u79bb\u7ebf\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 svn\u3002\u5982\u679c\u670d\u52a1\u5668\u51fa\u73b0\u95ee\u9898\uff0c\u6211\u4eec\u5c31\u6ca1\u6709\u529e\u6cd5\u4f7f\u7528 svn \u6765\u63d0\u4ea4\u6211\u4eec\u7684\u4ee3\u7801\u3002"),(0,i.kt)("p",null,"svn \u4e2d\u7684\u5206\u652f\u662f\u6574\u4e2a\u7248\u672c\u5e93\u7684\u590d\u5236\u7684\u4e00\u4efd\u5b8c\u6574\u76ee\u5f55\uff0c\u800c git \u7684\u5206\u652f\u662f\u6307\u9488\u6307\u5411\u67d0\u6b21\u63d0\u4ea4\uff0c\u56e0\u6b64 git \u7684\u5206\u652f\u521b\u5efa\u66f4\u52a0\u5f00\u9500\u66f4\u5c0f\u5e76\u4e14\u5206\u652f\u4e0a\u7684\u53d8\u5316\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u4eba\u3002svn \u7684\u5206\u652f\u53d8\u5316\u4f1a\u5f71\u54cd\u5230\u6240\u6709\u7684\u4eba"),(0,i.kt)("h2",{id:"git-pull-\u548c-git-fetch-\u7684\u533a\u522b"},"git pull \u548c git fetch \u7684\u533a\u522b"),(0,i.kt)("p",null,"git fetch \u53ea\u662f\u5c06\u8fdc\u7a0b\u4ed3\u5e93\u7684\u53d8\u5316\u4e0b\u8f7d\u4e0b\u6765\uff0c\u5e76\u6ca1\u6709\u548c\u672c\u5730\u5206\u652f\u5408\u5e76\u3002",(0,i.kt)("br",null)," git pull \u4f1a\u5c06\u8fdc\u7a0b\u4ed3\u5e93\u7684\u53d8\u5316\u4e0b\u8f7d\u4e0b\u6765\uff0c\u5e76\u548c\u5f53\u524d\u5206\u652f\u5408\u5e76\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"git fetch")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"git merge")),(0,i.kt)("h2",{id:"git-rebase-\u548c-git-merge-\u7684\u533a\u522b"},"git rebase \u548c git merge \u7684\u533a\u522b"),(0,i.kt)("p",null,"git merge \u548c git rebase \u90fd\u662f\u7528\u4e8e\u5206\u652f\u5408\u5e76\uff0c\u5173\u952e\u5728 commit \u8bb0\u5f55\u7684\u5904\u7406\u4e0a\u4e0d\u540c\u3002"),(0,i.kt)("p",null,"git merge \u4f1a\u65b0\u5efa\u4e00\u4e2a\u65b0\u7684 commit \u5bf9\u8c61\uff0c\u7136\u540e\u4e24\u4e2a\u5206\u652f\u4ee5\u524d\u7684 commit \u8bb0\u5f55\u90fd\u6307\u5411\u8fd9\u4e2a\u65b0 commit \u8bb0\u5f55\u3002\u8fd9\u79cd\u65b9\u6cd5\u4f1a\u4fdd\u7559\u4e4b\u524d\u6bcf\u4e2a\u5206\u652f\u7684 commit \u5386\u53f2\u3002"),(0,i.kt)("p",null,"git rebase \u4f1a\u5148\u627e\u5230\u4e24\u4e2a\u5206\u652f\u7684\u7b2c\u4e00\u4e2a\u5171\u540c\u7684 commit \u7956\u5148\u8bb0\u5f55\uff0c\u7136\u540e\u5c06\u63d0\u53d6\u5f53\u524d\u5206\u652f\u8fd9\u4e4b\u540e\u7684\u6240\u6709 commit \u8bb0\u5f55\uff0c\u7136\u540e\u5c06\u8fd9\u4e2a commit \u8bb0\u5f55\u6dfb\u52a0\u5230\u76ee\u6807\u5206\u652f\u7684\u6700\u65b0\u63d0\u4ea4\u540e\u9762\u3002\u7ecf\u8fc7\u8fd9\u4e2a\u5408\u5e76\u540e\uff0c\u4e24\u4e2a\u5206\u652f\u5408\u5e76\u540e\u7684 commit \u8bb0\u5f55\u5c31\u53d8\u4e3a\u4e86\u7ebf\u6027\u7684\u8bb0\u5f55\u4e86\u3002"),(0,i.kt)("h2",{id:"\u9879\u76ee\u53e6\u4e00\u6761\u5206\u652f\u51fa\u73b0-bug-\u4e86\u4f60\u600e\u4e48\u529e"},"\u9879\u76ee\u53e6\u4e00\u6761\u5206\u652f\u51fa\u73b0 BUG \u4e86\uff0c\u4f60\u600e\u4e48\u529e?"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5f53\u524d\u5206\u652f\u5de5\u4f5c\u8fd8\u6ca1\u505a\u5b8c\uff0c\u53c8\u4e0d\u60f3\u63d0\u4ea4\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"git stash"),"\uff0c\u7136\u540e\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout \u5206\u652f\u540d"),"\u5207\u6362\u5206\u652f\u4fee\u590d bug\uff0c\u518d\u5207\u56de\u6765\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"git stash pop")),(0,i.kt)("h2",{id:"\u64a4\u9500\u5df2\u7ecf\u63d0\u4ea4\u7684\u6587\u4ef6"},"\u64a4\u9500\u5df2\u7ecf\u63d0\u4ea4\u7684\u6587\u4ef6?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git checkout .")),(0,i.kt)("p",null,"git checkout \u9664\u4e86\u521b\u5efa\u5207\u6362\u5206\u652f\u7684\u529f\u80fd\u8fd8\u6709\u64a4\u9500\u7684\u529f\u80fd\uff0c\u4e3a\u907f\u514d\u6df7\u6dc6\uff0cgit2.x \u7248\u672c\u63a8\u51fa\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"git switch")," \u6765\u4ee3\u66ff ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout")," \u5207\u6362\u5206\u652f\u7684\u529f\u80fd"),(0,i.kt)("h2",{id:"\u64a4\u9500-add-\u548c-commit-"},"\u64a4\u9500 add \u548c commit ?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u64a4\u9500 add")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"git reset HEAD ."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u64a4\u9500 commit")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"git reset --soft HEAD^"))),(0,i.kt)("h2",{id:"\u63d0\u4ea4\u4ee3\u7801\u51b2\u7a81\u4e86\u8fd9\u4e48\u89e3\u51b3\u5982\u4f55\u907f\u514d\u51b2\u7a81"},"\u63d0\u4ea4\u4ee3\u7801\u51b2\u7a81\u4e86\u8fd9\u4e48\u89e3\u51b3\uff1f\u5982\u4f55\u907f\u514d\u51b2\u7a81?"),(0,i.kt)("p",null,"\u5148\u5907\u4efd\u81ea\u5df1\u7684\u4ee3\u7801\uff0c\u518d\u624b\u52a8\u89e3\u51b3\u51b2\u7a81\u7684\u4ee3\u7801\uff0c\u518d\u628a\u81ea\u5df1\u7684\u4ee3\u7801\u52a0\u56de\u53bb\u3002\u91cd\u65b0\u63a8\u9001\uff0c\u907f\u514d\u51b2\u7a81\u8981\u517b\u6210\u597d\u4e60\u60ef\uff0c\u63a8\u9001\u4e4b\u524d\u5148",(0,i.kt)("inlineCode",{parentName:"p"},"git pull"),"\u4e0b\u62c9\u53d6\u6700\u65b0\u4ee3\u7801\uff0c\u51b2\u7a81\u7684\u539f\u56e0\u5f80\u5f80\u662f\u56e0\u4e3a\u4e0d\u540c\u4eba\u5458\u5bf9\u540c\u4e00\u5730\u65b9\u8fdb\u884c\u4e86\u4fee\u6539\uff0cgit \u4e0d\u77e5\u9053\u600e\u4e48\u529e\u3002"),(0,i.kt)("h2",{id:"git-submodule"},"git submodule"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Git \u7684 submodule \u529f\u80fd\u5c31\u662f\u5efa\u7acb\u4e86\u5f53\u524d\u9879\u76ee\u4e0e\u5b50\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff1a\u5b50\u6a21\u5757\u8def\u5f84\u3001\u5b50\u6a21\u5757\u7684\u8fdc\u7a0b\u4ed3\u5e93\u3001\u5b50\u6a21\u5757\u7684\u7248\u672c\u53f7")))}u.isMDXComponent=!0}}]);