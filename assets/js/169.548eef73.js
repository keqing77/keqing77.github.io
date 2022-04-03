(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{777:function(s,n,t){"use strict";t.r(n);var a=t(14),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#登录服务器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" 用户名@ip地址\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" PID / "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" PID\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1是正常杀死，9是强制杀死进程")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp上传文件到远程服务器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -P port -r /local/dir username@servername:/remote/dir\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp -r ./ root@167.23.25.41:/home")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从远程服务器下载文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -P port -r username@servername:/remote/dir/ /local/dir\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp -r root@167.23.25.41:/home ./")]),s._v("\n\n\nvi/vim 文件名 \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编辑文件(没有会创建新文件)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" 文件名 \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看某个文件的内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" 文件名\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新建某个文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h2",{attrs:{id:"linux目录和文件颜色含义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux目录和文件颜色含义"}},[s._v("#")]),s._v(" Linux目录和文件颜色含义")]),s._v(" "),t("blockquote",[t("p",[s._v("可以使用tree查看项目结构")])]),s._v(" "),t("div",{staticClass:"theorem"},[t("p",{staticClass:"title"},[s._v("THEOREM")]),t("p",[s._v("常用目录的作用如下：\nbin： 存放普通用户可执行的指令，普通用户也可以执行；\ndev ： 设备目录，所有的硬件设备及周边均放置在这个设备目录中；\nboot ： 开机引导目录，包括 Linux 内核文件与开机所需要的文件；\nhome： 这里主要存放你的个人数据，具体每个用户的设置文件，用户的桌面文件夹，还有用户的数据都放在这里。每个用户都有自己的用户目录，位置为：/home/用户名。当然，root 用户除外；\nusr： 应用程序放置目录；\nlib： 开机时常用的动态链接库，bin 及 sbin 指令也会调用对应的 lib 库；\ntmp： 临时文件存放目录 ；\netc： 各种配置文件目录，大部分配置属性均存放在这里；")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("蓝色 表示文件夹；\n灰色 表示普通文件；\n绿色 表示可执行文件；\n红色 表示压缩文件；\n天蓝色 表示链接文件（快捷方式")])]),s._v(" "),t("h2",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),t("blockquote",[t("p",[s._v("Nginx功能")])]),s._v(" "),t("ul",[t("li",[s._v("图片防盗链")]),s._v(" "),t("li",[s._v("反向代理跨域")]),s._v(" "),t("li",[s._v("负载均衡")]),s._v(" "),t("li",[s._v("请求过滤")]),s._v(" "),t("li",[s._v("动静分离")])]),s._v(" "),t("div",{staticClass:"theorem"},[t("p",{staticClass:"title"},[s._v("THEOREM")]),t("ul",[t("li",[s._v("/etc/nginx/nginx.conf 主配置文件会默认把这个文件夹中所有子配置项都引入")]),s._v(" "),t("li",[s._v("/etc/nginx/conf.d/ 文件夹，是我们进行子配置的配置项存放处，")]),s._v(" "),t("li",[s._v("/usr/share/nginx/html/ 文件夹，通常静态文件都放在这个文件夹，也可以根据你自己的习惯放其他地方；")])])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装niginx")]),s._v("\nyum list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\nnginx -v\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动 Nginx ")]),s._v("\nsystemctl start nginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nginx开机自启")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启nginx")]),s._v("\nnginx -s reload \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置Nginx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/nginx/nginx.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nginx反向代理解决跨域")]),s._v("\nlocation /api "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tproxy_pass 跨域地址的baseURL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启Gzip压缩")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/nginx/conf.d/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" gzip.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" gzip.con\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认off，是否开启gzip")]),s._v("\ngzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);