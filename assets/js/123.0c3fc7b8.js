(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{714:function(t,e,s){"use strict";s.r(e);var a=s(14),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"常考面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常考面试题"}},[t._v("#")]),t._v(" 常考面试题")]),t._v(" "),s("h4",{attrs:{id:"_1-post-和-get-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-post-和-get-的区别"}},[t._v("#")]),t._v(" 1. Post 和 Get 的区别？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("Post 和 Get 是 HTTP 请求的两种方法。")]),t._v(" "),s("p",[t._v("（1）从应用场景上来说，GET 请求是一个幂等的请求，一般 Get 请求用于对服务器资源不会产生影响的场景，比如说请求一个网\n页。而 Post 不是一个幂等的请求，一般用于对服务器资源会产生影响的情景。比如注册用户这一类的操作。")]),t._v(" "),s("p",[t._v("（2）因为不同的应用场景，所以浏览器一般会对 Get 请求缓存，但很少对 Post 请求缓存。")]),t._v(" "),s("p",[t._v("（3）从发送的报文格式来说，Get 请求的报文中实体部分为空，Post 请求的报文中实体部分一般为向服务器发送的数据。")]),t._v(" "),s("p",[t._v("（4）但是 Get 请求也可以将请求的参数放入 url 中向服务器发送，这样的做法相对于 Post 请求来说，一个方面是不太安全，\n因为请求的 url 会被保留在历史记录中。并且浏览器由于对 url 有一个长度上的限制，所以会影响 get 请求发送数据时\n的长度。这个限制是浏览器规定的，并不是 RFC 规定的。还有就是 post 的参数传递支持更多的数据类型。")])]),t._v(" "),s("h4",{attrs:{id:"_2-tls-ssl-中什么一定要用三个随机数-来生成-会话密钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-tls-ssl-中什么一定要用三个随机数-来生成-会话密钥"}},[t._v("#")]),t._v(' 2. TLS/SSL 中什么一定要用三个随机数，来生成"会话密钥"？')]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("客户端和服务器都需要生成随机数，以此来保证每次生成的秘钥都不相同。使用三个随机数，是因为 SSL 的协议默认不信任每个主\n机都能产生完全随机的数，如果只使用一个伪随机的数来生成秘钥，就很容易被破解。通过使用三个随机数的方式，增加了自由度，\n一个伪随机可能被破解，但是三个伪随机就很接近于随机了，因此可以使用这种方法来保持生成秘钥的随机性和安全性。")])]),t._v(" "),s("h4",{attrs:{id:"_3-ssl-连接断开后如何恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ssl-连接断开后如何恢复"}},[t._v("#")]),t._v(" 3. SSL 连接断开后如何恢复？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("一共有两种方法来恢复断开的 SSL 连接，一种是使用 session ID，一种是 session ticket。")]),t._v(" "),s("p",[t._v("使用 session ID 的方式，每一次的会话都有一个编号，当对话中断后，下一次重新连接时，只要客户端给出这个编号，服务器\n如果有这个编号的记录，那么双方就可以继续使用以前的秘钥，而不用重新生成一把。目前所有的浏览器都支持这一种方法。但是\n这种方法有一个缺点是，session ID 只能够存在一台服务器上，如果我们的请求通过负载平衡被转移到了其他的服务器上，那\n么就无法恢复对话。")]),t._v(" "),s("p",[t._v("另一种方式是 session ticket 的方式，session ticket 是服务器在上一次对话中发送给客户的，这个 ticket 是加密的\n，只有服务器能够解密，里面包含了本次会话的信息，比如对话秘钥和加密方法等。这样不管我们的请求是否转移到其他的服务器\n上，当服务器将 ticket 解密以后，就能够获取上次对话的信息，就不用重新生成对话秘钥了。")])]),t._v(" "),s("h4",{attrs:{id:"_4-rsa-算法的安全性保障"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-rsa-算法的安全性保障"}},[t._v("#")]),t._v(" 4. RSA 算法的安全性保障？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("对极大整数做因数分解的难度决定了 RSA 算法的可靠性。换言之，对一极大整数做因数分解愈困难，RSA 算法愈可靠。现在102\n4位的 RSA 密钥基本安全，2048位的密钥极其安全。")])]),t._v(" "),s("h4",{attrs:{id:"_5-dns-为什么使用-udp-协议作为传输层协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-dns-为什么使用-udp-协议作为传输层协议"}},[t._v("#")]),t._v(" 5. DNS 为什么使用 UDP 协议作为传输层协议？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("DNS 使用 UDP 协议作为传输层协议的主要原因是为了避免使用 TCP 协议时造成的连接时延。因为为了得到一个域名的 IP 地\n址，往往会向多个域名服务器查询，如果使用 TCP 协议，那么每次请求都会存在连接时延，这样使 DNS 服务变得很慢，因为大\n多数的地址查询请求，都是浏览器请求页面时发出的，这样会造成网页的等待时间过长。")]),t._v(" "),s("p",[t._v("使用 UDP 协议作为 DNS 协议会有一个问题，由于历史原因，物理链路的最小MTU = 576，所以为了限制报文长度不超过576，\nUDP 的报文段的长度被限制在 512 个字节以内，这样一旦 DNS 的查询或者应答报文，超过了 512 字节，那么基于 UDP 的\nDNS 协议就会被截断为 512 字节，那么有可能用户得到的 DNS 应答就是不完整的。这里 DNS 报文的长度一旦超过限制，并不\n会像 TCP 协议那样被拆分成多个报文段传输，因为 UDP 协议不会维护连接状态，所以我们没有办法确定那几个报文段属于同一\n个数据，UDP 只会将多余的数据给截取掉。为了解决这个问题，我们可以使用 TCP 协议去请求报文。")]),t._v(" "),s("p",[t._v("DNS 还存在的一个问题是安全问题，就是我们没有办法确定我们得到的应答，一定是一个安全的应答，因为应答可以被他人伪造，\n所以现在有了 DNS over HTTPS 来解决这个问题。")])]),t._v(" "),s("p",[t._v("详细资料可以参考：\n"),s("a",{attrs:{href:"https://www.zhihu.com/question/310145373",target:"_blank",rel:"noopener noreferrer"}},[t._v("《为什么 DNS 使用 UDP 而不是 TCP？》"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_6-当你在浏览器中输入-google-com-并且按下回车之后发生了什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-当你在浏览器中输入-google-com-并且按下回车之后发生了什么"}},[t._v("#")]),t._v(" 6. 当你在浏览器中输入 Google.com 并且按下回车之后发生了什么？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("（1）首先会对 URL 进行解析，分析所需要使用的传输协议和请求的资源的路径。如果输入的 URL 中的协议或者主机名不合法，\n将会把地址栏中输入的内容传递给搜索引擎。如果没有问题，浏览器会检查 URL 中是否出现了非法字符，如果存在非法字\n符，则对非法字符进行转义后再进行下一过程。")]),t._v(" "),s("p",[t._v("（2）浏览器会判断所请求的资源是否在缓存里，如果请求的资源在缓存里并且没有失效，那么就直接使用，否则向服务器发起新\n的请求。")]),t._v(" "),s("p",[t._v("（3）下一步我们首先需要获取的是输入的 URL 中的域名的 IP 地址，首先会判断本地是否有该域名的 IP 地址的缓存，如果\n有则使用，如果没有则向本地 DNS 服务器发起请求。本地 DNS 服务器也会先检查是否存在缓存，如果没有就会先向根域\n名服务器发起请求，获得负责的顶级域名服务器的地址后，再向顶级域名服务器请求，然后获得负责的权威域名服务器的地\n址后，再向权威域名服务器发起请求，最终获得域名的 IP 地址后，本地 DNS 服务器再将这个 IP 地址返回给请求的用\n户。用户向本地 DNS 服务器发起请求属于递归请求，本地 DNS 服务器向各级域名服务器发起请求属于迭代请求。")]),t._v(" "),s("p",[t._v("（4）当浏览器得到 IP 地址后，数据传输还需要知道目的主机 MAC 地址，因为应用层下发数据给传输层，TCP 协议会指定源\n端口号和目的端口号，然后下发给网络层。网络层会将本机地址作为源地址，获取的 IP 地址作为目的地址。然后将下发给\n数据链路层，数据链路层的发送需要加入通信双方的 MAC 地址，我们本机的 MAC 地址作为源 MAC 地址，目的 MAC 地\n址需要分情况处理，通过将 IP 地址与我们本机的子网掩码相与，我们可以判断我们是否与请求主机在同一个子网里，如果\n在同一个子网里，我们可以使用 APR 协议获取到目的主机的 MAC 地址，如果我们不在一个子网里，那么我们的请求应该\n转发给我们的网关，由它代为转发，此时同样可以通过 ARP 协议来获取网关的 MAC 地址，此时目的主机的 MAC 地址应\n该为网关的地址。")]),t._v(" "),s("p",[t._v("（5）下面是 TCP 建立连接的三次握手的过程，首先客户端向服务器发送一个 SYN 连接请求报文段和一个随机序号，服务端接\n收到请求后向服务器端发送一个 SYN ACK报文段，确认连接请求，并且也向客户端发送一个随机序号。客户端接收服务器的\n确认应答后，进入连接建立的状态，同时向服务器也发送一个 ACK 确认报文段，服务器端接收到确认后，也进入连接建立\n状态，此时双方的连接就建立起来了。")]),t._v(" "),s("p",[t._v("（6）如果使用的是 HTTPS 协议，在通信前还存在 TLS 的一个四次握手的过程。首先由客户端向服务器端发送使用的协议的版\n本号、一个随机数和可以使用的加密方法。服务器端收到后，确认加密的方法，也向客户端发送一个随机数和自己的数字证\n书。客户端收到后，首先检查数字证书是否有效，如果有效，则再生成一个随机数，并使用证书中的公钥对随机数加密，然后\n发送给服务器端，并且还会提供一个前面所有内容的 hash 值供服务器端检验。服务器端接收后，使用自己的私钥对数据解\n密，同时向客户端发送一个前面所有内容的 hash 值供客户端检验。这个时候双方都有了三个随机数，按照之前所约定的加\n密方法，使用这三个随机数生成一把秘钥，以后双方通信前，就使用这个秘钥对数据进行加密后再传输。")]),t._v(" "),s("p",[t._v("（7）当页面请求发送到服务器端后，服务器端会返回一个 html 文件作为响应，浏览器接收到响应后，开始对 html 文件进行\n解析，开始页面的渲染过程。")]),t._v(" "),s("p",[t._v("（8）浏览器首先会根据 html 文件构建 DOM 树，根据解析到的 css 文件构建 CSSOM 树，如果遇到 script 标签，则判端\n是否含有 defer 或者 async 属性，要不然 script 的加载和执行会造成页面的渲染的阻塞。当 DOM 树和 CSSOM 树建\n立好后，根据它们来构建渲染树。渲染树构建好后，会根据渲染树来进行布局。布局完成后，最后使用浏览器的 UI 接口对页\n面进行绘制。这个时候整个页面就显示出来了。")]),t._v(" "),s("p",[t._v("（9）最后一步是 TCP 断开连接的四次挥手过程。")])]),t._v(" "),s("p",[t._v("详细资料可以参考：\n"),s("a",{attrs:{href:"http://blog.jobbole.com/84870/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《当你在浏览器中输入 Google.com 并且按下回车之后发生了什么？》"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_7-谈谈-cdn-服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-谈谈-cdn-服务"}},[t._v("#")]),t._v(" 7. 谈谈 CDN 服务？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("CDN 是一个内容分发网络，通过对源网站资源的缓存，利用本身多台位于不同地域、不同运营商的服务器，向用户提供资就近访问的\n功能。也就是说，用户的请求并不是直接发送给源网站，而是发送给 CDN 服务器，由 CND 服务器将请求定位到最近的含有该资源\n的服务器上去请求。这样有利于提高网站的访问速度，同时通过这种方式也减轻了源服务器的访问压力。")])]),t._v(" "),s("p",[t._v("详细资料可以参考：\n"),s("a",{attrs:{href:"https://www.zhihu.com/question/36514327?rf=37353035",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CDN 是什么？使用 CDN 有什么优势？》"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_8-什么是正向代理和反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-什么是正向代理和反向代理"}},[t._v("#")]),t._v(" 8. 什么是正向代理和反向代理？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("我们常说的代理也就是指正向代理，正向代理的过程，它隐藏了真实的请求客户端，服务端不知道真实的客户端是谁，客户端请求的\n服务都被代理服务器代替来请求。")]),t._v(" "),s("p",[t._v("反向代理隐藏了真实的服务端，当我们请求一个网站的时候，背后可能有成千上万台服务器为我们服务，但具体是哪一台，我们不知\n道，也不需要知道，我们只需要知道反向代理服务器是谁就好了，反向代理服务器会帮我们把请求转发到真实的服务器那里去。反向\n代理器一般用来实现负载平衡。")])]),t._v(" "),s("p",[t._v("详细资料可以参考：\n"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/ikrI3rmSYs83wdSWqq2QIg?",target:"_blank",rel:"noopener noreferrer"}},[t._v("《正向代理与反向代理有什么区别》"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://segmentfault.com/q/1010000017502539/a-1020000017532348",target:"_blank",rel:"noopener noreferrer"}},[t._v("《webpack 配置 proxy 反向代理的原理是什么？》"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_9-负载平衡的两种实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-负载平衡的两种实现方式"}},[t._v("#")]),t._v(" 9. 负载平衡的两种实现方式？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("一种是使用反向代理的方式，用户的请求都发送到反向代理服务上，然后由反向代理服务器来转发请求到真实的服务器上，以此来实\n现集群的负载平衡。")]),t._v(" "),s("p",[t._v("另一种是 DNS 的方式，DNS 可以用于在冗余的服务器上实现负载平衡。因为现在一般的大型网站使用多台服务器提供服务，因此一\n个域名可能会对应多个服务器地址。当用户向网站域名请求的时候，DNS 服务器返回这个域名所对应的服务器 IP 地址的集合，但在\n每个回答中，会循环这些 IP 地址的顺序，用户一般会选择排在前面的地址发送请求。以此将用户的请求均衡的分配到各个不同的服\n务器上，这样来实现负载均衡。这种方式有一个缺点就是，由于 DNS 服务器中存在缓存，所以有可能一个服务器出现故障后，域名解\n析仍然返回的是那个 IP 地址，就会造成访问的问题。")])]),t._v(" "),s("p",[t._v("详细资料可以参考：\n"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzA5Njc2OTg4NQ==&mid=2247483870&idx=1&sn=bab36544ec62c394c104df699cf85154&chksm=90aa43eca7ddcafa01634cefee12fd8a332250d3f49d8b6647f536c215ac297e4b6a53af8253#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("《负载均衡的原理》"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_10-http-请求方法-options-方法有什么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-http-请求方法-options-方法有什么用"}},[t._v("#")]),t._v(" 10. http 请求方法 options 方法有什么用？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("OPTIONS 请求与 HEAD 类似，一般也是用于客户端查看服务器的性能。这个方法会请求服务器返回该资源所支持的所有 HTTP 请\n求方法，该方法会用'*'来代替资源名称，向服务器发送 OPTIONS 请求，可以测试服务器功能是否正常。JS 的 XMLHttpRequest\n对象进行 CORS 跨域资源共享时，对于复杂请求，就是使用 OPTIONS 方法发送嗅探请求，以判断是否有对指定资源的访问权限。")])]),t._v(" "),s("p",[t._v("相关资料可以参考：\n"),s("a",{attrs:{href:"https://itbilu.com/other/relate/EkwKysXIl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《HTTP 请求方法》"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_11-http1-1-和-http1-0-之间有哪些区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-http1-1-和-http1-0-之间有哪些区别"}},[t._v("#")]),t._v(" 11. http1.1 和 http1.0 之间有哪些区别？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("http1.1 相对于 http1.0 有这样几个区别：\n（1）连接方面的区别，http1.1 默认使用持久连接，而 http1.0 默认使用非持久连接。http1.1 通过使用持久连接来使多个 http 请求复用同一个 TCP 连接，以此来避免使用非持久连接时每次需要建立连接的时延。\n（2）资源请求方面的区别，在 http1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，http1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。")]),t._v(" "),s("p",[t._v("（3）缓存方面的区别，在 http1.0 中主要使用 header 里的 If-Modified-Since,Expires 来做为缓存判断的标准，http1.1 则引入了更多的缓存控制策略例如 Etag、If-Unmodified-Since、If-Match、If-None-Match 等更多可供选择的缓存头来控制缓存策略。")]),t._v(" "),s("p",[t._v("（4）http1.1 中还新增了 host 字段，用来指定服务器的域名。http1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且它们共享一个IP地址。因此有了 host 字段，就可以将请求发往同一台服务器上的不同网站。")]),t._v(" "),s("p",[t._v("（5）http1.1 相对于 http1.0 还新增了很多方法，如 PUT、HEAD、OPTIONS 等。")])]),t._v(" "),s("p",[t._v("详细资料可以参考：\n"),s("a",{attrs:{href:"https://juejin.im/entry/5981c5df518825359a2b9476",target:"_blank",rel:"noopener noreferrer"}},[t._v("《HTTP1.0、HTTP1.1 和 HTTP2.0 的区别》"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/08/http.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《HTTP 协议入门》"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://blog.csdn.net/netdxy/article/details/51195560",target:"_blank",rel:"noopener noreferrer"}},[t._v("《网络---一篇文章详解请求头 Host 的概念》"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_12-网站域名加-www-与不加-www-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-网站域名加-www-与不加-www-的区别"}},[t._v("#")]),t._v(" 12. 网站域名加 www 与不加 www 的区别？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("详细资料可以参考：\n"),s("a",{attrs:{href:"https://www.f9seo.com/post-816.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《为什么域名前要加 www 前缀 www 是什么意思？》"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.zhihu.com/question/20414602",target:"_blank",rel:"noopener noreferrer"}},[t._v("《为什么越来越多的网站域名不加「www」前缀？》"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://blog.csdn.net/andybruse/article/details/7982278",target:"_blank",rel:"noopener noreferrer"}},[t._v("《域名有 www 与没有 www 有什么区别？》"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"_13-即时通讯的实现-短轮询、长轮询、sse-和-websocket-间的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-即时通讯的实现-短轮询、长轮询、sse-和-websocket-间的区别"}},[t._v("#")]),t._v(" 13. 即时通讯的实现，短轮询、长轮询、SSE 和 WebSocket 间的区别？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("短轮询和长轮询的目的都是用于实现客户端和服务器端的一个即时通讯。")]),t._v(" "),s("p",[t._v("短轮询的基本思路就是浏览器每隔一段时间向浏览器发送 http 请求，服务器端在收到请求后，不论是否有数据更新，都直接进行\n响应。这种方式实现的即时通信，本质上还是浏览器发送请求，服务器接受请求的一个过程，通过让客户端不断的进行请求，使得客\n户端能够模拟实时地收到服务器端的数据的变化。这种方式的优点是比较简单，易于理解。缺点是这种方式由于需要不断的建立 ht\ntp 连接，严重浪费了服务器端和客户端的资源。当用户增加时，服务器端的压力就会变大，这是很不合理的。")]),t._v(" "),s("p",[t._v("长轮询的基本思路是，首先由客户端向服务器发起请求，当服务器收到客户端发来的请求后，服务器端不会直接进行响应，而是先将\n这个请求挂起，然后判断服务器端数据是否有更新。如果有更新，则进行响应，如果一直没有数据，则到达一定的时间限制才返回。\n客户端 JavaScript 响应处理函数会在处理完服务器返回的信息后，再次发出请求，重新建立连接。长轮询和短轮询比起来，它的\n优点是明显减少了很多不必要的 http 请求次数，相比之下节约了资源。长轮询的缺点在于，连接挂起也会导致资源的浪费。")]),t._v(" "),s("p",[t._v("SSE 的基本思想是，服务器使用流信息向服务器推送信息。严格地说，http 协议无法做到服务器主动推送信息。但是，有一种变通\n方法，就是服务器向客户端声明，接下来要发送的是流信息。也就是说，发送的不是一次性的数据包，而是一个数据流，会连续不断\n地发送过来。这时，客户端不会关闭连接，会一直等着服务器发过来的新的数据流，视频播放就是这样的例子。SSE 就是利用这种机\n制，使用流信息向浏览器推送信息。它基于 http 协议，目前除了 IE/Edge，其他浏览器都支持。它相对于前面两种方式来说，不\n需要建立过多的 http 请求，相比之下节约了资源。")]),t._v(" "),s("p",[t._v("上面三种方式本质上都是基于 http 协议的，我们还可以使用 WebSocket 协议来实现。WebSocket 是 Html5 定义的一个新协\n议，与传统的 http 协议不同，该协议允许由服务器主动的向客户端推送信息。使用 WebSocket 协议的缺点是在服务器端的配置\n比较复杂。WebSocket 是一个全双工的协议，也就是通信双方是平等的，可以相互发送消息，而 SSE 的方式是单向通信的，只能\n由服务器端向客户端推送信息，如果客户端需要发送信息就是属于下一个 http 请求了。")])]),t._v(" "),s("p",[t._v("详细资料可以参考：\n"),s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1076547",target:"_blank",rel:"noopener noreferrer"}},[t._v("《轮询、长轮询、长连接、websocket》"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/05/server-sent_events.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Server-Sent Events 教程》"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/05/websocket.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《WebSocket 教程》"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_14-怎么实现多个网站之间共享登录状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-怎么实现多个网站之间共享登录状态"}},[t._v("#")]),t._v(" 14. 怎么实现多个网站之间共享登录状态")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("答案")]),t._v(" "),s("p",[t._v("在多个网站之间共享登录状态指的就是单点登录。多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。")]),t._v(" "),s("p",[t._v("我认为单点登录可以这样来实现，首先将用户信息的验证中心独立出来，作为一个单独的认证中心，该认证中心的作用是判断客户端发\n送的账号密码的正确性，然后向客户端返回对应的用户信息，并且返回一个由服务器端秘钥加密的登录信息的 token 给客户端，该\ntoken 具有一定的有效时限。当一个应用系统跳转到另一个应用系统时，通过 url 参数的方式来传递 token，然后转移到的应用站\n点发送给认证中心，认证中心对 token 进行解密后验证，如果用户信息没有失效，则向客户端返回对应的用户信息，如果失效了则将\n页面重定向会单点登录页面。")])]),t._v(" "),s("p",[t._v("详细资料可以参考：\n"),s("a",{attrs:{href:"https://www.zhihu.com/question/35906139",target:"_blank",rel:"noopener noreferrer"}},[t._v("《HTTP 是个无状态协议，怎么保持登录状态？》"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);