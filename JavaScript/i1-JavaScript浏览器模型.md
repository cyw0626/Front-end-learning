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
## window对象  
window对象指当前浏览器窗口，是当前页面的顶层对象。一个变量如果未声明，那么默认就是顶层对象的属性  
### window对象的属性  
- window.name表示当前浏览器窗口的名字  
- window.closed返回一个布尔值，表示窗口是否关闭；window.opener属性表示打开当前窗口的父窗口  
- window.self和window.window都指向窗口本身  
- window.frames属性返回一个类似数组的对象，成员为页面所有框架窗口，包括frame元素和iframe元素；window.length返回当前网页包含的框架总数  
- window.frameElement属性用于当前窗口嵌在另一个网页的情况，返回当前窗口所在的那个元素节点  
- window.top属性在框架窗口里面获取顶层窗口；window.parent属性指向父窗口  
- window.status属性用于读取浏览器状态栏的文本  
- window.devicePixelRatio属性返回一个CSS像素的大小与一个物理像素的大小的比率。越大越高清  
- 位置大小属性window.screenX/window.screenY;window.innerHeight/window.innerWidth;window.outerHeight/window.outerWidth;window.srollX/window.srollY;window.pageXOffset/window.oageYOffset  
- 组件属性  
- 全局对象属性  
- window.isSecureContext  
### window对象的方法  
- window.alert()方法弹出的对话框，只有一个“确定”按钮，往往用来通知用户某些信息  
- window.prompt()方法弹出的对话框，提示文字的下方，还有一个输入框，要求用户输入信息，并有“确定”和“取消”两个按钮。它往往用来获取用户输入的数据  
```
//用户填入的值，会作为返回值存入变量result
var result=prompt('您的年龄？',23)
```
- window.confirm()方法弹出的对话框，除了提示信息之外，只有“确定”和“取消”连个按钮，往往用来征询用户是否同意
```
//result值为布尔值
var result=confirm('你快乐嘛?');
```
- window.open()用于新建另一个浏览器窗口  
```
window.open(url,windowName,[windowFeatures])
//url:字符串，新窗口的网址；windowName:新窗口的名字；windowFeature:新窗口都参数  
var popup = window.open(
  'somepage.html',
  'DefinitionsWindows',
  'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
);
```
- window.close()用于关闭当前窗口  
- window.stop()等同于单击浏览器的停止按钮，会停止加载等待加载的对象  
- window.moveTo()方法用于移动浏览器窗口到指定位置；window.moveBy()方法将窗口移动到一个相对位置  
- window.resizeTo()方法用于缩放窗口到指定大小；window.resizeBy()用于缩放窗口  
- window.scrollTo()/window.scroll()方法用于将文档滚动到指定位置;window.scrollBy()方法用于将网页滚动到指定距离  
- window.print()会跳出打印对话框  
- window.focus()方法会激活窗口，使其获得焦点；window.blur()方法将焦点从窗口移除  
- window.getSelection()方法返回一个Selection对象，表示用户现在选中的文本  
```
var selObj=window.getSelection();
var selectedText=selObj.toString();
```
- window.getComputedStyle()方法接受一个元素节点作为参数，返回一个包含该元素的最终样式信息的对象;window.matchMedia()方法用来检查 CSS 的mediaQuery语句  
- window.requestAnimationFrame()则是推迟到浏览器下一次重流时执行，执行完才会进行下一次重绘  
- window.requestIdleCallback()保证将回调函数推迟到系统资源空闲时执行  
### 事件  
#### load事件和onload属性  
load事件发生在文档在浏览器窗口加载完毕时。window.onload属性可以指定这个事件的回调函数  
#### error事件和onerror属性  
浏览器脚本发生错误时，会触发window对象的error事件。我们可以通过window.onerror属性对该事件指定回调函数  
#### window对象的事件监听属性  
### 多窗口操作  
#### 窗口的引用  
- top:顶层窗口，即最上层的那个窗口  
- parent:父窗口  
- self:当前窗口，即自身  
#### iframe元素  
对于iframe嵌入的窗口，document.getElementById方法可以拿到该窗口的 DOM 节点，然后使用contentWindow属性获得iframe节点包含的window对象  
#### window.frames属性  
window.frames属性返回一个类似数组的对象，成员是所有子窗口的window对象  
## Navigator对象,Screen对象  
### Navigator对象属性  
- Navigator.userAgent属性返回浏览器的 User Agent 字符串，表示浏览器的厂商和版本信息  
```
var ua=navigator.usrAgent.toLowerCase();
if(/mobi/i.test(us))
  {//手机浏览器}
else
  {//非手机浏览器}
```
- Navigator.plugins属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件  
- Navigator.platform属性返回用户的操作系统信息  
- Navigator.onLine属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）  
- Navigator.language属性返回一个字符串，表示浏览器的首选语言;Navigator.languages属性返回一个数组，表示用户可以接受的语言  
- Navigator.geolocation属性返回一个 Geolocation 对象，包含用户地理位置的信息。注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。  
①Geolocation.getCurrentPosition()：得到用户的当前位置  
②Geolocation.watchPosition()：监听用户位置变化  
③Geolocation.clearWatch()：取消watchPosition()方法指定的监听函数  
- Navigator.cookieEnabled属性返回一个布尔值，表示浏览器的 Cookie 功能是否打开  
### Navigator对象方法  
- Navigator.javaEnabled()方法返回一个布尔值，表示浏览器是否能运行 Java Applet 小程序  
- Navigator.sendBeacon()方法用于向服务器异步发送数据  
### Screen对象  
Screen 对象表示当前窗口所在的屏幕  
