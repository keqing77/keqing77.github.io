---
sidebar_position: 3
---


## SVG
> SVG是指可伸缩的矢量图形，放大不失真，使用 XML 格式定义图像。应用: `Google 地图`

**在很多现代的网站,如Github等图片已经全部换成svg格式的图片了,svg拥有体积小但图像质量高且不会因缩放而失真等优点,唯一的缺点是标签实在太长太长太长了**😅~ 

:::tip SVG优点
- 常规图片除非打成`base64`, 否则或多或少都有路径问题😡
- SVG不会因为图片缩放而失真而模糊
:::


```html
<svg xmlns="http://www.w3.org/2000/svg" 
     width="16" 
     height="16" 
     fill="currentColor" 
     class="bi bi-alarm-fill" 
     viewBox="0 0 16 16">
  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
</svg>

svg常用属性
- fill 填充(颜色)
- class CSS样式
- viewBox 投影的视口大小
- width/height 宽高
- stroke       Stroke属性定义一条线，文本或元素轮廓颜色
- stroke-width Storke的粗细
- svg标签 本例是path，可以是圆circle、椭圆ellipse、线line..等等
```

## Canvas
> Canvas是一个画布,可以完成许多动画和三维效果, 是高级前端必须掌握的进阶技能 `应用: B站弹幕`

**标签只是一个容器，必须使用JavaScript脚本来绘制图形。通过 JavaScript 来绘制 2/3D 图形**

```html
<canvas id="myCanvas" width="200" height="100" 
style="border:1px solid #c3c3c3;">
您的浏览器不支持 HTML5 canvas 标签。
</canvas>

<script>
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,150,75);
</script>
```