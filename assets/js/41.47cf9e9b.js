(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{612:function(t,s,a){"use strict";a.r(s);var e=a(14),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css面试题"}},[t._v("#")]),t._v(" CSS面试题")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#盒子模型"}},[t._v("盒子模型")])]),a("li",[a("a",{attrs:{href:"#垂直水平居中的方式"}},[t._v("垂直水平居中的方式")])]),a("li",[a("a",{attrs:{href:"#清除浮动"}},[t._v("清除浮动")])]),a("li",[a("a",{attrs:{href:"#z-index"}},[t._v("z-index")])]),a("li",[a("a",{attrs:{href:"#bfc"}},[t._v("BFC")])]),a("li",[a("a",{attrs:{href:"#实现0-5px的线-scale"}},[t._v("实现0.5px的线 scale")])]),a("li",[a("a",{attrs:{href:"#单位的区别px-em-rem-vw-vh-vmin-vmax-ch-ex等等"}},[t._v("单位的区别px em rem vw/vh vmin vmax ch/ex等等")])]),a("li",[a("a",{attrs:{href:"#选择器和优先级"}},[t._v("选择器和优先级")])]),a("li",[a("a",{attrs:{href:"#隐藏元素的方法有哪些-区别"}},[t._v("隐藏元素的方法有哪些？区别？")])]),a("li",[a("a",{attrs:{href:"#移动端适配方案"}},[t._v("移动端适配方案")])]),a("li",[a("a",{attrs:{href:"#图片格式的区别"}},[t._v("图片格式的区别")])]),a("li",[a("a",{attrs:{href:"#伪类和伪元素"}},[t._v("伪类和伪元素")])]),a("li",[a("a",{attrs:{href:"#css实现1个三角形"}},[t._v("CSS实现1个三角形")])]),a("li",[a("a",{attrs:{href:"#上下固定-中间滚动布局如何实现"}},[t._v("上下固定，中间滚动布局如何实现")])]),a("li",[a("a",{attrs:{href:"#三列布局如何实现-圣杯布局-用float或flex呢"}},[t._v("三列布局如何实现(圣杯布局 用Float或Flex呢？)")])]),a("li",[a("a",{attrs:{href:"#flex常用属性、和grid对比"}},[t._v("Flex常用属性、和Grid对比")])]),a("li",[a("a",{attrs:{href:"#媒体查询-响应式页面"}},[t._v("媒体查询，响应式页面")])]),a("li",[a("a",{attrs:{href:"#滚动视差效果实现"}},[t._v("滚动视差效果实现")])]),a("li",[a("a",{attrs:{href:"#动画和过渡区别"}},[t._v("动画和过渡区别")])]),a("li",[a("a",{attrs:{href:"#base64原理和优缺点"}},[t._v("base64原理和优缺点")])]),a("li",[a("a",{attrs:{href:"#css实现刮刮乐效果"}},[t._v("CSS实现刮刮乐效果")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[t._v("#")]),t._v(" 盒子模型")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("盒子模型是说元素是怎么放置的，可以通过设置"),a("code",[t._v("box-model")]),t._v("这个属性")]),t._v(" "),a("li",[t._v("W3C标准盒子模型:  "),a("code",[t._v("width = content")]),t._v(", 也就是默认的盒子模型")]),t._v(" "),a("li",[t._v("IE盒子模型:  "),a("code",[t._v("width = padding, content = border")]),t._v(", 在做响应式页面的时候方便计算经常开启。")])])]),t._v(" "),a("h2",{attrs:{id:"垂直水平居中的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垂直水平居中的方式"}},[t._v("#")]),t._v(" 垂直水平居中的方式")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("水平居中")]),t._v(" "),a("ul",[a("li",[t._v("行内元素: text-align: center;")]),t._v(" "),a("li",[t._v("块级元素:\n"),a("ul",[a("li",[t._v("确定宽度:\n"),a("ul",[a("li",[t._v("margin: 0 auto;")])])]),t._v(" "),a("li",[t._v("未知宽度:\n"),a("ul",[a("li",[t._v("1.display:inline-block && text-align: center;")]),t._v(" "),a("li",[t._v("2.display:flex/grid && justify-content: center;")]),t._v(" "),a("li",[t._v("3.绝对定位+transform: translateX(50%)")])])])])])])]),t._v(" "),a("li",[a("strong",[t._v("垂直居中")]),t._v(" "),a("ul",[a("li",[t._v("line-height 调整行高，适合文字")]),t._v(" "),a("li",[t._v("margin: auto;")]),t._v(" "),a("li",[t._v("父级相对定位+子级绝对定位+transform: translateY(50%)")]),t._v(" "),a("li",[t._v("vertical-align:middle;")]),t._v(" "),a("li",[t._v("flex/grid + align-items: center;")])])])])]),t._v(" "),a("h2",{attrs:{id:"清除浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("p",[t._v("浮动元素会脱离文档流，就和原来的文档不在同一个平面上，导致覆盖其他元素的情况或者父元素高度塌陷等问题。")]),t._v(" "),a("ul",[a("li",[t._v("空标签法-------"),a("code",[t._v('<div style="clear:both"></div>')])]),t._v(" "),a("li",[t._v("父级元素添加"),a("code",[t._v("overflow: hidden")]),t._v(";")]),t._v(" "),a("li",[t._v("伪类------(最推荐的) 加在浮动元素的父元素上")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix:after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("visilbility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"z-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-index"}},[t._v("#")]),t._v(" z-index")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("p",[t._v("CSS全称是层叠样式表，不同的层级有不同的堆叠顺序(七层，可以回去看图)，这时候就会出现一个z-index:9999的元素盖不过z-index:-1的元素，可以开启postion:relative等，只要让它们位于同一层级再设置值就可以了。")])]),t._v(" "),a("h2",{attrs:{id:"bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("p",[t._v("这个东西实在抽象，我不知道怎么去描述它。有点像孙悟空给唐僧画的一个圈，出不去外面的妖怪也进不来😂。BFC元素可以理解成被隔离的区间（"),a("strong",[t._v("BFC的子元素不会对外面的元素产生影响")]),t._v("，面试中被问到大概讲一下"),a("strong",[t._v("BFC的理解和开启条件")]),t._v("就差不多了，也可以阐述"),a("strong",[t._v("BFC可以解决什么问题")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("开启BFC")])]),t._v(" "),a("ul",[a("li",[t._v("根元素(display: flow-root)，我们经常用inline-block开启BFC，实际全程是inline-flow-root")]),t._v(" "),a("li",[t._v("浮动")]),t._v(" "),a("li",[t._v("定位(脱离文档流的)")]),t._v(" "),a("li",[t._v("overflow(除了visible)")]),t._v(" "),a("li",[t._v("网格元素，包括表单单元格，标题，flex/grid 的子元素")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("BFC解决的问题")])]),t._v(" "),a("ul",[a("li",[t._v("BFC是一个独立的容器，里面的元素不会影响的外面的元素，外面的元素也不会影响里面的。")]),t._v(" "),a("li",[t._v("解决父元素高度塌陷")]),t._v(" "),a("li",[t._v("margin重叠")])])])]),t._v(" "),a("div",{staticClass:"theorem"},[a("p",{staticClass:"title"},[t._v("BFC Block Formatting Context又称 **块级格式上下文**")]),a("p",[t._v("BFC是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。")]),t._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"实现0-5px的线-scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现0-5px的线-scale"}},[t._v("#")]),t._v(" 实现0.5px的线 scale")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("p",[t._v("默认最小能设置1px的线，如何实现0.5px的线呢？😅")]),t._v(" "),a("ul",[a("li",[t._v("transform: scale(0.5);")]),t._v(" "),a("li",[t._v("设置viewport 的 initial-scale=0.5")]),t._v(" "),a("li",[t._v("linear-gradient")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".5pxLine")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("-webkit-linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("90deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #000 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"单位的区别px-em-rem-vw-vh-vmin-vmax-ch-ex等等"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单位的区别px-em-rem-vw-vh-vmin-vmax-ch-ex等等"}},[t._v("#")]),t._v(" 单位的区别px em rem vw/vh vmin vmax ch/ex等等")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("px\n"),a("ul",[a("li",[t._v("像素，固定单位")])])]),t._v(" "),a("li",[t._v("em\n"),a("ul",[a("li",[t._v("相对于父元素的字体大小，假如父元素默认16px,子元素和孙子元素都是2em，那么子是32px,孙是64px")])])]),t._v(" "),a("li",[t._v("rem\n"),a("ul",[a("li",[t._v("相对根元素html,更方便计算")])])]),t._v(" "),a("li",[t._v("vw/vh\n"),a("ul",[a("li",[t._v("viewport视窗宽度/宽度的1%,适配移动端")])])]),t._v(" "),a("li",[t._v("vmin/vmax\n"),a("ul",[a("li",[t._v("视窗较小/较大尺寸的1% ，可以做横竖屏切换效果。")])])]),t._v(" "),a("li",[t._v("ch/cw\n"),a("ul",[a("li",[t._v("类似于 em 和 rem, 依赖于当前的字体和字体大小。基于字体的度量单位，依赖于设定的字体")])])])])]),t._v(" "),a("h2",{attrs:{id:"选择器和优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器和优先级"}},[t._v("#")]),t._v(" 选择器和优先级")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("选择器权重优先级")]),t._v(" "),a("ul",[a("li",[t._v("!important > #id > .class = 伪类 > tag标签 = 伪元素")]),t._v(" "),a("li",[t._v("权重分别为 !important(无穷大)   id(1000) 类(10)  标签(1)")])]),t._v(" "),a("div",{staticClass:"theorem"},[a("p",{staticClass:"title"},[t._v("选择器")]),a("ul",[a("li",[t._v("后代选择器\n"),a("ul",[a("li",[t._v("语法 A B (中间是空格)")]),t._v(" "),a("li",[t._v("匹配所有后代")])])]),t._v(" "),a("li",[t._v("子选择器\n"),a("ul",[a("li",[t._v("语法 A > B")]),t._v(" "),a("li",[t._v("直接子元素才会被选择")])])]),t._v(" "),a("li",[t._v("兄弟选择器\n"),a("ul",[a("li",[t._v("语法 A ~ B")]),t._v(" "),a("li",[t._v("后面的所有元素")])])]),t._v(" "),a("li",[t._v("相邻兄弟选择器\n"),a("ul",[a("li",[t._v("语法 A + B")]),t._v(" "),a("li",[t._v("在后面第一个的元素")])])]),t._v(" "),a("li",[t._v("伪类/伪元素选择器\n"),a("ul",[a("li",[t._v("语法 :hover/:visted/p::first-line")]),t._v(" "),a("li",[t._v("太多就不写了，不会可以看"),a("a",{attrs:{href:"https://www.bilibili.com/video/BV1et411K7RU?spm_id_from=333.999.0.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("十分钟上手 CSS Selector"),a("OutboundLink")],1)])])])])])])]),t._v(" "),a("h2",{attrs:{id:"隐藏元素的方法有哪些-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐藏元素的方法有哪些-区别"}},[t._v("#")]),t._v(" 隐藏元素的方法有哪些？区别？")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("display:none;隐藏元素，渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。")])]),t._v(" "),a("li",[a("p",[t._v("visibility:hidden;隐藏元素。元素在页面中仍占据空间，但是不会响应绑定的监听事件。")])]),t._v(" "),a("li",[a("p",[t._v("opacity:0;将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。")])]),t._v(" "),a("li",[a("p",[t._v("通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。")])]),t._v(" "),a("li",[a("p",[t._v("通过 z-index 负值，来使其他元素遮盖住该元素，以此来实现隐藏。")])]),t._v(" "),a("li",[a("p",[t._v("通过 clip/clip-path 元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。")])]),t._v(" "),a("li",[a("p",[t._v("通过 transform:scale(0,0)来将元素缩放为 0，以此来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。")])])])]),t._v(" "),a("h2",{attrs:{id:"移动端适配方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端适配方案"}},[t._v("#")]),t._v(" 移动端适配方案")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("单位使用em/rem布局，更推荐vw/vh布局")]),t._v(" "),a("li",[t._v("百分比布局")]),t._v(" "),a("li",[t._v("响应式布局,配合媒体查询@media-query")]),t._v(" "),a("li",[t._v("图片使用"),a("code",[t._v("srcset")]),t._v("放不同分辨率下的图片，max-width(图片自适应,随着容器的大小进行缩放)")]),t._v(" "),a("li",[t._v("object-fit:cover")])])]),t._v(" "),a("h2",{attrs:{id:"图片格式的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片格式的区别"}},[t._v("#")]),t._v(" 图片格式的区别")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("JPG/JPEG")]),t._v(" "),a("li",[t._v("PNG")]),t._v(" "),a("li",[t._v("GIF")]),t._v(" "),a("li",[t._v("SVG")]),t._v(" "),a("li",[t._v("BMP")]),t._v(" "),a("li",[t._v("WEBP")])])]),t._v(" "),a("h2",{attrs:{id:"伪类和伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类和伪元素"}},[t._v("#")]),t._v(" 伪类和伪元素")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("伪类\n"),a("ul",[a("li",[t._v("选择某个状态下的元素，比如:hover")])])]),t._v(" "),a("li",[t._v("伪元素\n"),a("ul",[a("li",[t._v("创建通常不存在于文档中的元素，比如::before")])])])])]),t._v(" "),a("h2",{attrs:{id:"css实现1个三角形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css实现1个三角形"}},[t._v("#")]),t._v(" CSS实现1个三角形")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("blockquote",[a("p",[t._v("实现方法很多，最常见就是设置border以及为三边设置transparent透明")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px solid #ff0000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"上下固定-中间滚动布局如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上下固定-中间滚动布局如何实现"}},[t._v("#")]),t._v(" 上下固定，中间滚动布局如何实现")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("Flex\n"),a("ul",[a("li",[t._v("父容器开启flex，上下固定高度，中间设置flex：1自适应高度")]),t._v(" "),a("li",[t._v("如果设置中间滚动，而上下不滚动这可以这样 overflow-auto")])])])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"三列布局如何实现-圣杯布局-用float或flex呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三列布局如何实现-圣杯布局-用float或flex呢"}},[t._v("#")]),t._v(" 三列布局如何实现(圣杯布局 用Float或Flex呢？)")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("Float\n"),a("ul",[a("li",[t._v("都设置float:left，左右给固定宽度，中间-margin")])])]),t._v(" "),a("li",[t._v("Flex\n"),a("ul",[a("li",[t._v("父容器开启flex，左右固定一百宽度，中间容器设置flex:1自适应宽度")])])])])]),t._v(" "),a("h2",{attrs:{id:"flex常用属性、和grid对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex常用属性、和grid对比"}},[t._v("#")]),t._v(" Flex常用属性、和Grid对比")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("flex属性有空补充文章及此处，也就那么几个没什么好说的。。")]),t._v(" "),a("li",[t._v("flex是一维的，Grid是二维的。意思就是Flex只能同时控制一行或者一列，而Grid行列都可以控制，有些效果可能需要嵌套多层flex等")]),t._v(" "),a("li",[t._v("flex在多列排布元素对齐上会麻烦点，grid则简单得多，grid更加强大")]),t._v(" "),a("li",[t._v("有空补充grid，非常强大")])])]),t._v(" "),a("h2",{attrs:{id:"媒体查询-响应式页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询-响应式页面"}},[t._v("#")]),t._v(" 媒体查询，响应式页面")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("使用@media 媒体查询通过不同设备/分辨率等应用不同样式，常用于响应式页面")]),t._v(" "),a("li",[t._v("响应式的意思是页面根据大小会变化不同的样式，特别是在现在手机流行的时代，一套代码同时适应PC和Mobile是大势所趋")]),t._v(" "),a("li",[t._v("判断响应式最简单的一条原则: 底部不能出现横向的滚动条")])])]),t._v(" "),a("h2",{attrs:{id:"滚动视差效果实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动视差效果实现"}},[t._v("#")]),t._v(" 滚动视差效果实现")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("通过控制不同背景不同的滚动效果所带来的视觉效果\n"),a("ul",[a("li",[t._v("可以采用background-attachment这个属性")]),t._v(" "),a("li",[t._v("第三方插件，如"),a("a",{attrs:{href:"https://matthew.wagerfield.com/parallax/",target:"_blank",rel:"noopener noreferrer"}},[t._v("parallax.js"),a("OutboundLink")],1)])])])])]),t._v(" "),a("h2",{attrs:{id:"动画和过渡区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画和过渡区别"}},[t._v("#")]),t._v(" 动画和过渡区别")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("ul",[a("li",[t._v("过渡效果开启并生效的原理(很多人不明白的)"),a("a",{attrs:{href:"https://juejin.cn/post/7062507282046648357",target:"_blank",rel:"noopener noreferrer"}},[t._v("你可能并不了解 Transition"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("过渡强调的是"),a("code",[t._v("开始")]),t._v("和"),a("code",[t._v("结束")]),t._v("这两个状态，动画可以设置多个关键帧。")]),t._v(" "),a("li",[t._v("过渡只有一次(除非重复触发)，动画可以多次。")]),t._v(" "),a("li",[t._v("过渡需要事件触发，动画可以自动开启。")])])]),t._v(" "),a("h2",{attrs:{id:"base64原理和优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base64原理和优缺点"}},[t._v("#")]),t._v(" base64原理和优缺点")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("blockquote",[a("p",[t._v("这个背后编码还得后续深入了解一下，我也只是稍稍涉猎而已。")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("图片的base64编码就是将一张图片数据编码成一串字符串，使用该字符串代替图像地址url")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("优缺点")]),t._v(" "),a("ul",[a("li",[t._v("优点\n"),a("ul",[a("li",[t._v("无需额外请求，减少http请求次数")]),t._v(" "),a("li",[t._v("没有跨域问题，无需考虑缓存、文件头或者cookies问题")])])]),t._v(" "),a("li",[t._v("缺点\n"),a("ul",[a("li",[t._v("增加css文件的大小")]),t._v(" "),a("li",[t._v("破坏页面可读性，base64非常长。。。")])])])])])]),t._v(" "),a("h2",{attrs:{id:"css实现刮刮乐效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css实现刮刮乐效果"}},[t._v("#")]),t._v(" CSS实现刮刮乐效果")]),t._v(" "),a("p",[t._v("之前看过用canvas实现的，自己还没做过，先写在这里备忘")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("答案")]),t._v(" "),a("p",[t._v("未完待续...")])])])}),[],!1,null,null,null);s.default=v.exports}}]);