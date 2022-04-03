(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{746:function(v,_,t){"use strict";t.r(_);var i=t(14),l=Object(i.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"性能优化方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化方案"}},[v._v("#")]),v._v(" 性能优化方案")]),v._v(" "),t("p",[v._v("总体可以分几个思路，压缩文件体积、加载策略优化、感官体验优化、减少http请求数")]),v._v(" "),t("ul",[t("li",[v._v("减少 HTTP 请求数，避免重定向")]),v._v(" "),t("li",[v._v("减少 DNS 查询(重点: DNS缓存、DNS预查询)")]),v._v(" "),t("li",[v._v("使⽤ CDN (将静态资源放在CDN上，就近访问)")]),v._v(" "),t("li",[v._v("图⽚懒加载 （一个图片就发1个请求，）")]),v._v(" "),t("li",[v._v("用雪碧图(精灵图)spirit图代替（多张图片拼接成1个图片，只发1次请求）")]),v._v(" "),t("li",[v._v("减少 DOM 元素数量，减少 DOM 操作")]),v._v(" "),t("li",[v._v("使⽤外部 JavaScript 和 CSS")]),v._v(" "),t("li",[v._v("把样式表放在 link 中，把 JavaScript 放在⻚⾯底部")]),v._v(" "),t("li",[v._v("压缩 JavaScript 、 CSS 、字体、图⽚等，打包的时候webpack之类的压缩")]),v._v(" "),t("li",[v._v("服务器端再开启Gzip压缩，字体裁剪")]),v._v(" "),t("li",[v._v("使⽤ iconfont （比图片性能更优，也可以用SVG图，比icon更好）")]),v._v(" "),t("li",[v._v("多域名分发划分内容到不同域名")]),v._v(" "),t("li",[v._v("尽量减少 iframe 使⽤，避免图⽚ src 为空")])]),v._v(" "),t("h3",{attrs:{id:"想要理解性能优化-就必须理解浏览器渲染页面的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#想要理解性能优化-就必须理解浏览器渲染页面的原理"}},[v._v("#")]),v._v(" 想要理解性能优化，就必须理解浏览器渲染页面的原理")]),v._v(" "),t("p",[v._v("就是从输入url到显示页面的过程")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("输入url发起http请求，然后开始进行DNS解析（优化：预解析）")])]),v._v(" "),t("li",[t("strong",[v._v("建立TCP连接(三次握手，四次挥手，websocket等等)，")])]),v._v(" "),t("li",[t("strong",[v._v("建立起http、https连接，（https还要经过SSL/TLS 的一层加密），")])]),v._v(" "),t("li",[t("strong",[v._v("得到服务器的响应（响应头、状态码 200 404之类）")]),v._v("，")]),v._v(" "),t("li",[t("strong",[v._v("浏览器得到资源文件，开始解析，解析html生成dom，")])]),v._v(" "),t("li",[t("strong",[v._v("遇到link加载CSS同时继续解析（CSS的加载不会影响DOM的解析），遇到script标签需要等待js文件加载完成，js是会阻塞DOM的解析的（所以需要把js放在页面最底部），请求JS和CSS返回的顺序是未知的，就算先返回并且完成解析JS文件也是会发生阻塞，")])]),v._v(" "),t("li",[t("strong",[v._v("必须等到CSSOM构建完成后才能执行JS文件。因为JS是可以控制DOM和CSS样式的！！！")])]),v._v(" "),t("li",[t("strong",[v._v("DOM加载完成后还是要等CSSOM完成后才会渲染，生成render树 也就是页面开始渲染")])]),v._v(" "),t("li",[t("strong",[v._v("渲染这一块还可以展开讲的就是回流和重排。")])]),v._v(" "),t("li",[t("strong",[v._v("可以在script标签内添加defer和async进行异步解析，就不会阻塞DOM的解析，js的解析加载背后的原理有(v8引擎解析运行，AST->机器码->字节码，事件循环、垃圾回收和内存管理等等。)")])])]),v._v(" "),t("h2",{attrs:{id:"减少重排reflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少重排reflow"}},[v._v("#")]),v._v(" 减少重排reflow")]),v._v(" "),t("p",[v._v("重排/回流(reflow)是DOM的变化，代价远大于重绘(replain)")]),v._v(" "),t("p",[v._v("下面情况会导致reflow发生")]),v._v(" "),t("ul",[t("li",[v._v("1：改变窗口大小")]),v._v(" "),t("li",[v._v("2：改变文字大小")]),v._v(" "),t("li",[v._v("3：内容的改变，如用户在输入框中敲字")]),v._v(" "),t("li",[v._v("4：激活伪类，如:hover")]),v._v(" "),t("li",[v._v("5：操作class属性")]),v._v(" "),t("li",[v._v("6：脚本操作DOM")]),v._v(" "),t("li",[v._v("7：计算offsetWidth和offsetHeight")]),v._v(" "),t("li",[v._v("8：设置style属性")])]),v._v(" "),t("h2",{attrs:{id:"assets和static的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assets和static的区别"}},[v._v("#")]),v._v(" assets和static的区别")]),v._v(" "),t("p",[v._v("两个都是用于存放静态资源文件。但assets打包后会压缩体积，static不会")]),v._v(" "),t("ul",[t("li",[v._v("static")])]),v._v(" "),t("p",[v._v("放在static中的文件不会进行构建编译处理，也就不会压缩体积，在打包时效率会更高，但体积更大在服务器中就会占据更大的空间")]),v._v(" "),t("ul",[t("li",[v._v("assets")])]),v._v(" "),t("p",[v._v("放在assets中的文件会进行压缩体积、代码格式化，压缩后会放置在static中一同上传服务器。\n因此建议样式文件放在assets中进行打包，引入的第三方文件放到static中，因为引入的文件已经做过打包处理")]),v._v(" "),t("h2",{attrs:{id:"常见优化问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见优化问题"}},[v._v("#")]),v._v(" 常见优化问题")]),v._v(" "),t("p",[v._v("vue 渲染大量数据时应该怎么优化？")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("答案")]),v._v(" "),t("ul",[t("li",[v._v("添加加载动画，优化用户体验")]),v._v(" "),t("li",[v._v("利用服务器渲染 SSR，在服务端渲染组件")]),v._v(" "),t("li",[v._v("避免浏览器处理大量的dom，比如懒加载，异步渲染组件，使用分页")]),v._v(" "),t("li",[v._v("对于固定的非响应式的数据，使用 Object.freeze 冻结")])])]),v._v(" "),t("p",[v._v("网页性能优化")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("答案")]),v._v(" "),t("ul",[t("li",[v._v("客户端控制的强缓存策略，缓存降低请求成本")]),v._v(" "),t("li",[v._v("HTTP DNS: 由客户端控制，隔一段时间主动请求 DNS 获取域名 IP ，不走系统的 DNS")]),v._v(" "),t("li",[v._v("TCP / TLS 连接的复用：由服务端升级到 HTTP2，尽量合并域名\n减少请求数")]),v._v(" "),t("li",[v._v("用 JavaScript 控制图片的异步加载和懒加载")]),v._v(" "),t("li",[v._v("小型图片使用 data-url，减少传输体积")]),v._v(" "),t("li",[v._v("尽量使用 SVG\\gradient 等代替图片")]),v._v(" "),t("li",[v._v("根据机型和网络状况控制图片清晰度")]),v._v(" "),t("li",[v._v("对低清晰度图片使用锐化来提升体验")]),v._v(" "),t("li",[v._v("设计上避免大型背景图")]),v._v(" "),t("li",[v._v("减少页面体积，提升网络加载")])])]),v._v(" "),t("p",[v._v("CDN")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("答案")]),v._v(" "),t("ul",[t("li",[v._v("静态资源的压缩合并（JS 代码压缩合并、CSS 代码压缩合并、雪碧图）")]),v._v(" "),t("li",[v._v("静态资源缓存（资源名称加 MD5 戳）")]),v._v(" "),t("li",[v._v("使用 CDN 让资源加载更快")])])]),v._v(" "),t("p",[v._v("优化页面渲染")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("答案")]),v._v(" "),t("ul",[t("li",[v._v("CSS 放前面，JS 放后面")]),v._v(" "),t("li",[v._v("懒加载（图片懒加载、下拉加载更多）")]),v._v(" "),t("li",[v._v("减少 DOM 查询，对 DOM 查询做缓存，缓存获取到的 DOM 元素")]),v._v(" "),t("li",[v._v("减少 DOM 操作，多个操作尽量合并在一起执行（DocumentFragment）")]),v._v(" "),t("li",[v._v("尽量避免用 JS 改变页面布局")])])]),v._v(" "),t("p",[v._v("事件节流")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("答案")]),v._v(" "),t("ul",[t("li",[v._v("尽早执行操作（DOMContentLoaded）")]),v._v(" "),t("li",[v._v("使用 SSR 后端渲染，数据直接输出到 HTML 中，减少浏览器使用 JS 模板渲染页面 HTML 的时间")])])]),v._v(" "),t("p",[v._v("预加载")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("答案")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("我们可以利用浏览器处于空闲时，预先加载之后会使用到的页面的元素（比如：图片，JS，CSS），之后页面再使用这些元素时会优先从缓存中读取。预加载分为这两种形式：")])]),v._v(" "),t("li",[t("p",[v._v("无条件预加载(Unconditional)：页面一旦加载完成就去下载额外的元素，而这个元素并不一定在这个页面上被使用，比如Google首页加载了一张背景图，这是为了搜索结果页所准备的。")])]),v._v(" "),t("li",[t("p",[v._v("条件预加载(Conditional)：这是基于用户行为做出下一步猜测而去加载元素，比如当你输入文字时会根据文字去下载不同元素。\n多域名分发内容")])]),v._v(" "),t("li",[t("p",[v._v("使用多域名分发内容可以可以增加浏览器并行下载数，由于 DNS 解析也要耗时，一般2-4个域名比较合适。比如你可以把 HTML 或 JSP，PHP 等文档文件放在 www.example.org 这个域名上，而把静态文件放在 static1.example.or 或者 static2.example.org上。")])])])]),v._v(" "),t("p",[v._v("减少 iframe 的使用")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("答案")]),v._v(" "),t("p",[v._v("iframe 可以让 HTML 文档嵌套在另一个 HTML 文档内，想要更好的使用它们就必须知道它们的工作原理。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("iframe 优点：")]),v._v(" "),t("ol",[t("li",[v._v("延迟加载广告等第三方内容")]),v._v(" "),t("li",[v._v("提供安全沙箱")]),v._v(" "),t("li",[v._v("并行下载脚本")])])]),v._v(" "),t("li",[t("p",[v._v("iframe 缺点：")]),v._v(" "),t("ol",[t("li",[v._v("代价昂贵")]),v._v(" "),t("li",[v._v("阻止父级页面的加载")]),v._v(" "),t("li",[v._v("非语义化")])])])])]),v._v(" "),t("p",[v._v("减小Cookie")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("答案")]),v._v(" "),t("p",[v._v("Cookie 常常被用在身份验证或者存储个人信息，他会通过 HTTP 头信息在服务端和浏览器之间传输，为了减少 HTTP 响应时间，我们有必要减小 Cookie。通常有以下几个方法：")]),v._v(" "),t("ul",[t("li",[v._v("清除不必要的 Cookie")]),v._v(" "),t("li",[v._v("尽量减小 Cookie 内容的长度")]),v._v(" "),t("li",[v._v("在适当的域中设置 Cookie，保证其他子域不受影响")]),v._v(" "),t("li",[v._v("设定合适的 Cookie 的过期时间")])])])])}),[],!1,null,null,null);_.default=l.exports}}]);