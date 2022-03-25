(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{749:function(s,t,e){"use strict";e.r(t);var a=e(14),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"本站搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本站搭建"}},[s._v("#")]),s._v(" 本站搭建")]),s._v(" "),e("p",[s._v("本站采用的VuePress搭建的，是一个基于Vue驱动的静态网站生成器，如果你之前使用过Hexo部署过网站，那么你应该不会感到陌生。什么是静态网站，静态和动态的区别就是有没有链接数据库和后台，静态网站简单地来说，就是将你的本地MarkDown文件渲染生成HTML文件发布上线，可以部署在Github Pages上，你只需要编写MD文件，然后将打包后的dist文件夹推送至服务器部署即可，你还可以通过编写deploy.sh等shell脚本来减轻每次发布的工作量("),e("strong",[s._v("window无法直接运行shell脚本，可以在Git bash中运行")]),s._v(")，当然还有各种CI工具来做自动化部署，就不要每次重新生成推送了。\n使用"),e("code",[s._v("VuePress(生成) + Github Pages(托管) + Github Actions(自动部署)")]),s._v("意味着你可以完全免费拥有一个强大性能的个人网站，这不香吗？")]),s._v(" "),e("h2",{attrs:{id:"为什么是vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么是vuepress"}},[s._v("#")]),s._v(" 为什么是VuePress")]),s._v(" "),e("blockquote",[e("p",[s._v("(别问为什么没百度。因为github禁止百度爬取)")])]),s._v(" "),e("p",[e("strong",[s._v("我看中它是因为它SEO是做得比较好的，意味着只要我运营得当，在谷歌首页搜索是可以做到第一条就出来的")]),s._v("，当然如果单论SEO的话，Nuxt无疑是更好的选择，但是只是做个人站有点大材小用了。至于其他生成器的选择，诸如Gitbook、Docsify..等等，都是差不多的，gitbook个人也尝试过，切换加载速度太慢了...Docsify也是基于Vue的，但没SEO，权衡下我觉得最好的选择就是VuePress。")]),s._v(" "),e("h2",{attrs:{id:"为什么不是vitepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是vitepress"}},[s._v("#")]),s._v(" 为什么不是VitePress")]),s._v(" "),e("p",[s._v("两者之间的区别主要是VitePress使用Vue3+Vite代替Vue2+Webpack ; 开发体验和写作体验更上一层，Vite，打包快如闪电！后续很可能会迁移至VitePress, 重构计划也在进行中....")]),s._v(" "),e("h2",{attrs:{id:"搭建困难吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建困难吗"}},[s._v("#")]),s._v(" 搭建困难吗？")]),s._v(" "),e("p",[s._v("一点也不，如果你之前搭建过Hexo等静态生成器网站，那么VuePress也是类似的，十分钟即可搭建部署上线。搭建过程可以参考"),e("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress官方文档"),e("OutboundLink")],1),s._v("或者本文下面的步骤，当然官方的例子不是开箱即用的，搭建后应该只有搜索框😭。需要你手动去开发配置，如导航栏菜单栏等，但只需要你懂点JS，很快就弄出一个网站的骨架，当然如果你懂vue那更好办了，毕竟vuePress就是一个vue应用。当然如果你只是想白嫖，那么我也准备了一个开箱即用的模板，克隆这个仓库到本地，直接编写MD文件，你也可以根据我的配置修改来满足你个人需求。")]),s._v(" "),e("h2",{attrs:{id:"vuepress介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress介绍"}},[s._v("#")]),s._v(" VuePress介绍")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("摘自VuePress官网")]),s._v(" "),e("br")]),s._v(" "),e("p",[s._v("VuePress 由两部分组成：\n第一部分是一个极简静态网站生成器 ，它包含由 Vue 驱动的主题系统和插件 API，\n另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。 每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。")]),s._v(" "),e("h2",{attrs:{id:"它是如何工作的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的"}},[s._v("#")]),s._v(" 它是如何工作的？")]),s._v(" "),e("p",[s._v("一个 VuePress 网站是一个由 Vue、Vue Router 和 webpack 驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。 在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 Nuxt 的 nuxt generate 命令。")]),s._v(" "),e("h2",{attrs:{id:"搭建步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建步骤"}},[s._v("#")]),s._v(" 搭建步骤")]),s._v(" "),e("p",[e("strong",[s._v("开箱即用的VuePress模板仓库地址：")]),s._v(" "),e("a",{attrs:{href:"https://github.com/lalalavard/vuepress_template/tree/main",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress模板"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"创建并运行部署vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建并运行部署vuepress"}},[s._v("#")]),s._v(" 创建并运行部署VuePress")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1.创建并进入一个新目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" vuepress-starter "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vuepress-starter\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.使用你喜欢的包管理器进行初始化")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm init")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3.-D将 VuePress 安装为本地依赖，官方不再推荐全局安装VuePress")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D vuepress")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#注意如果你的现有项目依赖了 webpack 3.x，我们推荐使用 Yarn 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4.创建你的第一篇文档并写入Hello VuePress")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#5.在 package.json 中添加一些 scripts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs:dev"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),s._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs:build"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#6.在本地启动服务器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:dev "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run docs:dev")]),s._v("\n\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("VuePress 会在 "),e("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080"),e("OutboundLink")],1),s._v(" 启动一个热重载的开发服务器,这意味着你直接编写MarkDown文件，服务器是自动重载渲染内容的，无需手动重启。启动后你会发现这是一个干净到不能再干净的项目，如果你想配置导航栏和菜单栏以及其他等都需要自己手动配置编写js文件，建议参考官网，如果你懒得话我上面也放了一个开箱即用的VuePress模板，酌情自取。")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("需要手动重启的情况")]),s._v(" "),e("p",[s._v("如果你修改了路由(导航栏等)以及配置文件等，那么是需要手动重启的，有木有感觉在开发Vue😄")])])])}),[],!1,null,null,null);t.default=r.exports}}]);