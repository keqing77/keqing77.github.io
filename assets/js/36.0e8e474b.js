(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{599:function(t,s,a){t.exports=a.p+"assets/img/nuxt.5a4a9938.png"},790:function(t,s,a){"use strict";a.r(s);var v=a(14),e=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"ssr-服务端渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ssr-服务端渲染"}},[t._v("#")]),t._v(" SSR 服务端渲染")]),t._v(" "),v("div",{staticClass:"theorem"},[v("p",{staticClass:"title"},[t._v("什么是SSR? (服务端渲染)")]),v("p",[t._v("传统的CSR(客户端)是SPA页面，也就是单页面应用。SPA页面的内容是通过Ajax获取的，是异步数据获取！而我们的搜索引擎爬取工具并不会等待Ajax异步完成后再爬取页面内容，所以SPA的SEO几乎为0，这样的表现就注定满足不了博客、新闻、商城等非常需要SEO的项目。所以SSR应运而生，SSR是服务器端渲染(会占服务器资源)，直接返回已经渲染好的页面给浏览器，搜索引擎就可以爬取已经渲染好的页面")])]),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("简单地说，你在网页右键查看源代码，SPA页面下面是空白的，而SSR则是有一大堆内容的！")])]),t._v(" "),v("h2",{attrs:{id:"ssr-好处"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ssr-好处"}},[t._v("#")]),t._v(" SSR 好处")]),t._v(" "),v("p",[t._v("与传统 SPA (单页应用程序 (Single-Page Application)) 相比，服务器端渲染 (SSR) 的优势主要在于：")]),t._v(" "),v("blockquote",[v("p",[t._v("更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。")])]),t._v(" "),v("p",[t._v("请注意，截至目前，Google 和 Bing 可以很好对同步 JavaScript 应用程序进行索引。在这里，同步是关键。如果你的应用程序初始展示 loading 菊花图，然后通过 Ajax 获取内容，抓取工具并不会等待异步完成后再行抓取页面内容。也就是说，如果 SEO 对你的站点至关重要，而你的页面又是异步获取内容，则你可能需要服务器端渲染(SSR)解决此问题。")]),t._v(" "),v("blockquote",[v("p",[t._v("更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。")])]),t._v(" "),v("p",[t._v("无需等待所有的 JavaScript 都完成下载并执行，才显示服务器渲染的标记，所以你的用户将会更快速地看到完整渲染的页面。通常可以产生更好的用户体验，并且对于那些「内容到达时间(time-to-content) 与转化率直接相关」的应用程序而言，服务器端渲染 (SSR) 至关重要")]),t._v(" "),v("blockquote",[v("p",[t._v("SSR方案")])]),t._v(" "),v("ul",[v("li",[t._v("推荐"),v("strong",[t._v("Nuxt.js")]),t._v("，和React Next.js是同一个团队的")])]),t._v(" "),v("h2",{attrs:{id:"nuxt-js"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-js"}},[t._v("#")]),t._v(" Nuxt.js")]),t._v(" "),v("p",[v("img",{attrs:{src:a(599),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"vue性能优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue性能优化"}},[t._v("#")]),t._v(" Vue性能优化")]),t._v(" "),v("ul",[v("li",[t._v("减小入口文件体积--Vue路由设置成懒加载，当首屏渲染的时候，能够加快渲染速度。")]),t._v(" "),v("li",[t._v("列表循环v-for 设置唯一的key值，更快diff定位")]),t._v(" "),v("li",[t._v("代码优化，尽可能复用组件/逻辑")]),t._v(" "),v("li",[t._v("keep-alive缓存组件，避免重新渲染组件的性能开销")]),t._v(" "),v("li",[t._v("打包优化，productionSourceMap设置为false，禁止生成map文件，服务端开启gzip压缩")]),t._v(" "),v("li",[t._v("插件npm安装的有些可以换成cdn的方式外部加载")]),t._v(" "),v("li",[t._v("使用UI库按需引入，全局引入很多地方用不到却被打包进去")])])])}),[],!1,null,null,null);s.default=e.exports}}]);