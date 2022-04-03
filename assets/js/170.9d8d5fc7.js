(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{778:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" TypeScript")]),t._v(" "),a("blockquote",[a("p",[t._v("TypeScript其实就是给JavaScript加上了类型系统")])]),t._v(" "),a("div",{staticClass:"theorem"},[a("p",{staticClass:"title"},[t._v("TS其实用到的大多数内容只有列出的这些")]),a("p",[a("strong",[t._v("这里只介绍TS独有的，很多概念实际在ES6或者后面的标准都有且通用的")]),t._v("\n如 面向对象的 类class 、装饰器decorator等等")])]),a("h2",{attrs:{id:"typescript是javascript的超集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript是javascript的超集"}},[t._v("#")]),t._v(" TypeScript是JavaScript的超集")]),t._v(" "),a("ul",[a("li",[t._v("这意味着你完全可以在TypeScript中写JavaScript，完全兼容JS代码")]),t._v(" "),a("li",[t._v("TypeScript需要编译转化成JavaScript代码，浏览器不识别TS代码")]),t._v(" "),a("li",[t._v("刚开始的时候都是先用JS写好，再在上面添加约束")])]),t._v(" "),a("h2",{attrs:{id:"typescript的类型系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript的类型系统"}},[t._v("#")]),t._v(" TypeScript的类型系统")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型")])]),t._v(" "),a("li",[t._v("JS是弱类型的脚本语言，由于"),a("strong",[t._v("隐式类型转换")]),t._v("的存在，我们很难在"),a("strong",[t._v("运行前")]),t._v("确定变量的类型")]),t._v(" "),a("li",[t._v("TS中一旦定义了类型，就确定每个变量的类型，不能随意改变，使得在维护大型项目时候更加直观。")]),t._v(" "),a("li",[t._v("TS仍然是弱类型的，依然保留JS运行时的特性")])]),t._v(" "),a("h2",{attrs:{id:"typescript是静态类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript是静态类型"}},[t._v("#")]),t._v(" TypeScript是静态类型")]),t._v(" "),a("blockquote",[a("p",[t._v("JS代码有错需要运行才知道，而TS在写代码的时候就会检查错误并有错误提示反馈给你")])]),t._v(" "),a("p",[a("strong",[t._v("JS运行时编译，也就是动态编译")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" js "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'goodLanguage'")]),t._v("\njs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js是字符串类型，没有splice方法，但你只有在运行时候才会报错")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("TS运行前编译为JS，在编译阶段就会进行类型检查，也就是静态编译")])]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" js "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'goodLanguage'")]),t._v("\njs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Property 'splice' does not exist on type 'string'.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译时会报错（字符串没有 splice 方法），无法通过编译")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"typescript与标准同步发展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript与标准同步发展"}},[t._v("#")]),t._v(" TypeScript与标准同步发展")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("同步标准")]),t._v(" "),a("ul",[a("li",[t._v("TypeScript变得这么流行的原因是坚持与 ECMAScript 标准同步发展。")]),t._v(" "),a("li",[t._v("ECMAScript 是 JavaScript 核心语法的标准，自 2015 年起，每年都会发布一个新版本，包含一些新的语法。")]),t._v(" "),a("li",[t._v("以闭源垄断著称的微软 从不遵守标准的IE 变成 如今紧跟行业标准在开源界混得风生水起🤣")])])]),t._v(" "),a("blockquote",[a("p",[t._v("一个新的语法从提案到变成正式标准，需要经历以下几个阶段：")])]),t._v(" "),a("ul",[a("li",[t._v("Stage 0：展示阶段，仅仅是提出了讨论、想法，尚未正式提案。")]),t._v(" "),a("li",[t._v("Stage 1：征求意见阶段，提供抽象的 API 描述，讨论可行性，关键算法等。")]),t._v(" "),a("li",[t._v("Stage 2：草案阶段，使用正式的规范语言精确描述其语法和语义。")]),t._v(" "),a("li",[t._v("Stage 3：候选人阶段，语法的设计工作已完成，需要浏览器、Node.js 等环境支持，搜集用户的反馈。")]),t._v(" "),a("li",[t._v("Stage 4：定案阶段，已准备好将其添加到正式的 ECMAScript 标准中。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);