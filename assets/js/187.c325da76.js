(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{708:function(t,s,n){"use strict";n.r(s);var a=n(13),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"nexttick"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[t._v("#")]),t._v(" $nextTick")]),t._v(" "),n("blockquote",[n("p",[t._v("一次完整的DOM更新称为Tick，nextTick也就是在下次DOM更新循环j结束之后执行延迟回调，常用于修改数据后获取更新后的DOM。")])]),t._v(" "),n("p",[t._v("vue实现响应式并不是数据发生变化后dom立即变化，而是按照一定的策略来进行dom更新。"),n("code",[t._v("$nextTick")]),t._v(" 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM。这就是nextTick")]),t._v(" "),n("p",[t._v("其实就是运用异步锁的的概念，保证同一时刻任务队列只有一个flushCallbacks，当pending为false的时候，表示浏览器任务队列中没有flushCallbacks函数，当pending为true的时候，表示浏览器任务队列中已经放入flushCallbacks，待执行flushCallbacks函数时，pending为被再次置位false，表示下一个flushCallbacks可进入任务队列，环境能力检测选择可选中效率最高的(宏任务/微任务)进行包装执行，保证是在同步代码都执行完成后，再去执行修改DOM等操作，flushcallbacks先拷贝再清空，为了防止nextTick嵌套mextTick导致循环不结束")]),t._v(" "),n("p",[n("strong",[t._v("$nextTick的源码: vue/src/core/util/next-tick.js")])]),t._v(" "),n("h2",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextTick"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代码写在nextTick里面")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);