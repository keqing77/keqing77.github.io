---
sidebar_position: 3
---

# CSS-定位与布局

## box-model
> 盒子模型

CSS盒状模型本质上是一个包裹着每个HTML元素的盒子。它包括：`边距、边框、填充和实际内容`。下面的图片说明了盒子模型。

![](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model/boxmodel-(3).png)

- **content-box** (标准盒子模型, 默认应用)
  - width = 内容的宽度
  - height = 内容的高度
- **border-box** (怪异盒子模型, 常用于响应式网站)
  - width = border + padding + 内容的宽度
  - height = border + padding + 内容的高度

## 文档流

:::info 什么是文档流
- 所谓的文档流意思就是 `块级元素`从上到下依次排版, 
  - `行内元素` 从左到右占满一行再从上到下排版, 所有元素都在`同一个平面`,就好像我们写的纸一样.
- 脱离文档流就是某些元素不在初始平面上, 排版不受原平面控制, 如`Float postion:absolute z-index:9999...etc`
:::

## BFC

:::tip **什么是BFC**(Block Formatting Contexts 块级格式化上下文)
- 从上面我们知道, 常见元素的布局有三种
  - 普通文档流 
  - 浮动(Float) , 基本弃用
  - 绝对定位, (如absoule,fixed,z-index等等)

**具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。BFC关键词是`Block` 块状元素的, 这样就可以理解了**

- **BFC作用**
  - 解决 `margin` 重叠
  - 特殊滚动效果
  - 清除浮动, 阻止元素被浮动元素覆盖

:::

:::warning 触发BFC

- html 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

:::


## 定位
```css
position: static;   默认定位
position: inherit;  继承父级定位
position: relative; 相对定位
position: absolute; 绝对定位
position: fixed;    固定定位
position: sticky;   粘性定位
/* 通过top left bottom right来控制位置 , 起始位置为屏幕左上角 (0,0) */
```

## 布局

> 要想网站好看, 就得在布局上花心思, 就好像网页是一张画纸, 如何合理决定元素的画质的位置

### Float(浮动)
- **被嫌弃的Float , 不讲也不要用😁**

### Flex
> Flex可以看做是一维布局, 一次可以控制 一个方向的排布

:::tip 视频
[Flexbox 网页布局完全解构](https://www.bilibili.com/video/BV1qJ411N7TA?spm_id_from=333.999.0.0)
:::


### Grid

> Grid是二维布局, 可以同时控制多个方向的排布


:::tip 视频
[Grid 网页布局完全解构](https://www.bilibili.com/video/BV1XE41177oN/?spm_id_from=333.788.recommend_more_video.-1)
:::

### Media Query
> 又称媒体查询, 通过查询设备的宽度应用不同的CSS样式

:::danger 响应式的标准
**底部不能出现横向滚动条, 网页布局随宽度变化而变化**
:::

在当今移动设备更受欢迎的时代, 对手机 和平板的适配也是非常重要, 所以为了同时兼容 `PC 平板 手机 `等多设备, 网站往往采用`响应式`设计 , 你可以找一个比较近的网站改变网页的宽度观察网页排版的变化, 如[轻流低代码](https://qingflow.com/).


### Container Query
> 容器查询 , 为了解决媒体查询的不足而推出, 更加细化地应用规则