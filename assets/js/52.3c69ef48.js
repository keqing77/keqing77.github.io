(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{636:function(t,e,a){"use strict";a.r(e);var r=a(14),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue3面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3面试题"}},[t._v("#")]),t._v(" Vue3面试题")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#compositionapi和optionsapi的区别"}},[t._v("CompositionAPI和OptionsApi的区别?")])]),a("li",[a("a",{attrs:{href:"#watcheffect和watch的区别"}},[t._v("WatchEffect和Watch的区别?")])]),a("li",[a("a",{attrs:{href:"#解构的对象如何保持响应式"}},[t._v("解构的对象如何保持响应式?")])]),a("li",[a("a",{attrs:{href:"#vue3-0性能提升主要是通过哪几方面体现的"}},[t._v("Vue3.0性能提升主要是通过哪几方面体现的？")])]),a("li",[a("a",{attrs:{href:"#keepalive中的-include-excluede有了解吗"}},[t._v("keepAlive中的 include,excluede有了解吗?")])]),a("li",[a("a",{attrs:{href:"#vue3-0里为什么要用-proxy-api-替代-defineproperty-api"}},[t._v("Vue3.0里为什么要用 Proxy API 替代 defineProperty API")])]),a("li",[a("a",{attrs:{href:"#说说vue-3-0中treeshaking特性-举例说明一下"}},[t._v("说说Vue 3.0中Treeshaking特性？举例说明一下？")])]),a("li",[a("a",{attrs:{href:"#vite快在哪里"}},[t._v("Vite快在哪里？")])]),a("li",[a("a",{attrs:{href:"#vue3性能监控"}},[t._v("Vue3性能监控")])]),a("li",[a("a",{attrs:{href:"#有了解suspense组件吗"}},[t._v("有了解suspense组件吗?")])]),a("li",[a("a",{attrs:{href:"#typescript数据类型有哪些"}},[t._v("TypeScript数据类型有哪些?")])]),a("li",[a("a",{attrs:{href:"#枚举类型-应用场景"}},[t._v("枚举类型?应用场景?")])]),a("li",[a("a",{attrs:{href:"#类型别名和接口的区别"}},[t._v("类型别名和接口的区别")])]),a("li",[a("a",{attrs:{href:"#装饰器的理解-应用场景"}},[t._v("装饰器的理解,应用场景?")])]),a("li",[a("a",{attrs:{href:"#泛型"}},[t._v("泛型")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"compositionapi和optionsapi的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compositionapi和optionsapi的区别"}},[t._v("#")]),t._v(" CompositionAPI和OptionsApi的区别?")]),t._v(" "),a("h2",{attrs:{id:"watcheffect和watch的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watcheffect和watch的区别"}},[t._v("#")]),t._v(" WatchEffect和Watch的区别?")]),t._v(" "),a("h2",{attrs:{id:"解构的对象如何保持响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解构的对象如何保持响应式"}},[t._v("#")]),t._v(" 解构的对象如何保持响应式?")]),t._v(" "),a("h2",{attrs:{id:"vue3-0性能提升主要是通过哪几方面体现的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3-0性能提升主要是通过哪几方面体现的"}},[t._v("#")]),t._v(" Vue3.0性能提升主要是通过哪几方面体现的？")]),t._v(" "),a("h2",{attrs:{id:"keepalive中的-include-excluede有了解吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalive中的-include-excluede有了解吗"}},[t._v("#")]),t._v(" keepAlive中的 include,excluede有了解吗?")]),t._v(" "),a("h2",{attrs:{id:"vue3-0里为什么要用-proxy-api-替代-defineproperty-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3-0里为什么要用-proxy-api-替代-defineproperty-api"}},[t._v("#")]),t._v(" Vue3.0里为什么要用 Proxy API 替代 defineProperty API")]),t._v(" "),a("h2",{attrs:{id:"说说vue-3-0中treeshaking特性-举例说明一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说说vue-3-0中treeshaking特性-举例说明一下"}},[t._v("#")]),t._v(" 说说Vue 3.0中Treeshaking特性？举例说明一下？")]),t._v(" "),a("h2",{attrs:{id:"vite快在哪里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite快在哪里"}},[t._v("#")]),t._v(" Vite快在哪里？")]),t._v(" "),a("ul",[a("li",[t._v("Vite主要快在开发阶段的 1. 启动项目快 2. 热更新快,因为Vite开发阶段是基于esbuild的,Go写的一个打包比JS快上一个数量级,而生产阶段是使用roll up,相比webpack也并没有快多少.")]),t._v(" "),a("li",[t._v("在Webpack中,当模块达到几十个以上的时候,修改其中之一的模块,都需要全部去打包一边再让服务器请求,在项目变得越来越大的时候需要非常长的时间,而Vite会让浏览器做更多的事情,怎么做呢? Webpack是先打包再服务器去请求,而Vite直接不打包了")]),t._v(" "),a("li",[t._v("(快是有前提的,要采用esbuild,import的导入方式)Vite会先启动开发服务器,对文件代码不打包，服务器会根据客户端的请求加载不同的模块处理,浏览器只会对用到的模块发起 HTTP 请求,Vite也只会编译浏览器发起 HTTP 请求的模块,实现了按需加载。")])]),t._v(" "),a("h2",{attrs:{id:"vue3性能监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3性能监控"}},[t._v("#")]),t._v(" Vue3性能监控")]),t._v(" "),a("ul",[a("li",[t._v("对于性能监控来说，其实我们只需要调用"),a("code",[t._v("performance.getEntriesByType('navigation')")]),t._v(",，一行代码我们就可以获得页面中各种详细的性能相关信息.")])]),t._v(" "),a("h2",{attrs:{id:"有了解suspense组件吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有了解suspense组件吗"}},[t._v("#")]),t._v(" 有了解suspense组件吗?")]),t._v(" "),a("h1",{attrs:{id:"ts面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ts面试题"}},[t._v("#")]),t._v(" TS面试题")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("现在还在学习中")]),t._v(" "),a("p",[t._v("记录下学习资源")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript官方文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/type-challenges/type-challenges/blob/master/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript刷题"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"typescript数据类型有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript数据类型有哪些"}},[t._v("#")]),t._v(" TypeScript数据类型有哪些?")]),t._v(" "),a("h2",{attrs:{id:"枚举类型-应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举类型-应用场景"}},[t._v("#")]),t._v(" 枚举类型?应用场景?")]),t._v(" "),a("h2",{attrs:{id:"类型别名和接口的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型别名和接口的区别"}},[t._v("#")]),t._v(" 类型别名和接口的区别")]),t._v(" "),a("h2",{attrs:{id:"装饰器的理解-应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰器的理解-应用场景"}},[t._v("#")]),t._v(" 装饰器的理解,应用场景?")]),t._v(" "),a("h2",{attrs:{id:"泛型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[t._v("#")]),t._v(" 泛型")])])}),[],!1,null,null,null);e.default=s.exports}}]);