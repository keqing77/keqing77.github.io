---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



:::info 行内元素
- 不能设置宽高, 从左到右排列再换行
- 与其他行内元素并排排列
- 常见行内元素
  - a , button , span , img , em , i , label , select , textarea



:::

:::tip 块状元素
- 独占一行，不能与其他任何元素并列
- 能接受宽高，如果不设置宽度，那么宽度将默认变为父级的100%
- 常见块状元素
  - 标题
    - h1 , h2 , h3 , h4 , h5 , h6
  - 列表
    - ul , ol , dd , dl
  - h5新特性(语义化标签)
    - section , header , footer , video , output , audio , aside
:::


## 语义化标签

> HTML 语义化 - 用正确的标签做正确的事情。

- html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析；即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;

- 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;

- 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

## HTML实体
> 如果你打很多个空格，html都会解析成1个空格，如果你就需要多个空格，这时候你就需要HTML实体了。

:::warning 特殊实体
- `&nbsp`	空格
- `&lt`  	<
- `&gt`	    >
- `&quot`	"
- `&copy`	版权符号C
- `&reg`	注册商标R
- `&amp`	 &
- `&trade`	TM商标
- `&yen`	RMB符号
- `&times`	乘号
- `&divide`	除号
:::


## 表单和输入框
> `form` `input` 是网站中交互占比最多的元素

### 表单
> 前端收集用户信息会用到表单
网页前端展示填写内容,用户填写数据后将本地数据提交给远程服务器

```html
form{
	 width:300px;
      height:300px;
}	
<form action="" method=""></form>
/*在form标签里填写表单组件 */
/*action属性:表单提交的服务器地址 
  method表单提交方式
*/

<form action="" method=""></form>
/*,默认提交的数据都是get方式.还有一种post方式.
	get获取信息(默认)
	post发送信息

  两者没有什么本质上的区别.
 
  get:表单数据会附加在地址栏上
  post:表单数据会包含在服务器的体内发送给服务器
	 
 target提交页面在何处打开
	_self 当前页打开
    _blank 空白页打开
 */

```

### 输入框
> 虽然标签都是`input` , 但是不同的种类作用不同

:::note input

- 文本输入框
  - `<input type="text" value="">`
- 密码输入框
  - `<input type="password" name="password"(密码框名称,提交给后台的信息名) value="用户名"(密码框默认值) maxlength="20"(文本框可输入最多字符) >`
- 按钮
  - `<input type="button" value="按钮">`
  - `<input type="submit" value="提交">` 提交按钮
- 搜索框
  - `<input type="search">`
- 滑块控件
  - `<input type="range" name="" id="">`
- 文件上传
  - ` <input type="file" name="" id="" multiple>`
- 日期选择框
  - `<input type="date" name="" id="">`
- 调色盘
  - `<input type="color" name="" id="">`
- ...etc

:::

## Label标签
> 为什么要特意提label,因为可以通过label与其他元素关联起来

<Tabs>
<TabItem value="html1" label="隐式">

直接用`<label>`包裹元素

```html {1}
<label>林黛玉<input id="dai" type="checkbox" name="female" value="dai"></label>
<label>薛宝钗<input id="cha" type="checkbox" name="female" value="cha"></label>
<label>王熙凤 <input id="fen" type="checkbox" name="female" value="fen"></label>
```

</TabItem>
<TabItem value="html2" label="显式">

通过for属性与表单控件的id名字进行关联.
Label元素不一定要紧挨着相关控件.可以离得很远.
但是从结构的角度来看,把表单控件与相关的label元素分开并不明智,尽量避免这么做

```html {1-2}
<label for="dai">林黛玉</label>
<input id="dai" type="checkbox" name="female" value="dai" >

<label for="cha">薛宝钗</label>
<input id="cha" type="checkbox" name="female" value="cha">

<label for="fen">王熙凤</label>
<input id="fen" type="checkbox" name="female" value="fen">
```

</TabItem>

</Tabs>