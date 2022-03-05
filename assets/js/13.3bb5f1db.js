(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{507:function(s,a,t){s.exports=t.p+"assets/img/zsh.a199f9e9.png"},508:function(s,a,t){s.exports=t.p+"assets/img/windows_terminal.ea68c34b.png"},672:function(s,a,t){"use strict";t.r(a);var e=t(13),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"终端篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#终端篇"}},[s._v("#")]),s._v(" 终端篇")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("高颜值的命令行")]),s._v(" "),e("p",[s._v("在Linux/MacOS/WSL(windows Subsystem for Linux)下使用 "),e("code",[s._v("on my zsh")]),s._v(" + "),e("code",[s._v("spaceship")]),s._v("主题 + "),e("code",[s._v("powerline")]),s._v("字体 打造完美终端体验")])]),s._v(" "),e("ol",[e("li",[s._v("查看当前系统的 shell")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("查看系统安装的 shell")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shells\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("安装 zsh")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#linux/maco 安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# WSL（ubuntu） 安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看zsh版本，出来即成功")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" --version \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("安装失败")]),s._v(" "),e("p",[s._v("如果这里遇到错误："),e("strong",[s._v("curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused")])]),s._v(" "),e("p",[s._v("那是因为github 被墙了。解决方法是手动将该脚本保存至本地目录，然后执行该脚本。或者使用gitee仓库的脚本。")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("切换终端为zsh")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("chsh -s/bin/zsh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("zsh配置文件")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[s._v("切换终端为zsh")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"powerline字体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#powerline字体"}},[s._v("#")]),s._v(" powerline字体")]),s._v(" "),e("p",[s._v("这个是要给系统安装字体的，过程很快，详情参考仓库地址"),e("a",{attrs:{href:"https://github.com/powerline/powerline",target:"_blank",rel:"noopener noreferrer"}},[s._v("powerline"),e("OutboundLink")],1)]),s._v(" "),e("ul",[e("li",[s._v("我编程字体喜欢用jet brain家的"),e("code",[s._v("jetbrain Mono")])]),s._v(" "),e("li",[s._v("终端字体使用"),e("code",[s._v("powerline")]),s._v("，")]),s._v(" "),e("li",[s._v("MacOS下使用的软件是item2")]),s._v(" "),e("li",[s._v("Win下使用的是Windows Terminal(WSL)，")]),s._v(" "),e("li",[s._v("wsl的mnt目录就是你本机的磁盘目录，我在windows上的开发工作也几乎用WSL完成。"),e("strong",[s._v("吹爆WSL")])])]),s._v(" "),e("h2",{attrs:{id:"spaceship主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spaceship主题"}},[s._v("#")]),s._v(" spaceship主题")]),s._v(" "),e("ol",[e("li",[s._v("克隆仓库")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/spaceship-prompt/spaceship-prompt.git "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH_CUSTOM")]),s._v('/themes/spaceship-prompt"')]),s._v(" --depth"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("软连接目录到本地克隆仓库")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH_CUSTOM")]),s._v('/themes/spaceship-prompt/spaceship.zsh-theme"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH_CUSTOM")]),s._v('/themes/spaceship.zsh-theme"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3.配置zshrc文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑zshrc文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZSH_THEME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spaceship"')]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置zsh主题为spaceship")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("zshrc配置其他可玩性高的\n可以配置很多东西，如git命令别名(简写)等等，有空再补充。。。")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gc")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git clone'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gs")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git status'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gd")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git diff'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ga")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git add .'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gcm")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git commit -m'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gb")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git branch'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gba")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git branch -a'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gp")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git pull'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpu")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git push'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git log'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"我的高颜值终端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我的高颜值终端"}},[s._v("#")]),s._v(" 我的高颜值终端")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Mac & Linux")]),s._v(" "),e("br")]),s._v(" "),e("p",[e("img",{attrs:{src:t(507),alt:""}})]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("windows")]),s._v(" "),e("br")]),s._v(" "),e("p",[e("img",{attrs:{src:t(508),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"github仓库和安装教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github仓库和安装教程"}},[s._v("#")]),s._v(" Github仓库和安装教程")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("ohmyzsh"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/spaceship-prompt/spaceship-prompt",target:"_blank",rel:"noopener noreferrer"}},[s._v("Spaceship ZSH"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/powerline/powerline",target:"_blank",rel:"noopener noreferrer"}},[s._v("powerline"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);