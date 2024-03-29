---
sidebar_position: 2
---

# CSS-选择器
> [B站视频: 2分钟上手CSS选择器](https://www.bilibili.com/video/BV1et411K7RU?spm_id_from=333.999.0.0)


**当有多个规则都能应用于同一个元素时，权重越高的样式将被优先采用，权重相同找最近的。**


- !important 优先级最高(慎用)
- 内联style：1000
- #id：100
- .class 10
- tag 1

`!important > 行内样式 > id > class = 伪类 > tag = 伪元素`

:::danger该怎样覆盖 !important呢？

只需要加上!important 再额外加上ID 或者类选择器来让它权重更高，`但最好不要滥用!important`，因为这会给后续的维护带来许多困难。
:::

## 样式选择符

| 名称      | 描述 |
| ----------- | ----------- |
|通配选择符	|*|
|ID选择符|	#id|
|类选择符	|.class|
|属性选择符|	a[title]|
|标签选择符|	body|
|群组选择符|	body,p,span|



## 关系选择符

| 名称      | 描述 |
| ----------- | ----------- |
|包含选择符(所有被E元素包含的F元素)	|E F|
|子选择符(所有作为E元素的子元素F)|	E>F|
|相邻选择符(紧贴在E元素之后F元素)	|E+F|
|兄弟选择符(E元素所有兄弟元素F)	|E~F|

## 伪类和伪元素选择符

| 名称     | 描述             |
|--------|----------------|
| 伪类选择符	 | a:hover        |
| 伪元素选择符 | 	p::first-line |
| ...    | ..etc          |

