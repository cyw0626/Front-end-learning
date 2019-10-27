# 浏览器模型  
## 浏览器环境概述  
JavaScript是浏览器的内置脚本语言。  
### 代码嵌入网页的方法  
- script元素嵌入代码  
```<script>```标签有type属性，用来指定脚本类型。text/javascript:老式浏览器;application/javascript:较新浏览器  
- script元素加载外部脚本  
```
<script charset="utf-8" src="https://www.example.com/script.js"></script>
```
- 事件属性on-doSomething()  
- URL协议  
URL支持```javascript:```协议,即在URL的位置写入代码，使用这个URL的时候就会执行JavaScript代码  
```
//用户点击链接，网页不跳转  
<a href="javascript: void new Date().toLocalTimeString();">点击获取当前时间</a>
<a href="javascript: new Date().toLocalTimeString();void 0;">点击获取当前时间</a>
```
### script元素  
工作原理:   
正常网页加载流程：  
1.浏览器一边下载HTML网页，一边开始解析  
2.解析过程中，浏览器发现了```<script>```元素，就暂停解析，把网页渲染的控制权交给JavaScript引擎  
3.如果```<script>```元素引用了外部脚本，就下载该脚本再执行，否则直接执行代码  
4.JavaScript引擎执行完毕，控制权交还给渲染引擎，恢复往下解析HTML网页  
避免阻塞效应：
- 脚本文件放在网页尾部  
```
<body>
  <!-- 其他代码  -->
  <script>
    console.log(document.body.innerHTML);
  </script>
</body>
```
- defer属性  
作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本
```
//脚本执行顺序为a->b
<script src="a.js" defer></script>
<script src="b.js" defer></script>
```
- async属性  
async属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染  
```
//a,b谁先执行不一定
<script src="a.js" async></script>
<script src="b.js" async></script>
```
> 一般来说，如果脚本之间没有依赖关系，就使用async属性，如果脚本之间有依赖关系，就使用defer属性。同时使用async和defer属性，后者不起作用，浏览器行为由async属性决定  
脚本的动态加载：  
```
['a.js', 'b.js'].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});
```
加载使用的协议：  
```
//根绝页面本身的协议来决定加载协议  
<script src="//example.js"></script>
```
### 浏览器的组成  
浏览器的核心是两部分：渲染引擎和JavaScript解释器  
- 渲染引擎  
渲染引擎的主要作用是，将网页代码渲染为用户视觉可以感知的平面文档  
渲染引擎处理网页，通常分成四个阶段：  
1.解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）  
2.对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）  
3.布局：计算出渲染树的布局（layout）  
4.绘制：将渲染树绘制到屏幕  
- 重流和重绘  
渲染树转换为网页布局，称为“布局流”（flow）；布局显示到页面的这个过程，称为“绘制”（paint）。它们都具有阻塞效应，并且会耗费很多时间和计算资源。  
重流和重绘并不一定一起发生，重流必然导致重绘，重绘不一定需要重流。  
- JavaScript引擎  
JavaScript 引擎的主要作用是，读取网页中的 JavaScript 代码，对其处理后运行。  
