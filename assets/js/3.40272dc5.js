(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{507:function(t,e,n){},518:function(t,e){t.exports=function(t){return null==t}},519:function(t,e,n){},520:function(t,e,n){},521:function(t,e,n){},522:function(t,e,n){},523:function(t,e,n){},524:function(t,e,n){},530:function(t,e,n){"use strict";n.r(e);n(156),n(9);var a=n(504),i={name:"SidebarGroup",components:{DropdownTransition:n(532).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(530).default},methods:{isActive:a.e}},s=(n(548),n(14)),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(266),n(29),n(88),n(89);function o(t,e,n,a,i){var s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:a,"sidebar-link":!0}};return i>2&&(s.style={"padding-left":i+"rem"}),t("RouterLink",s,n)}function l(t,e,n,i,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(a.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,n,i,s,r+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,s=(n.$site,n.$route),r=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,d=u.item,p=u.sidebarDepth,h=Object(a.e)(s,d.path),f="auto"===d.type?h||d.children.some((function(t){return Object(a.e)(s,d.basePath+"#"+t.slug)})):h,m="external"===d.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,d.path,d.title||d.path):o(t,d.path,d.title||d.path,f),v=[i.frontmatter.sidebarDepth,p,c.sidebarDepth,r.sidebarDepth,1].find((function(t){return void 0!==t})),b=c.displayAllHeaders||r.displayAllHeaders;return"auto"===d.type?[m,l(t,d.children,d.basePath,s,v)]:(f||b)&&d.headers&&!a.d.test(d.path)?[m,l(t,Object(a.c)(d.headers),d.path,s,v)]:m}};n(549);function u(t,e){if("group"===e.type){var n=e.path&&Object(a.e)(t,e.path),i=e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(a.e)(t,e.path)}));return n||i}return!1}var d={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var a=e[n];if(u(t,a))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(a.e)(this.$route,t.regularPath)}}},p=Object(s.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,a){return n("li",{key:a},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:a===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(a)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},533:function(t,e,n){t.exports=n(534)},534:function(t,e){var n,a,i,s,r,o,l,c=!1,u=[];"undefined"!=typeof document&&(s=function(t){return c||"interactive"===document.readyState||"complete"===document.readyState?t.call(document):u.push((function(){return t.call(this)})),this},o=function(){for(var t=0,e=u.length;t<e;t++)u[t].apply(document);u=[]},l=function(){c||(c=!0,o.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",l,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",l),window==window.top&&(clearInterval(r),r=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",l,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){/loaded|complete/.test(document.readyState)&&l()})),window==window.top&&(r=setInterval((function(){try{c||document.documentElement.doScroll("left")}catch(t){return}l()}),5)))),n={fetch:function(t,e){var n="BusuanziCallback_"+Math.floor(1099511627776*Math.random());t=t.replace("=BusuanziCallback","="+n),(i=document.createElement("SCRIPT")).type="text/javascript",i.defer=!0,i.src=t,document.getElementsByTagName("HEAD")[0].appendChild(i),window[n]=this.evalCall(e)},evalCall:function(t){return function(e){s((function(){try{t(e),i&&i.parentElement&&i.parentElement.removeChild&&i.parentElement.removeChild(i)}catch(t){console.log(t),a.hides()}}))}}};const d=()=>{a&&a.hides(),n.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",(function(t){a.texts(t),a.shows()}))};a={bszs:["site_pv","page_pv","site_uv"],texts:function(t){this.bszs.map((function(e){var n=document.getElementById("busuanzi_value_"+e);n&&(n.innerHTML=t[e])}))},hides:function(){this.bszs.map((function(t){var e=document.getElementById("busuanzi_container_"+t);e&&(e.style.display="none")}))},shows:function(){this.bszs.map((function(t){var e=document.getElementById("busuanzi_container_"+t);e&&(e.style.display="inline")}))}},"undefined"!=typeof document&&d(),t.exports={fetch:d}},535:function(t,e,n){"use strict";n(507)},544:function(t,e,n){"use strict";n(519)},545:function(t,e,n){var a=n(68),i=n(34),s=n(56);t.exports=function(t){return"string"==typeof t||!i(t)&&s(t)&&"[object String]"==a(t)}},546:function(t,e,n){"use strict";n(520)},547:function(t,e,n){"use strict";n(521)},548:function(t,e,n){"use strict";n(522)},549:function(t,e,n){"use strict";n(523)},550:function(t,e,n){"use strict";n(524)},604:function(t,e,n){"use strict";n.r(e);var a=n(506),i=(n(533),{name:"Home",components:{NavLink:a.a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}}),s=(n(535),n(14)),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return n("div",{key:a,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,o=n(529),l=(n(29),n(88),n(65),n(518)),c=n.n(l),u=n(504),d={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=c()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,a=e.docsDir,i=void 0===a?"":a,s=e.docsBranch,r=void 0===s?"master":s,o=e.docsRepo,l=void 0===o?n:o;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,i,r,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,a,i){if(/bitbucket.org/.test(e))return e.replace(u.a,"")+"/src"+"/".concat(a,"/")+(n?n.replace(u.a,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(a,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(u.a,"")+"/-/edit"+"/".concat(a,"/")+(n?n.replace(u.a,"")+"/":"")+i:(u.i.test(e)?e:"https://github.com/".concat(e)).replace(u.a,"")+"/edit"+"/".concat(a,"/")+(n?n.replace(u.a,"")+"/":"")+i}}},p=(n(544),Object(s.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),h=n(545),f=n.n(h),m={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return b(v.PREV,this)},next:function(){return b(v.NEXT,this)}}};var v={NEXT:{resolveLink:function(t,e){return g(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return g(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function b(t,e){var n=e.$themeConfig,a=e.$page,i=e.$route,s=e.$site,r=e.sidebarItems,o=t.resolveLink,l=t.getThemeLinkConfig,d=t.getPageLinkConfig,p=l(n),h=d(a),m=c()(h)?p:h;return!1===m?void 0:f()(m)?Object(u.k)(s.pages,m,i.path):o(a,r)}function g(t,e,n){var a=[];!function t(e,n){for(var a=0,i=e.length;a<i;a++)"group"===e[a].type?t(e[a].children||[],n):n.push(e[a])}(e,a);for(var i=0;i<a.length;i++){var s=a[i];if("page"===s.type&&s.path===decodeURIComponent(t.path))return a[i+n]}}var _=m,k=(n(546),{components:{PageEdit:p,PageNav:Object(s.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),C=(n(547),Object(s.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),x=n(530),L=n(531),$={name:"Sidebar",components:{SidebarLinks:x.default,NavLinks:L.a},props:["items"]},y=(n(550),{name:"Layout",components:{Home:r,Page:C,Sidebar:Object(s.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:o.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(u.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),S=Object(s.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom"),t._v(" "),n("Vssue",{staticClass:"theme-default-content content_default",attrs:{options:{locale:"zh"}}})]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=S.exports}}]);