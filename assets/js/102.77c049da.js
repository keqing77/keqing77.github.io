(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{611:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"首先为什么需要模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先为什么需要模块化"}},[s._v("#")]),s._v(" 首先为什么需要模块化？")]),s._v(" "),a("p",[s._v("JS一开始并没有模块化的概念，但随着程序越来越复杂，为了降低不同程序之间的耦合度以及提升开发效率，代码的模块化开发变得尤为重要。")]),s._v(" "),a("h3",{attrs:{id:"没有模块化-会出现什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有模块化-会出现什么问题"}},[s._v("#")]),s._v(" 没有模块化，会出现什么问题？")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("全局作用域被污染")]),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("开发人员必须手动解决模块依赖关系（顺序）。")])]),s._v(" "),a("li",[a("strong",[s._v("同步远程加载过多的文件，也会造成严重的页面性能问题。")])]),s._v(" "),a("li",[a("strong",[s._v("在大型，多人合作项目中，会导致整体架构混乱")])])]),s._v(" "),a("h3",{attrs:{id:"未整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未整理"}},[s._v("#")]),s._v(" 未整理")]),s._v(" "),a("p",[s._v("CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用 2: CommonJS 模块是运行时加载，ES6 模块是编译时输出接口 3: CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段")]),s._v(" "),a("h3",{attrs:{id:"模块化的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化的实现"}},[s._v("#")]),s._v(" 模块化的实现:")]),s._v(" "),a("p",[s._v("现在大多是用立即执行函数的写法，通过利用闭包来实现私有作用域的建立")]),s._v(" "),a("h3",{attrs:{id:"模块化的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化的方案"}},[s._v("#")]),s._v(" 模块化的方案:")]),s._v(" "),a("p",[s._v("目前主流的是4种，浏览器采用ESmodule ，node采用CommonJS，AMD和CMD是历史方案，")]),s._v(" "),a("ul",[a("li",[s._v("ESmodule，使用 import 和 export 的形式来导入导出模块， 现在浏览器的主流方案。")]),s._v(" "),a("li",[s._v("CommonJS 方案，通过 require 来引入模块，通过 module.exports 定义模块的输出接口。"),a("strong",[s._v("CommonJs 是 Node服务器端独有的规范，浏览器中使用就需要用到 Browserify 解析了")]),s._v("。\n服务器端是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，读取非常快，同步加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。")]),s._v(" "),a("li",[s._v("AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范。")]),s._v(" "),a("li",[s._v("CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和 require.js的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。")])]),s._v(" "),a("h3",{attrs:{id:"amd-require-js-全部加载-和-cmd-sea-js-用时加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd-require-js-全部加载-和-cmd-sea-js-用时加载"}},[s._v("#")]),s._v(" AMD   require.js 全部加载 和 CMD  sea.js  用时加载")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// AMD")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载模块完毕可以使用")]),s._v("\n  a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// CMD")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加载模块")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以把 require 写在函数体的任意地方实现延迟加载")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("各种对象原型方法")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);