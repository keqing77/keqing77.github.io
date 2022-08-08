---
sidebar_position: 4
---

# CSS-动画与过渡


## transform

**transform属性允许你旋转，缩放，倾斜或平移给定元素**

| 属性           | 描述     | 
|--------------|-----------|
| matrix()     | 	以一个含六值的(a,b,c,d,e,f)变换矩阵的形式指定一个2D变换，相当于直接应用一个[a,b,c,d,e,f]变换矩阵 | 
| translate()  | 	2D平移，第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0 | 
| translateX() | 	指定对象X轴（水平方向）的平移 | 
| translateY() | 	指定对象Y轴（垂直方向）的平移 | 
 | rotate()	    | 指定对象的2D  rotation（2D旋转），需先有 <' transform-origin '> 属性的定义 | 
 | rotateX()	   | 指定对象在x轴上的旋转角度 | 
 | rotateY()    | 	指定对象在y轴上的旋转角度 | 
 | rotateZ()    | 	指定对象在z轴上的旋转角度 | 
| scale()      | 	指定对象的2D scale（2D缩放）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认取第一个参数的值| 
| scaleX()	    | 指定对象X轴的（水平方向）缩放 | 
| scaleY()     | 	指定对象Y轴的（垂直方向）缩放 | 
| skew()       | 	指定对象skew transformation（斜切扭曲）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0| 
| skewX()      | 	指定对象X轴的（水平方向）扭曲 | 
| skewY()      | 	指定对象Y轴的（垂直方向）扭曲| 
| transform	| 复合属性。设置对象的变换|
| transform-origin	 | 设置对象中的变换所参照的原点|
| transform-style | 	指定某元素的子元素是否位于三维空间内|
| perspective| 	perspective 属性定义 3D 元素距视图的距离，以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图|
| perspective-origin	 | 指定透视点的位置|
| backface-visibility | 	指定元素背面面向用户时是否可见|


## transition

> **transition是以下4个属性的简写属性**

- transition-property，
- transition-duration，
- transition-timing-function
- transition-delay

| 属性           | 描述     | 
|--------------|-----------|
|transition-property	|设置对象中的参与过渡的属性|
|transition-duration	|设置对象过渡的持续时间|
|transition-timing-function|	设置对象中过渡的类型|
|transition-delay	|设置对象延迟过渡的时间|
|transition	复合属性。|设置对象变换时的过渡效果|



## animate


> **animation是以下属性的简写属性(可选)**

- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count
- animation-direction
- animation-fill-mode
- animation-play-state