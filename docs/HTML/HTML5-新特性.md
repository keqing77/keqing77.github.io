---
sidebar_position: 5
---

# HTML5-新特性

## Video
> HTML5推出 `<video> <audio>`等媒体标签, 原生支持, 不再需要` Flash`等落后的技术

## Websocket
:::tip Websocket是为了解决http的限制而推出的,随着http版本的发展,ws的优势慢慢在减弱
WebSocket协议为web应用程序客户端和服务端之间提供了一种全双工通信机制。 特点：
1. 握手阶段采用HTTP协议，默认端口是80和443
1. 建立在TCP协议基础之上，和http协议同属于应用层
1. 可以发送文本，也可以发送二进制数据。
1. **没有同源限制**，客户端可以与任意服务器通信。
1. 协议标识符是ws（如果加密，为wss），如ws://localhost:8023

:::

## WebStorage

:::info 
新增localstorage和sessionStroage以取代cookie，session是基于cookie的，cookie被禁用session也用不了
#cookie
网站为了标示用户身份而储存在用户本地终端上的数据； cookie数据始终在同源的http请求中携带（即使不需要），也会在浏览器和服务器间来回传递。 sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存；

存储大小：cookie数据大小不能超过4k
有效时间：在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
#sessionStorage和localStorage
存储大小：比cookie大得多，可以达到5M或更大。
有效时间： localStorage存储持久数据，浏览器关闭后数据不丢失除非主动删除数据； sessionStorage数据在当前浏览器窗口关闭后自动删除；

:::

## WebWorker

:::tip 浏览器的独立进程

- 在 HTML 页面中，如果在执行脚本时，页面的状态是不可响应的，直到脚本执行完成后，页面才变成可响应。 
- web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。 
- 通过 postMessage 将结果回传到主线程。 这样在进行复杂操作的时候，就不会阻塞主线程了。

**如何创建 web worker：**
1. 检测浏览器对于 web worker 的支持性
2. 创建 web worker 文件（js，回传函数等）
3. 创建 web worker 对象

:::

## manifest

:::info 离线存储
在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问页面 ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，就会重新下载文件中的资源并进行离线存储。
离线的情况下，浏览器会直接使用离线存储的资源
:::

## Iframe
> 也叫HTML框架, 可以在网页嵌入其他网页的一个技术

```html
<iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>
```