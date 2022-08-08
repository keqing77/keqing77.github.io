---
sidebar_position: 1
---

# CSS-介绍

CSS全称为`Cascading Style Sheets`,中文翻译为“层叠样式表”,
> 用于描述网页的表示,即布局和格式。在网页制作时采用CSS技术,可以有效地对页面的布局、字体、颜色、背景和其它效果实现更加精确的控制。

- 层叠:相同的样式名的不同值作用到同一元素的时候,会有样式被覆盖.
  - 一个文件有不同顺序的CSS样式，层叠顺序如何决定呢？
  - 行内样式>内部样式>外部样式
- 样式生效会有先后重要的顺序.根据样式优先级,如果优先级一样,后写会覆盖先写的.

## CSS作用
`CSS用于装饰html , 如果说 html 是房子的骨架, 那么css就是在骨架的基础上进行精装修.`

虽然`HTML + CSS` 只是前端内容的十分之一左右, 很多工程师都不认为这两门语言是编程语言, 只是`DSL(Domain Specific Language 中文翻译为领域特定语言)`， 但是 CSS 的难度 可不见得就比 JavaScript小 , 不夸张地说, 前端工程师一天的工作可能百分之八九十都在调样式上😥

## @规则

```css
@import		导入外部样式表及目标媒体,该规则必须在样式表头部最先声明
@charset	在外部样式表文件内使用。指定样式表使用的字符编码
@media		指定样式表规则用于指定的媒体类型和条件
@font-face	设置嵌入HTML文档的OpenType字体
@keyframes	指定动画名称和动画效果
```

## 单位
:::tip 优先级

- `min-height > max-height > height`
- 大小单位 
  - 相对单位
    - vh/vw
    - rem
    - em
  - 绝对单位
    - px

:::

```css
margin: 0; 上下左右都为0
margin: 0 0;  上下  左右都为0
margin: 0 0 0； 上0 左右0 下0
margin: 0 0 0 0;  上0 右0 下0 左0

像这样可以简写的还有padding、background、border、flex、transform等
```


## Amazing CSS

```css
perspective: 
/* CSS 属性 perspective指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果 */
backdrop-filter : 
/* 属性设置模糊效果，毛玻璃 */
background: linear-gradient(90deg, #edc0bf 0,#c4caef 58%);
 /* 渐变色 */
aspect-ratio: 
/* 控制图片、视频等元素的纵横比 */
object-fit:cover
/* 让图片占满容器 */
object-position: 
/* 图片在容器位置 */
mix-blend-mode: 
/* 描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合,可以给背景视频加滤镜 */
scroll-snap-type: 
/* 参数一 : 表示滚动贴合的方向，参数二：表示贴合方式 */
background-attachment: 
/* 控制背景图像的位置是在视口内固定，或者随着包含它的区块滚动，视差动画 */
overflow-x: scroll;
/* 横向滚动*/
@container (max-width: 850px) {}
/* 容器查询 */

...未完待续
```

