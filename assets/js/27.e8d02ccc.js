(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{573:function(t,s,a){t.exports=a.p+"assets/img/thread.96065c97.png"},663:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"浏览器进程和线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器进程和线程"}},[t._v("#")]),t._v(" 浏览器进程和线程")]),t._v(" "),n("p",[n("strong",[t._v("下面都是举Chrome浏览器的例子，每家浏览器的实现和工作原理的都是各有差异的，尽管内核可能相同。")])]),t._v(" "),n("h2",{attrs:{id:"进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("什么是进程?")]),t._v(" "),n("p",[t._v("一个进程就是一个程序的运行实例，具体就是启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的运行环境叫进程，"),n("strong",[t._v("进程是操作系统进行资源分配和调度的一个独立单位，是应用程序运行的载体")]),t._v("。")])]),t._v(" "),n("blockquote",[n("p",[t._v("把进程比喻为工厂的车间，它代表CPU所能处理的单个任务。任一时刻，CPU总是运行一个进程，其他进程处于非运行状态。")])]),t._v(" "),n("h2",{attrs:{id:"线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("什么是线程?")]),t._v(" "),n("p",[t._v("任务调度采用的是时间片轮转的抢占式调度方式，而进程是任务调度的最小单位，每个进程有各自独立的一块内存，使得各个进程之间内存地址相互隔离。后来，随着计算机的发展，对CPU的要求越来越高，进程之间的切换开销较大，已经无法满足越来越复杂的程序的要求了。于是就发明了线程，线程是程序执行中一个单一的顺序控制流程，是程序执行流的最小单元。\n"),n("strong",[t._v("进程是能拥有资源和独立运行的最小单位，也是程序执行的最小单位")]),t._v("。多线程可以并行处理任务，但是线程是不能单独存在的，需要进程来启动和管理。")])]),t._v(" "),n("blockquote",[n("p",[t._v("可以把线程比喻一个车间的工人，即一个车间可以允许由多个工人协同完成一个任务。")])]),t._v(" "),n("h2",{attrs:{id:"两者关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两者关系"}},[t._v("#")]),t._v(" 两者关系")]),t._v(" "),n("p",[t._v("进程是操作系统分配资源的最小单位，线程是程序执行的最小单位。\n一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线；\n进程之间相互独立，但同一进程下的各个线程之间共享程序的内存空间(包括代码段、数据集、堆等)及一些进程级的资源(如打开文件和信号)。\n调度和切换：线程上下文切换比进程上下文切换要快得多。")]),t._v(" "),n("h2",{attrs:{id:"浏览器是多进程的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是多进程的"}},[t._v("#")]),t._v(" 浏览器是多进程的")]),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("简单点理解，每打开一个Tab页，就相当于创建了一个独立的浏览器进程。")]),t._v(" "),n("p",[t._v("浏览器是多进程的，浏览器之所以能够运行，是因为系统给它的进程分配了资源（cpu、内存）")])]),t._v(" "),n("blockquote",[n("p",[t._v("如果一个tab页崩溃，将导致同进程的其他页面崩溃，极其影响用户体验。所以多进程")])]),t._v(" "),n("ul",[n("li",[t._v("浏览器渲染进程（浏览器内核）")]),t._v(" "),n("li",[t._v("（Renderer进程，内部是多线程的）：")]),t._v(" "),n("li",[t._v("默认每个Tab页面一个进程，互不影响。主要作用为页面渲染，脚本执行，事件处理等")])]),t._v(" "),n("h2",{attrs:{id:"浏览器内核-渲染进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核-渲染进程"}},[t._v("#")]),t._v(" 浏览器内核（渲染进程）")]),t._v(" "),n("p",[n("img",{attrs:{src:a(573),alt:""}})]),t._v(" "),n("blockquote",[n("p",[t._v("请牢记，浏览器的渲染进程是多线程的")])]),t._v(" "),n("ol",[n("li",[n("p",[n("strong",[t._v("GUI 渲染线程")]),n("br"),t._v("\n负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。\n当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行\n注意，GUI渲染线程与JS引擎线程是互斥的，当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("JS 引擎线程")]),n("br"),t._v("\n也称为JS内核，负责处理Javascript脚本程序。（例如V8引擎）\nJS引擎线程负责解析Javascript脚本，运行代码。\nJS引擎一直等待着任务队列中任务的到来，然后加以处理，一个Tab页（renderer进程）中无论什么时候都只有一个JS线程在运行JS程序\n同样注意，GUI渲染线程与JS引擎线程是互斥的，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("事件触发线程")]),n("br"),t._v("\n归属于浏览器而不是JS引擎，用来控制事件循环（可以理解，JS引擎自己都忙不过来，需要浏览器另开线程协助）\n当JS引擎执行代码块如setTimeOut时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件线程中\n当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理\n注意，由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("定时触发器线程")]),n("br"),t._v("\n传说中的setInterval与setTimeout所在线程\n浏览器定时计数器并不是由JavaScript引擎计数的,（因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）\n因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）\n注意，W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("异步 http 请求线程")]),n("br"),t._v("\n在XMLHttpRequest在连接后是通过浏览器新开一个线程请求\n将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由JavaScript引擎执行。")])])]),t._v(" "),n("h2",{attrs:{id:"浏览器存储"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器存储"}},[t._v("#")]),t._v(" 浏览器存储")]),t._v(" "),n("ul",[n("li",[t._v("cookie")]),t._v(" "),n("li",[t._v("session")]),t._v(" "),n("li",[t._v("local storage")]),t._v(" "),n("li",[t._v("indexDB (webSQL)")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("cookie")]),t._v(" "),n("p",[t._v("在处理 HTTP 请求时，服务器可以在 HTTP 响应头中通过HTTP Headers Set-Cookie 为客户端设置  cookie。然后，对于同一服务器发起的每一个请求，客户端都会在 HTTP 请求头中以字段 Cookie 的形式将 cookie 的值发送过去。也可以将 cookie 设置为在特定日期过期，或限制为特定的域和路径。")])]),t._v(" "),n("div",{staticClass:"theorem"},[n("p",{staticClass:"title"},[t._v("请列举 html5 本地存储（ localStorage ）相关 api ，并实现 getAll 方法，获取本地存储")]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("localStorage 和 sessionStorage 的"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v("调用是一样的。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("设置数据")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" localStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("获取数据")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" localStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("删除数据")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" localStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("清空数据")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" localStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("获取数据的长度")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" localStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("获取所有数据")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" localStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自己实现")]),t._v("\n\nlocalStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getAll")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("localStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])])]),n("h2",{attrs:{id:"浏览器事件机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器事件机制"}},[t._v("#")]),t._v(" 浏览器事件机制")]),t._v(" "),n("h3",{attrs:{id:"事件触发的三个阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件触发的三个阶段"}},[t._v("#")]),t._v(" 事件触发的三个阶段")]),t._v(" "),n("ul",[n("li",[t._v("window 往事件触发处传播，遇到注册的捕获事件会触发")]),t._v(" "),n("li",[t._v("传播到事件触发处时触发注册的事件")]),t._v(" "),n("li",[t._v("从事件触发处往 window 传播，遇到注册的冒泡事件会触发")])]),t._v(" "),n("h3",{attrs:{id:"注册事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册事件"}},[t._v("#")]),t._v(" 注册事件")]),t._v(" "),n("p",[t._v("EventTarget.addEventListener() 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。 事件目标可以是一个文档上的元素 Element,Document和Window或者任何其他支持事件的对象 (比如 XMLHttpRequest)。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"事件冒泡、捕获、委托"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡、捕获、委托"}},[t._v("#")]),t._v(" 事件冒泡、捕获、委托")]),t._v(" "),n("p",[t._v("后续更新...")]),t._v(" "),n("h2",{attrs:{id:"浏览器的同源机制-跨域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的同源机制-跨域"}},[t._v("#")]),t._v(" 浏览器的同源机制(跨域)")]),t._v(" "),n("p",[n("strong",[t._v("浏览器")]),t._v("出于安全考虑，制订了同源策略。")]),t._v(" "),n("blockquote",[n("p",[t._v("为什么要有同源策略呢，不同源的数据和资源（如HTTP头、Cookie、DOM、localStorage等）前端就能相互随意访问，根本没有隐私和安全可言。")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("同源策略")]),t._v(" "),n("p",[t._v("协议、域名或者端口有一个不同就是跨域，网络请求会因为同源策略被拦截，如ajax、fetch")])]),t._v(" "),n("h3",{attrs:{id:"跨域解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#跨域解决方案"}},[t._v("#")]),t._v(" 跨域解决方案")]),t._v(" "),n("blockquote",[n("p",[t._v("详情可参考"),n("a",{attrs:{href:"https://juejin.cn/post/6844904126246027278#heading-16",target:"_blank",rel:"noopener noreferrer"}},[t._v("10种跨域解决方案"),n("OutboundLink")],1)])]),t._v(" "),n("ol",[n("li",[t._v("jsonp")]),t._v(" "),n("li",[t._v("CORS")]),t._v(" "),n("li",[t._v("node正向代理")]),t._v(" "),n("li",[t._v("nginx反向代理")]),t._v(" "),n("li",[t._v("Websocket")]),t._v(" "),n("li",[t._v("iframe + document.domain")]),t._v(" "),n("li",[t._v("iframe + postmessage")]),t._v(" "),n("li",[t._v("iframe + window.location.hash")]),t._v(" "),n("li",[t._v("iframe + window.name")]),t._v(" "),n("li",[t._v("让浏览器开启跨域")])])])}),[],!1,null,null,null);s.default=e.exports}}]);