(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{563:function(t,s,a){t.exports=a.p+"assets/img/render-tree-construction.0c389301.png"},564:function(t,s,a){t.exports=a.p+"assets/img/defer.7a65ab3e.png"},648:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"浏览器渲染机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染机制"}},[t._v("#")]),t._v(" 浏览器渲染机制")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提前需要知道的概念")]),t._v(" "),n("ul",[n("li",[t._v("DOM："),n("code",[t._v("Document Object Model")]),t._v("，浏览器将HTML解析成树形的数据结构，简称DOM。")]),t._v(" "),n("li",[t._v("CSSOM："),n("code",[t._v("CSS Object Model")]),t._v("，浏览器将CSS解析成树形的数据结构，简称CSSOM。")]),t._v(" "),n("li",[t._v("Render Tree: DOM和CSSOM合并后生成Render Tree")])])]),t._v(" "),n("ul",[n("li",[t._v("css加载不会阻塞DOM树解析，但是会阻塞DOM树渲染")]),t._v(" "),n("li",[t._v("css加载会阻塞后面js语句的执行")]),t._v(" "),n("li",[t._v("JS 的加载、解析与执行会阻塞DOM 的构建")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(563),alt:""}})]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("经典面试题")]),t._v(" "),n("p",[t._v("从输入url到浏览器显示页面发生了什么？")])]),t._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[t._v("答案")]),t._v(" "),n("ul",[n("li",[t._v("输入url发起http请求，然后开始进行DNS解析（优化：预解析）")]),t._v(" "),n("li",[t._v("建立TCP连接(三次握手，四次挥手，websocket等等)，")]),t._v(" "),n("li",[t._v("建立起http、https连接，（https还要经过SSL/TLS 的一层加密），")]),t._v(" "),n("li",[t._v("得到服务器的响应(响应头、状态码 200 304 404之类)")]),t._v(" "),n("li",[t._v("浏览器得到资源文件，开始解析，解析html生成dom，")]),t._v(" "),n("li",[t._v("遇到link加载CSS同时继续解析（CSS的加载不会影响DOM的解析），遇到script标签需要等待js文件加载完成，js是会阻塞DOM的解析的（所以需要把js放在页面最底- 部），请求JS和CSS返回的顺序是未知的，就算先返回并且完成解析JS文件也是会发生阻塞，")]),t._v(" "),n("li",[t._v("必须等到CSSOM构建完成后才能执行JS文件。因为JS是可以控制DOM和CSS样式的！！！")]),t._v(" "),n("li",[t._v("可以在script标签内添加defer和async进行异步解析，就不会阻塞DOM的解析，js的解析加载背后的原理有(v8引擎解析运行，AST->机器码->字节码，事件循环、垃圾回收和内存管理等等。)")]),t._v(" "),n("li",[t._v("DOM加载完成后还是要等CSSOM完成后才会渲染，生成render树 也就是页面开始渲染")]),t._v(" "),n("li",[t._v("调用 GPU 绘制，合成图层，显示在屏幕上(重排、重绘)")])])]),t._v(" "),n("h2",{attrs:{id:"重排-回流-与重绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重排-回流-与重绘"}},[t._v("#")]),t._v(" 重排(回流)与重绘")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Reflow重排(回流)")]),t._v(" "),n("br")]),t._v(" "),n("p",[t._v("当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流")]),t._v(" "),n("ul",[n("li",[t._v("一个 DOM 元素的几何变化，常见的几何属性 width、height、padding、margin、left、top、border 等等使 DOM 节点发生 增减 或 移动。")]),t._v(" "),n("li",[t._v("读写 offset ，scroll  和 client 属性的时候，浏览器为了获取这些值，需要进行回流操作。")]),t._v(" "),n("li",[t._v("调用 window.getComputedStyle 方法。")])]),t._v(" "),n("p",[t._v("回流过程：由于 DOM 的结构发生了改变，所以需要从生成 DOM 这一步开始，重新经过 样式计算、生成布局树、建立图层树、再到 生成绘制列表 以及之后的显示器显示这一整个渲染过程走一遍，开销是非常大的。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Repaint重绘")]),t._v(" "),n("br")]),t._v(" "),n("p",[t._v("当页面中元素样式的改变并不影响它在文档流中的位置时（例如："),n("code",[t._v("color、background-color、visibility")]),t._v("等），浏览器会将新样式赋予给元素并重新绘制它，浏览器重新绘制元素的过程称为重绘")]),t._v(" "),n("blockquote",[n("p",[t._v("会导致回流的操作：")])]),t._v(" "),n("ul",[n("li",[t._v("页面首次渲染")]),t._v(" "),n("li",[t._v("浏览器窗口大小发生改变")]),t._v(" "),n("li",[t._v("元素尺寸或位置发生改变")]),t._v(" "),n("li",[t._v("元素内容变化（文字数量或图片大小等等）")]),t._v(" "),n("li",[t._v("元素字体大小变化")]),t._v(" "),n("li",[t._v("添加或者删除可见的DOM元素")]),t._v(" "),n("li",[t._v("激活CSS伪类（例如：:hover）")]),t._v(" "),n("li",[t._v("查询某些属性或调用某些方法")])]),t._v(" "),n("p",[n("strong",[t._v("一些常用且会导致回流的属性和方法：")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clientWidth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("、clientHeight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("、clientTop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("、clientLeft")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("offsetWidth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("、offsetHeight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("、offsetTop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("、offsetLeft")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollWidth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("、scrollHeight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("、scrollTop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("、scrollLeft")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollIntoView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("、scrollIntoViewIfNeeded")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("请注意！")]),t._v(" "),n("ul",[n("li",[t._v("只是读取元素宽高也会引起重绘！往深研究可以搜索"),n("code",[t._v("元素transition的开启")])]),t._v(" "),n("li",[t._v("回流一定会引起重绘，重绘不一定会引起回流。")]),t._v(" "),n("li",[t._v("回流代价远大于重绘")])])]),t._v(" "),n("h2",{attrs:{id:"defer和async区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#defer和async区别"}},[t._v("#")]),t._v(" defer和async区别")]),t._v(" "),n("p",[t._v("我们知道，浏览器解析HTML是一行一行按顺序往下面执行的，当浏览器读取到"),n("code",[t._v("<script>")]),t._v("的时候，便会暂停解析DOM，而是like开下载JS脚本，并在下载后立即执行，这个特性会导致DOM还没构建完页面白屏等等问题，"),n("code",[t._v("这也是我们常常把JS写在页面最底部的原因")]),t._v("。")]),t._v(" "),n("blockquote",[n("p",[t._v("异步加载JS\n为了避免加载、执行JS的时候阻塞DOM渲染，我们可以在"),n("code",[t._v("<script>")]),t._v("标签加入"),n("code",[t._v("defer")]),t._v("和 "),n("code",[t._v("aysnc")]),t._v(" 来开启异步加载JS，这样就不会阻塞DOM渲染")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("两者的区别")]),t._v(" "),n("ul",[n("li",[t._v("两者都是异步加载，不会阻塞DOM渲染")]),t._v(" "),n("li",[t._v("defer的脚本会按照页面排版的顺序执行。")]),t._v(" "),n("li",[t._v("async的脚本加载后会立即执行，执行顺序不确定。")]),t._v(" "),n("li",[t._v("引用B站技术蛋老师的图片更加直观~")])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(564),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"load-和-domcontentloaded-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#load-和-domcontentloaded-区别"}},[t._v("#")]),t._v(" Load 和 DOMContentLoaded 区别")]),t._v(" "),n("ul",[n("li",[t._v("Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。")]),t._v(" "),n("li",[t._v("DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，不需要等待 CSS，JS，图片加载。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);