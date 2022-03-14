(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{558:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),a("p",[t._v("块级格式上下文，是一块独立的布局区域，块级元素和浮动元素会根据这块区域进行布局。")]),t._v(" "),a("p",[t._v("很多候选人不知道display: flow-root;这个属性，这个设置全称是：display: block flow-root;，顾名思义，就一对外显示为block，对内创建一个独立的文档布局流（自身作为该布局流的根），而这个布局流构成的上下文即bfc。这个上下文对外表现出的独立性，就是包裹内部的浮动元素，不与外部的边距合并等效果")]),t._v(" "),a("p",[t._v("其实我们常用的display: inline-block的全称是display: inline flow-root;，所以它也能开启bfc，和display: flow-root;的区别在于对外表现为inline")]),t._v(" "),a("h1",{attrs:{id:"盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[t._v("#")]),t._v(" 盒子模型")]),t._v(" "),a("p",[t._v("块级盒子和行内盒子")]),t._v(" "),a("p",[t._v("行内盒子 垂直的padding不会挤占空间，但是会重叠， 水平的padding会挤占空间")]),t._v(" "),a("h1",{attrs:{id:"history-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-api"}},[t._v("#")]),t._v(" History API")]),t._v(" "),a("ol",[a("li",[t._v("history.back()  回退")]),t._v(" "),a("li",[t._v("history .forward()  前进")]),t._v(" "),a("li",[t._v("history.go()  前进或后退任意步数， 栈空间好像是10个")]),t._v(" "),a("li",[t._v("history.pushState")]),t._v(" "),a("li",[t._v("history.replaceState")]),t._v(" "),a("li",[t._v("history.sate()  当前url的状态")])]),t._v(" "),a("h1",{attrs:{id:"答得不好的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#答得不好的"}},[t._v("#")]),t._v(" 答得不好的")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("vue.set（）有什么用 实现原理")])]),t._v(" "),a("li",[a("p",[t._v("有没有封装过拦截器 路由守卫")])]),t._v(" "),a("li",[a("p",[t._v("对webpack熟悉不 怎么优化打包体积 分多环境打包")])]),t._v(" "),a("li",[a("p",[t._v("diff"),a("a",{attrs:{href:"https://www.nowcoder.com/jump/super-jump/word?word=%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法"),a("OutboundLink")],1),t._v("实现原理 虚拟dom工作原理")])]),t._v(" "),a("li",[a("p",[t._v("vuex持久化 页面f5刷新数据丢失怎么解决")])]),t._v(" "),a("li",[a("p",[t._v("路由传参有哪几种方法 query和params区别\nquery参数在URL可见 params参数在哪里传过去的")])]),t._v(" "),a("li",[a("p",[t._v("Vue 的列表渲染中的 key 属性作用，key 的值用 index 可以吗，是否能解决刚才的问题")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("  key不用index是怎么回答的 我每次都回答可能会错误复用 导致数据混乱\n")])])]),a("p",[t._v("主要是index会变的，diff认为key相同就是同一dom，就不会再递归比较了，也不会进行patch，所以最好选，不会变化的值作为key")]),t._v(" "),a("h1",{attrs:{id:"春招-记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#春招-记录"}},[t._v("#")]),t._v(" 春招(记录)")])])]),t._v(" "),a("h2",{attrs:{id:"函数名-函数参数名-变量名-重名优先级问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数名-函数参数名-变量名-重名优先级问题"}},[t._v("#")]),t._v(" 函数名 函数参数名  变量名 重名优先级问题")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("优先级  赋值变量名 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  函数形参 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 函数名 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 未赋值变量\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已经有形参a了，  这条语句会被忽略 但如果赋值了，则a的值变化")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h1",{attrs:{id:"cvte-我的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cvte-我的"}},[t._v("#")]),t._v(" CVTE(我的)")]),t._v(" "),a("ul",[a("li",[t._v("文件上传 前端怎么获取文件 整合文件传到后端  断点续传")]),t._v(" "),a("li",[t._v("首屏加载渲染慢怎么解决")]),t._v(" "),a("li",[t._v("一次性获取所有DOM节点")]),t._v(" "),a("li",[t._v("一次性大量列表渲染问题")]),t._v(" "),a("li",[t._v("label标签作用，让JS主动获取焦点")]),t._v(" "),a("li",[t._v("flex属性 圣杯布局")]),t._v(" "),a("li",[t._v("实现bind() 箭头函数意义")]),t._v(" "),a("li",[t._v("postmessage  iframe  cookie通信")]),t._v(" "),a("li",[t._v("node  读取文件内容  开启http服务器")]),t._v(" "),a("li",[t._v("获取页面DOM节点总数\n"),a("ul",[a("li",[a("code",[t._v("document.getElementsByTagName('*').length")])])])]),t._v(" "),a("li",[t._v("数组方法  比如截取数组  数组实现一个栈")]),t._v(" "),a("li",[t._v("vue性能问题")]),t._v(" "),a("li",[t._v("z-index 问题，解决办法: 给父级添加 position:relative")]),t._v(" "),a("li",[t._v("请描述下 SEO 中的 TDK？")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("答案：在 SEO 中，所谓的 TDK 其实就是 title、description、keywords 这三个标签，title 标题标签，description 描述标签，keywords 关键词标签\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("iframe能拿到父页面的cookie吗")]),t._v(" "),a("li",[t._v("a页面与b页面是同源的不涉及跨域,a页面iframe了b页面,a页面登录后有了cookies,这个时候b页面可以访问到a页面的cookies吗?请问怎样做可以让a页面的cookies传到b页面的cookies里面")])]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("不跨域"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cookie是同步写的"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 无论是iframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 还是不同的window或者tab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 任何一个页面修改了cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n其它页面就可以通过"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("document.cookie")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("拿到"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 但是没法监听cookie的改变"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("需要注意两点")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 一是如果指定了"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 则不同"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("的页面拿不到"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n二是如果设置了"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("httpOnly")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 则js无法读取"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("另外")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 如果要在iframe之间通信"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 可以考虑使用"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 如果要跨页面监听数据变化"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 可以考虑使用"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("localStorage")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("或者"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("sessionStorage")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n 然后在"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("window")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("上监听"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("storage")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("事件\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("语义化标签 作用")]),t._v(" "),a("p",[t._v("label 标签来定义表单控制间的关系,"),a("strong",[t._v("当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上")])]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("两种用法：一种是 id 绑定，一种是嵌套\n\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Number:")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("“text“name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Name"')]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Date:")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h1",{attrs:{id:"多益网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多益网络"}},[t._v("#")]),t._v(" 多益网络")]),t._v(" "),a("ul",[a("li",[t._v("图片格式都有哪些，优缺点")]),t._v(" "),a("li",[t._v("email的正则表达式")]),t._v(" "),a("li",[t._v("URL和URI的区别\n"),a("ul",[a("li",[t._v("URI是抽象的名词，有URN和URL两种，只不过URN没有流行起来，所以平常见到的URI都是URL")])])]),t._v(" "),a("li",[t._v("link和@import的区别")]),t._v(" "),a("li",[t._v("安卓webview中滚动容器设置___属性能够使得出现的滚动条滚动得像IOS元素那么流畅？(不会)")]),t._v(" "),a("li",[t._v("服务端和浏览器对传输的纯文本文件做_____处理后，可有效减少文本大小，甚至可以压缩到原来大小的20%  (gzip?不确定)")]),t._v(" "),a("li",[t._v("如何比较a+b的计算结果等于c？ (均为浮点数且小数点后的位数不确定)    parseFloat.toFixed()")]),t._v(" "),a("li",[t._v("如何用js判断，一个字符串中是否包含某一个子串")]),t._v(" "),a("li",[t._v("CSS刮刮乐效果 (非canvas，user-select？)")])]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先把a,b两个数字都变成字符串")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stra "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" strb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取小数位数")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// indexOf('.')==-1  就是说明这个字符串中没有点，也就是没有小数")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//stra.length -stra.indexOf('.')-1   的意思是用stra字符串的长度减去找到点的位置的索引再减去1（因为length会比index大1）就是小数点后面的长度")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lena "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lenb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("strb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过Math的max方法求这两个里面哪个的小数点后面的位数更长，因为根据示例，保留的是长度更长的那一个数字后面的位数")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lena"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("lenb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过parseFloat将字符串转换为浮点型数字，再通过toFixed决定保留小数位的长度")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h3",{attrs:{id:"编程题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程题"}},[t._v("#")]),t._v(" 编程题")]),t._v(" "),a("ol",[a("li",[t._v("实现一个函数getType，能够识别所有类型的数据，例如RegExp, Set集合 Null")]),t._v(" "),a("li",[t._v("实现Instanceof")])]),t._v(" "),a("h1",{attrs:{id:"_360"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_360"}},[t._v("#")]),t._v(" 360")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '1,2,3,4'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false  引用类型，地址不相等")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\nobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a:1")]),t._v("\n\nobj是函数内部的一个形参，传递是obj的引用，obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a修改引用对象的值，\n而后面重新给obj赋值，这时候obj丢失了对传入对象的引用。引用了一个新的对象。后面的obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b是修改新对象的\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("h2",{attrs:{id:"计网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计网"}},[t._v("#")]),t._v(" 计网")]),t._v(" "),a("p",[a("strong",[t._v("客户端http协议向服务器发送一个请求报文，报文组成中不包含的是:")]),t._v("()")]),t._v(" "),a("p",[t._v("A. 请求行")]),t._v(" "),a("p",[t._v("B. 请求正文")]),t._v(" "),a("p",[t._v("C. 请求数据")]),t._v(" "),a("p",[t._v("D. 空行")]),t._v(" "),a("h3",{attrs:{id:"邮件协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邮件协议"}},[t._v("#")]),t._v(" 邮件协议")]),t._v(" "),a("p",[t._v("pop3和smtp，pop可以客户端离线接受")]),t._v(" "),a("p",[a("strong",[t._v("发送方进程在收到接受方的报文段确认数据时，滑动窗口会发生那种变化？")]),t._v("()")]),t._v(" "),a("p",[t._v("A. 窗口收缩")]),t._v(" "),a("p",[t._v("B. 窗口合拢")]),t._v(" "),a("p",[t._v("C. 窗口张开")]),t._v(" "),a("p",[t._v("D. 都不对 ？")]),t._v(" "),a("p",[a("strong",[t._v("小李通过Internet给小王传输文件，为了保证文件的机密性，加密该文件的密钥是()")])]),t._v(" "),a("p",[t._v("A. 小李的私钥")]),t._v(" "),a("p",[t._v("B. 小李的公钥")]),t._v(" "),a("p",[t._v("C. "),a("strong",[t._v("小王")]),t._v("的私钥")]),t._v(" "),a("p",[t._v("D. "),a("strong",[t._v("小王")]),t._v("的公钥")]),t._v(" "),a("h2",{attrs:{id:"离线缓存manifest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线缓存manifest"}},[t._v("#")]),t._v(" 离线缓存manifest")]),t._v(" "),a("ul",[a("li",[t._v("Network")]),t._v(" "),a("li",[t._v("Cache Manifest")]),t._v(" "),a("li",[t._v("Fallback")])]),t._v(" "),a("p",[a("strong",[t._v("manifest 文件可分为三个部分：")])]),t._v(" "),a("p",[t._v("CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存：")]),t._v(" "),a("ul",[a("li",[t._v("CACHE MANIFEST -文件申明")]),t._v(" "),a("li",[t._v("CACHE- 需要缓存的文件。需要相对路径")])]),t._v(" "),a("p",[t._v("NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存\nFALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/31d3c22c-ad32-47bb-9851-72c6823cd5bd/WeChat0eef41b0b37de94bcc7845adf99c714a.png",alt:"WeChat0eef41b0b37de94bcc7845adf99c714a.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8647c7ad-286b-4575-b630-05df402a45c8/WeChatf7debe90f66ce5b45cc61dc5f36cf951.png",alt:"WeChatf7debe90f66ce5b45cc61dc5f36cf951.png"}})]),t._v(" "),a("h1",{attrs:{id:"cvte笔试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cvte笔试"}},[t._v("#")]),t._v(" CVTE笔试")]),t._v(" "),a("ul",[a("li",[t._v("状态码206  断点续传   ————部分内容。服务器成功处理了部分GET请求")]),t._v(" "),a("li",[t._v("状态码301 永久重定向 ————浏览器会自动定向到新URI")]),t._v(" "),a("li",[t._v("状态码302  临时重定向 ———- 客户端应继续使用原有URI")])]),t._v(" "),a("p",[t._v("好多node的，没录屏记不住了")]),t._v(" "),a("p",[t._v("编程题")]),t._v(" "),a("p",[t._v("1.url参数转换成json    www.example.com?x=1&y=2&y=3&y=4&z=5  ⇒  {x:1,y:[2,3,4],z:5}")]),t._v(" "),a("p",[t._v("2.rgba转换成十六进制和透明度 rgba(255,255,255,0.4) ⇒  [’#ffffff’, ’0.4’]")]),t._v(" "),a("h1",{attrs:{id:"_4399"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4399"}},[t._v("#")]),t._v(" 4399")]),t._v(" "),a("p",[t._v("Map 和 Object的区别，二维键值对数组[[”key1”,”value1”],[”key2”,”value2”]] 如何与Map对象相互转换")]),t._v(" "),a("h2",{attrs:{id:"编程题-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程题-2"}},[t._v("#")]),t._v(" 编程题")]),t._v(" "),a("p",[t._v("1.假设有1个整数数组arr ， 数组刚好有2个数组项只出现一次，其余所有项都会出现2此，找出只出现一次的那2个数组项   输入 arr[1,2,1,3,2,5]  ⇒  [3.5]   ,[5,3]也是正确的")]),t._v(" "),a("ol",[a("li",[t._v("将一维数组arr1按照整数len的长度分割为二维数组，  输入splitArray([1,2,3,4,5,6],2) ⇒ [[1,2],[3,4],[5,6]]")]),t._v(" "),a("li",[t._v("手机号码每3号 加 ‘-’ 分割， 输入123456 →  123-456   123→123  12345678910→123-456-78910")])]),t._v(" "),a("h1",{attrs:{id:"cvte-其他人的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cvte-其他人的"}},[t._v("#")]),t._v(" CVTE(其他人的)")]),t._v(" "),a("ul",[a("li",[t._v("token和cookie的区别")]),t._v(" "),a("li",[t._v("token的作用，一刷新就不见了，怎么办")]),t._v(" "),a("li",[t._v("sameSite cookie有哪一些值")]),t._v(" "),a("li",[t._v("CSRF，如何预防？")]),t._v(" "),a("li",[t._v("同源的页面可不可以访问cookie")]),t._v(" "),a("li",[t._v("postMessage，具体说说如何用它实现页面与页面之间的通信")]),t._v(" "),a("li",[t._v("postMessage有什么安全性问题么")]),t._v(" "),a("li",[t._v("flex实现圣杯布局")]),t._v(" "),a("li",[t._v("vue react区别，diff上说vue更好为什么")]),t._v(" "),a("li",[t._v("cdn怎么针对很多api优化")]),t._v(" "),a("li",[t._v("promise.then实现")]),t._v(" "),a("li",[t._v("上拉加载和下拉刷新怎么实现")]),t._v(" "),a("li",[t._v("子组件和父组件生命周期的顺序")]),t._v(" "),a("li",[t._v("webpack的loader和plugin的区别，file-loader和url-loader的区别")]),t._v(" "),a("li",[t._v("上传文件的功能（断点续传）")])]),t._v(" "),a("h2",{attrs:{id:"token和cookie、session的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token和cookie、session的区别"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/xiatian666/p/14323614.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("token和cookie、session的区别"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("1、session是有服务器生成，暂时保存在服务器上对客户端进行识别的会话身份标识，链接断开则session注销。")]),t._v(" "),a("p",[t._v("2、cookie是储存在客户端上，在于服务器交互的时候用于认证的类似于身份证的标识，链接断开则服务器上的cookie注销。")]),t._v(" "),a("p",[t._v("3、token是服务器生成，用于简化服务器进行客户端用户密码对比的根据用户信息数据库的密码用户名来生成的长时间标识（用于减轻服务器每次都需要逐个对比数据库中用户名和密码的负担），储存在服务器上，链接断开，token继续储存在服务器上。")]),t._v(" "),a("p",[t._v("之间的关系：")]),t._v(" "),a("p",[t._v("session一般是基于cookie生成，")]),t._v(" "),a("p",[t._v("token可以包含在cookie中，token可以绑定在session中作用：")]),t._v(" "),a("p",[t._v("将token绑定在session中，在交互是对比token是否为session中的token可避免大多数逻辑漏洞以及csrf等")])])}),[],!1,null,null,null);s.default=e.exports}}]);