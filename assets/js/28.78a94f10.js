(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{576:function(v,t,_){v.exports=_.p+"assets/img/cache.282f4749.png"},667:function(v,t,_){"use strict";_.r(t);var a=_(14),s=Object(a.a)({},(function(){var v=this,t=v.$createElement,a=v._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器的缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的缓存机制"}},[v._v("#")]),v._v(" 浏览器的缓存机制")]),v._v(" "),a("blockquote",[a("p",[v._v("实际上浏览器缓存机制就是HTTP缓存机制，其机制是根据HTTP报文的缓存标识进行的")])]),v._v(" "),a("ul",[a("li",[v._v("浏览器发起HTTP请求 – 服务器响应该请求。")]),v._v(" "),a("li",[v._v("浏览器第一次向服务器发起该请求后拿到请求结果，会根据"),a("strong",[v._v("响应报文中HTTP头的缓存标识")]),v._v("，决定是否缓存结果。")]),v._v(" "),a("li",[v._v("是则将请求结果和缓存标识存入浏览器缓存中")])]),v._v(" "),a("h2",{attrs:{id:"什么是缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是缓存"}},[v._v("#")]),v._v(" 什么是缓存")]),v._v(" "),a("div",{staticClass:"theorem"},[a("p",{staticClass:"title"},[v._v("浏览器缓存")]),a("ul",[a("li",[v._v("浏览器缓存就是把一个已经请求过的web资源（如html页面，图片，JS，数据）拷贝一份放在浏览器中。")]),v._v(" "),a("li",[v._v("浏览器会根据缓存策略判断是"),a("code",[v._v("重新发起http请求")]),v._v("还是"),a("code",[v._v("读取缓存")]),v._v("。")]),v._v(" "),a("li",[v._v("对于一个数据请求来说，可以分为发起"),a("strong",[v._v("网络请求")]),v._v("、"),a("strong",[v._v("服务器端处理")]),v._v("、"),a("strong",[v._v("浏览器响应")]),v._v("三个步骤。")]),v._v(" "),a("li",[a("strong",[v._v("浏览器缓存可以帮助我们在第一和第三步骤中优化性能")])]),v._v(" "),a("li",[v._v("比如说直接使用缓存而不发起请求，或者发起了请求但后端存储的数据和前端一致，那么就没有必要再将数据回传回来，这样就减少了响应数据")])])]),a("h2",{attrs:{id:"缓存的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存的好处"}},[v._v("#")]),v._v(" 缓存的好处")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("1. 减少网络带宽消耗")]),v._v(" "),a("hr")]),v._v(" "),a("p",[v._v("当缓存生效时，只会产生极小的网络流量，减少对服务器的请求和静态资源的请求，对流量和cdn的消耗都有很大的好处，可以有效降低运营成本。")]),v._v(" "),a("hr"),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("2. 降低服务器压力")]),v._v(" "),a("hr")]),v._v(" "),a("p",[v._v("给网络资源设定有效期之后，用户可以重复使用本地缓存，减少对源服务器的请求，降低了对服务器的压力，同时搜索引擎的爬虫机器人也能根据过期机制降低爬取的频率，也能有效降低服务器压力。")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("3. 更快的页面加载")]),v._v(" "),a("hr")]),v._v(" "),a("p",[v._v("从浏览器中读取缓存明显要比从服务器发请求拉取最新资源要快。缓存也是"),a("strong",[v._v("性能优化")]),v._v("非常显著的手段之一。当利用好缓存之后，会让页面的加载速度大大提高")]),v._v(" "),a("h2",{attrs:{id:"缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[v._v("#")]),v._v(" 缓存策略")]),v._v(" "),a("p",[v._v("浏览器缓存策略通常分为两种："),a("code",[v._v("强缓存")]),v._v("和"),a("code",[v._v("协商缓存")]),v._v("，"),a("strong",[v._v("并且缓存策略都是通过设置 HTTP Header 来实现的")]),v._v("。")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("缓存策略")]),v._v(" "),a("ol",[a("li",[v._v("首先通过"),a("code",[v._v("Cache-Control")]),v._v("验证强缓存是否可用")]),v._v(" "),a("li",[v._v("如果可用，则直接使用缓存("),a("strong",[v._v("返回状态码200")]),v._v(")")]),v._v(" "),a("li",[v._v("不可用进入协商缓存，"),a("strong",[v._v("发送http请求，根据服务器返回的响应头")]),v._v("，决定是否缓存")]),v._v(" "),a("li",[v._v("根据"),a("code",[v._v("If-Modified-Since")]),v._v("和"),a("code",[v._v("If-None-Match")]),v._v("来判断是否可以使用缓存\n"),a("ul",[a("li",[v._v("资源有更新，"),a("strong",[v._v("返回状态码200和请求资源")])]),v._v(" "),a("li",[v._v("资源无修改，"),a("strong",[v._v("返回状态码304，浏览器读取缓存")])])])]),v._v(" "),a("li",[v._v("强缓存是不需要发送HTTP请求的, 而协商缓存需要")])])]),v._v(" "),a("hr"),v._v(" "),a("h2",{attrs:{id:"启用缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用缓存"}},[v._v("#")]),v._v(" 启用缓存")]),v._v(" "),a("ul",[a("li",[v._v("浏览器会根据 HTTP Response Headers 中的一些字段来决定是否要缓存该资源。- 通过设置"),a("code",[v._v("Response Headers")]),v._v("中的"),a("code",[v._v("Cache-Control")]),v._v(" 和 "),a("code",[v._v("Expires")]),v._v("可以启用缓存，这样资源就会被缓存到客户端。")]),v._v(" "),a("li",[v._v("当浏览器去请求某个文件的时候，服务端就在respone header里面对该文件做了缓存配置。缓存的时间、缓存类型都由服务端控制，具")]),v._v(" "),a("li",[v._v("体表现为："),a("strong",[v._v("respone header 的cache-control")]),v._v("，常见的设置是"),a("code",[v._v("max-age")]),v._v(" 、"),a("code",[v._v("public")]),v._v("、"),a("code",[v._v("private")]),v._v(" 、"),a("code",[v._v("no-cache")]),v._v(" "),a("code",[v._v("no-store")]),v._v("等")])]),v._v(" "),a("h3",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[v._v("#")]),v._v(" 强缓存")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("强缓存的设置")]),v._v(" "),a("p",[a("strong",[v._v("强缓存表示在缓存期间不需要请求")]),v._v("，"),a("code",[v._v("state code 为 200")]),v._v("。"),a("br"),v._v("\n强是强制的意思,强缓存可以通过设置两种 HTTP Header 实现：")])]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("Expires")])]),v._v(" "),a("li",[a("strong",[v._v("Cache-Control")])])]),v._v(" "),a("h4",{attrs:{id:"expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[v._v("#")]),v._v(" Expires")]),v._v(" "),a("blockquote",[a("p",[a("code",[v._v("Expires")]),v._v(" 是 HTTP/1.0 的产物")])]),v._v(" "),a("ul",[a("li",[v._v("形式: "),a("code",[v._v("Expires: Wed, 22 Oct 2022 08:41:00 GMT")])]),v._v(" "),a("li",[v._v("表示资源会在 Wed, 22 Oct 2022 08:41:00 GMT 后过期，需要再次请求。")]),v._v(" "),a("li",[a("code",[v._v("Expires")]),v._v(" 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。")])]),v._v(" "),a("h4",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[v._v("#")]),v._v(" Cache-Control")]),v._v(" "),a("blockquote",[a("p",[v._v("Cache-Control` 出现于 HTTP/1.1")])]),v._v(" "),a("ul",[a("li",[v._v("形式: "),a("code",[v._v("Cache-control: max-age=30")])]),v._v(" "),a("li",[v._v("该属性值表示资源会在 30 秒后过期，需要再次请求")]),v._v(" "),a("li",[v._v("优先级高于 Expires")])]),v._v(" "),a("p",[a("code",[v._v("Cache-Control")]),v._v(" 可以在请求头或者响应头中设置，并且可以组合使用多种指令")]),v._v(" "),a("table",[a("thead",[a("tr",[a("th",[v._v("指令")]),v._v(" "),a("th",[v._v("作用")])])]),v._v(" "),a("tbody",[a("tr",[a("td",[v._v("public")]),v._v(" "),a("td",[v._v("表示响应可以被客户端和代理服务器(如CDN)缓存")])]),v._v(" "),a("tr",[a("td",[v._v("private")]),v._v(" "),a("td",[v._v("表示响应只可以被客户端缓存")])]),v._v(" "),a("tr",[a("td",[v._v("max-age=30")]),v._v(" "),a("td",[v._v("从当前请求开始，缓存 30 秒后过期，需要重新请求")])]),v._v(" "),a("tr",[a("td",[v._v("s-maxage=30")]),v._v(" "),a("td",[v._v("覆盖 max-age，作用一样，只在代理服务器中生效")])]),v._v(" "),a("tr",[a("td",[v._v("no-store")]),v._v(" "),a("td",[v._v("不缓存任何响应，禁止浏览器缓存，每次都是从服务器拿到新的资源")])]),v._v(" "),a("tr",[a("td",[v._v("no-cache")]),v._v(" "),a("td",[v._v("不使用强缓存，进入协商缓存阶段，如可用，直接使用缓存资源")])]),v._v(" "),a("tr",[a("td",[v._v("max-stale=30")]),v._v(" "),a("td",[v._v("30秒内，即使缓存过期，也使用该缓存")])]),v._v(" "),a("tr",[a("td",[v._v("min-fresh=30")]),v._v(" "),a("td",[v._v("希望在30秒内获取最新的响应")])]),v._v(" "),a("tr",[a("td",[v._v("must-revalidate")]),v._v(" "),a("td",[v._v("当缓存过期时，需要去服务器校验缓存的有效性")])])])]),v._v(" "),a("h3",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[v._v("#")]),v._v(" 协商缓存")]),v._v(" "),a("ul",[a("li",[v._v("强缓存不可用时，发送http请求进入协商缓存")]),v._v(" "),a("li",[v._v("服务器端会返回一个对应的标识给客户端")]),v._v(" "),a("li",[v._v("客户端下次再次请求的时候，把该标识带过去，然后服务器端会验证该标识，\n"),a("ul",[a("li",[v._v("如果验证通过了，则会返回"),a("code",[v._v("状态码304")]),v._v("，告诉浏览器读取缓存。")]),v._v(" "),a("li",[v._v("如果标识没有通过，则会返回"),a("code",[v._v("状态码200")]),v._v(",则发起请求返回请求的资源。")])])])]),v._v(" "),a("h4",{attrs:{id:"last-modified-和-if-modified-since"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-和-if-modified-since"}},[v._v("#")]),v._v(" Last-Modified 和 If-Modified-Since")]),v._v(" "),a("p",[v._v("Last-Modified 表示本地文件最后修改日期，"),a("strong",[v._v("文件的修改时间，精确到秒")]),v._v("。If-Modified-Since 会将 Last-Modified 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来，否则返回 "),a("code",[v._v("304 状态码")]),v._v("。")]),v._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[v._v("弊端：")]),v._v(" "),a("ul",[a("li",[v._v("如果本地打开缓存文件，即使没有对文件进行修改，或者修改后复原文件，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源。")]),v._v(" "),a("li",[v._v("Last-Modified 只能以秒计时，如果在一秒内进行多次修改文件，服务端还是认为资源还是命中缓存，不会返回正确的资源。")]),v._v(" "),a("li",[v._v("因为以上这些弊端，所以在 HTTP / 1.1 出现了 ETag。")])])]),v._v(" "),a("h4",{attrs:{id:"etag-和-if-none-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etag-和-if-none-match"}},[v._v("#")]),v._v(" ETag 和 If-None-Match")]),v._v(" "),a("ol",[a("li",[v._v("ETag是根据文件内容做判断，生成唯一的hash值，只要资源有变化，ETag会重新生成。")]),v._v(" "),a("li",[v._v("If-None-Match 会将当前 ETag 发送给服务器，询问该资源 ETag 是否变动，\n"),a("ul",[a("li",[v._v("有变动的话就将新的资源发送回来。")])])]),v._v(" "),a("li",[v._v("ETag 优先级比 Last-Modified 高。")])]),v._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[v._v("弊端：")]),v._v(" "),a("p",[v._v("对服务器的资源消耗更大")])]),v._v(" "),a("blockquote",[a("p",[v._v("如果什么缓存策略都没设置，那么浏览器会怎么处理？\n对于这种情况，浏览器会采用一个启发式的算法，通常会取响应头中的 Date 减去 Last-Modified 值的 10% 作为缓存时间。")])]),v._v(" "),a("h2",{attrs:{id:"缓存优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存优先级"}},[v._v("#")]),v._v(" 缓存优先级")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("先找强缓存，再找协商缓存")])]),v._v(" "),a("li",[v._v("强缓存中，"),a("strong",[v._v("Cache-Control 的优先级高于 Expires")])]),v._v(" "),a("li",[v._v("协商缓存中，"),a("strong",[v._v("ETag 优先级高于 Last-Modified")])])]),v._v(" "),a("h2",{attrs:{id:"缓存位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[v._v("#")]),v._v(" 缓存位置")]),v._v(" "),a("p",[v._v("从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("Service Worker")]),v._v("（浏览器背后的独立线程）")]),v._v(" "),a("li",[a("code",[v._v("Memory Cache")]),v._v(" （缓存在内存）")]),v._v(" "),a("li",[a("code",[v._v("Disk Cache")]),v._v("  （缓存在硬盘）")]),v._v(" "),a("li",[a("code",[v._v("Push Cache")]),v._v(" （推送缓存）")]),v._v(" "),a("li",[a("code",[v._v("发起网络请求")]),v._v("  （都找不到缓存，发请求）")])]),v._v(" "),a("h3",{attrs:{id:"service-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[v._v("#")]),v._v(" Service Worker")]),v._v(" "),a("div",{staticClass:"theorem"},[a("p",{staticClass:"title"},[v._v("Service Worker")]),a("ul",[a("li",[v._v("Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。")]),v._v(" "),a("li",[v._v("Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。")]),v._v(" "),a("li",[v._v("Service Worker 实现缓存功能一般分为三个步骤：\n"),a("ol",[a("li",[v._v("首先需要先注册 Service Worker")]),v._v(" "),a("li",[v._v("然后监听到 install 事件以后就可以缓存需要的文件，那么在下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存，")]),v._v(" "),a("li",[v._v("存在缓存的话就可以直接读取缓存文件，否则就去请求数据")])])])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[v._v("DANGER")]),v._v(" "),a("p",[v._v("使用 Service Worker的话，传输协议必须为 HTTPS")])]),v._v(" "),a("h3",{attrs:{id:"memory-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache"}},[v._v("#")]),v._v(" Memory Cache")]),v._v(" "),a("div",{staticClass:"theorem"},[a("p",{staticClass:"title"},[v._v("缓存在内存中")]),a("p",[v._v("Memory Cache 也就是内存中的缓存，读取内存中的数据肯定比磁盘快。"),a("code",[v._v("内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放")]),v._v("。一旦我们关闭 Tab 页面，内存中的缓存也就被释放了")])]),a("h3",{attrs:{id:"disk-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disk-cache"}},[v._v("#")]),v._v(" Disk Cache")]),v._v(" "),a("div",{staticClass:"theorem"},[a("p",{staticClass:"title"},[v._v("缓存在硬盘中")]),a("blockquote",[a("p",[v._v("Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。")])]),v._v(" "),a("p",[v._v("在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。绝大部分的缓存都来自 Disk Cache")])]),a("h3",{attrs:{id:"push-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push-cache"}},[v._v("#")]),v._v(" Push Cache")]),v._v(" "),a("div",{staticClass:"theorem"},[a("p",{staticClass:"title"},[v._v("推送缓存")]),a("p",[v._v("Push Cache（推送缓存）是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在Chrome浏览器中只有5分钟左右，同时它也并非严格执行HTTP头中的缓存指令。")])]),a("h3",{attrs:{id:"网络请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络请求"}},[v._v("#")]),v._v(" 网络请求")]),v._v(" "),a("p",[v._v("如果以上四种缓存都没有命中的话，那么只能发起请求来获取资源了。")]),v._v(" "),a("h2",{attrs:{id:"用户行为对浏览器缓存的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户行为对浏览器缓存的影响"}},[v._v("#")]),v._v(" 用户行为对浏览器缓存的影响")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("主要是浏览器刷新")]),v._v(" "),a("p",[v._v("指的是用户在浏览器如何操作时，会触发怎样的缓存策略。主要有 3 种：")])]),v._v(" "),a("ul",[a("li",[v._v("打开网页，地址栏输入地址： 查找 disk cache 中是否有匹配。如有则使用；如没有则发送网络请求；")]),v._v(" "),a("li",[v._v("普通刷新 (F5)：因为 TAB 并没有关闭，因此 memory cache 是可用的，会被优先使用 (如果匹配的话)。其次才是 disk cache；")]),v._v(" "),a("li",[v._v("强制刷新 (Ctrl + F5)：浏览器不使用缓存，因此发送的请求头部均带有 Cache-control: no-cache(为了兼容，还带了 Pragma: no-cache), 服务器直接返回 200 和最新内容")])]),v._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),a("p",[a("img",{attrs:{src:_(576),alt:""}})]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("第一次请求")]),v._v(" "),a("hr")]),v._v(" "),a("ul",[a("li",[v._v("当浏览器第一次发请求给服务器时，此时的浏览器由于是第一次和服务器交互，所以没有从服务端拿到过数据资源，")]),v._v(" "),a("li",[v._v("浏览器本地就没有缓存数据，直接访问服务器，然后服务器接收到请求之后就把资源返回给浏览器，并返回状态码200，")]),v._v(" "),a("li",[v._v("浏览器接收到资源后，就把资源和对应的响应头一起缓存下来。")])]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("后续请求")]),v._v(" "),a("hr")]),v._v(" "),a("ul",[a("li",[v._v("如果强缓存可用，直接使用缓存。即强缓存是不会发生HTTP请求的。")]),v._v(" "),a("li",[v._v("否则进入协商缓存，即发送 HTTP 请求，服务器通过请求头中的If-Modified-Since或者If-None-Match这些条件请求字段检查资源是否更新\n"),a("ul",[a("li",[v._v("若资源更新，返回资源和200状态码")]),v._v(" "),a("li",[v._v("否则，返回304，告诉浏览器直接从缓存获取资源")])])])]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("详细版")]),v._v(" "),a("hr")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("当浏览器在发请求给服务器时，浏览器会检查下本地的强缓存也就是上次请求中携带Cache-Control的数据。如果资源没有过期就使用缓存中的资源，不在去服务器端请求数据。\n如果浏览器没有命中缓存或者命中的缓存已经过期，浏览器就会把请求发送给服务器，进入协商缓存阶段。")])]),v._v(" "),a("li",[a("p",[v._v("浏览器缓存分为强缓存和协商缓存，当客户端请求某个资源时，会按照以下步骤进行缓存查询")])]),v._v(" "),a("li",[a("p",[v._v("首先先根据资源的http header判断它是否命中强缓存，先检查Cache-Control，如果命中就会直接从本地缓存中取资源，不会发请求到服务器\n当强缓存没有命中，就会进入协商缓存阶段，浏览器会发请求到服务器，服务器端通过request header验证资源是否命中协商缓存，如果命中协商缓存，服务器将请求返回，但是不会返回数据，状态码为304告诉浏览器在本地缓存中取资源。\n当协商缓存也没有命中的时候，服务端就会发资源给客户端\n当强制刷新网页时，比如ctrl+f5，就会直接跳过强缓存和协商缓存，直接请求服务器拿到资源\n普通刷新只是跳过强缓存，但是会检查协商缓")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);