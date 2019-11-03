# 浏览器模型  
## Cookie  
Cookie是服务器保存在浏览器的一小段文本信息，一般大小不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。  
Cookie主要保存状态信息：  
- 对话(session)管理：保存登录、购物车等需要记录的信息  
- 个性化信息：保存用户的偏好，比如网页的字体大小、背景色等等  
- 追踪用户：记录和分析用户行为  

每个Cookie都有几方面的元数据：  
- Cookie的名字和值  
- 到期时间  
- 所属域名  
- 生效的路径  
用户访问网址，服务器在浏览器写入一个cookie。以后浏览器访问某个路径之前，就会找出该域名和路径有效，并且还没有到期的Cookie，一起发送给服务器  
- window.navigator.cookieEnabled属性返回一个布尔值，表示浏览器是否打开Cookie功能  
- document.cookie属性返回当前网页的cookie  
### Cookie与HTTP协议  
- HTTP回应：Cookie的生成  
服务器如果希望在浏览器保存Cookie,就要在HTTP回应的头信息里面，放置一个Set-Cookie字段  
```
Set-Cookie:<cookie-name>=<cookie-value>
```
如果服务器想改变一个早先设置的Cookie，必须同时满足：Cookie的key、domain、path和secure都匹配  
- HTTP请求：Cookie的发送  
Cookie字段可以包含多个Cookie，使用分号分隔  
服务器收到浏览器发来的Cookie时，不知道：Cookie的各种属性；那个域名设置的Cookie，到底是一级域名设的，还是第一个二级域名设的  
### Cookie的属性  
- Expires属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保存这个Cookie。它的值是UTC格式，可以使用Data.prototype.toUTCString()进行格式转换  
- Max-Age属性指定从现在开始Cookie存在的秒数，过了这个时间以后，浏览器就不再保留这个Cookie  
- Domain属性指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie  
- Path属性指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie  
- Secure属性指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器  
- HttpOnly属性指定该 Cookie 无法通过 JavaScript 脚本拿到，主要是document.cookie属性、XMLHttpRequest对象和 Request API 都拿不到该属性  
- SameSite属性，用来防止 CSRF 攻击和用户追踪  
> Cookie 往往用来存储用户的身份信息，恶意网站可以设法伪造带有正确 Cookie 的 HTTP 请求，这就是 CSRF 攻击  

| SameSite值 | 用处 |  
| ------ | ------ |   
| Strict | 完全禁止Cookie(只有URL一致) |   
| Lax | GET请求：链接、预加载请求、GET表单 |  
| None | 关闭SameSite属性 |  

### document.cookie  
document.cookie用于读写当前网页的Cookie  
document.cookie一次只能写入一个 Cookie，而且写入并不是覆盖，而是添加  
删除一个现存 Cookie 的唯一方法，是设置它的expires属性为一个过去的日期   
## XMLHttpRequest对象  
AJAX：Asynchronous JavaScript and XML，指的是通过JavaScript的异步通信，从服务器获取XML文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页  
只要用脚本发起通信，就可以叫做AJAX通信。AJAX包括以下几个步骤：  
1.创建XMLHttpRequest实例  
2.发出HTTP请求  
3.接收服务器传回的数据  
4.更新网页数据  
```
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
  //通信成功时，状态值为4
  if(xhr.readyState===4){
    if(xhr.status===200){
      console.log(xhr.responseText);
    }else{
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror=function(e){
  console.erroe(xhr.statusText);
};

xhr.open('GET','/endpoint',true);
xhr.send(null);
```
### XMLHttpRequest的实例属性  
- XMLHttpRequest.readyState返回一个整数，表示实例对象的当前状态  
①0，表示 XMLHttpRequest 实例已经生成，但是实例的open()方法还没有被调用  
②1，表示open()方法已经调用，但是实例的send()方法还没有调用，仍然可以使用实例的setRequestHeader()方法，设定 HTTP 请求的头信息  
③2，表示实例的send()方法已经调用，并且服务器返回的头信息和状态码已经收到  
④3，表示正在接收服务器传来的数据体（body 部分）。这时，如果实例的responseType属性等于text或者空字符串，responseText属性就会包含已经收到的部分信息  
⑤4，表示服务器返回的数据已经完全接收，或者本次接收已经失败  
- XMLHttpRequest.onreadystatechange属性指向一个监听函数  
- XMLHttpRequest.response属性表示服务器返回的数据体（即 HTTP 回应的 body 部分）  
- XMLHttpRequest.responseType属性是一个字符串，表示服务器返回数据的类型。这个属性是可写的，可以在调用open()方法之后、调用send()方法之前，设置这个属性的值，告诉服务器返回指定类型的数据  
- XMLHttpRequest.responseText属性返回从服务器接收到的字符串  
- XMLHttpRequest.responseXML属性返回从服务器接收到的 HTML 或 XML 文档对象  
- XMLHttpRequest.responseURL属性是字符串，表示发送数据的服务器的网址  
- XMLHttpRequest.status属性返回一个整数，表示服务器回应的 HTTP 状态码  
200：OK，访问正常  
301：Moved Permanently,永久移动  
302：Moved temporarily,暂时移动  
304：Not Modified,未修改  
307：Temporary Redirect,暂时重定向  
401：Unauthorized,未授权  
403：Forbidden,禁止访问  
404：Not Found,未发现指定网址  
500：Internal Server Error,服务器发生错误  
- XMLHttpRequest.statusText属性返回一个字符串，表示服务器发送的状态提示  
- XMLHttpRequest.timeout属性返回一个整数，表示多少毫秒后，如果请求仍然没有得到结果，就会自动终止。如果该属性等于0，就表示没有时间限制  
- XMLHttpRequestEventTarget.ontimeout属性用于设置一个监听函数，如果发生 timeout 事件，就会执行这个监听函数  
- 事件监听属性  
- XMLHttpRequest.withCredentials属性是一个布尔值，表示跨域请求时，用户信息（比如 Cookie 和认证的 HTTP 头信息）是否会包含在请求之中  
- XMLHttpRequest.upload属性可以得到一个对象，通过观察这个对象，可以得知上传的进展  
```
function upload(blobOrFile){
  var xhr=new XMLHttpRequest();
  xhr.open('POST','/server',true);
  xhr.onload=function(e){};
  var progressBar=document.quarySelector('progress');
  xhr.upload.onprogress=function(e){
    if(e.lengthComputable){
      progreaaBar.value=(e.loaded/e.total)*100;
      progressBar.textContent=progrssBar.value;
    }
  };
xhr.send(blobOrFile);
}
upload(new Bolb(['hello world'],{type:'text/plain'}));
```
### XMLHttpRequest的实例方法  
- XMLHttpRequest.open()方法用于指定 HTTP 请求的参数，或者说初始化 XMLHttpRequest 实例对象  
```
void open(
   string method,//表示 HTTP 动词方法，比如GET、POST、PUT、DELETE、HEAD等
   string url,
   optional boolean async,
   optional string user,
   optional string password
);
```
- XMLHttpRequest.send()方法用于实际发出 HTTP 请求  
```
function sendForm(form){
 var formData=new FormData(form);
 formData.append('crsf','1234567890');
 var xhr=new XMLHttpRequest();
 xhr.open('POST',form.action,true);
 xhr.onload=function(){
  //...
 };
 xhr.send(formData);
 
 return false;
}
var form=document.querySelector('#registration');
sendForm(form);
```
- XMLHttpRequest.setRequestHeader()方法用于设置浏览器发送的 HTTP 请求的头信息  
- XMLHttpRequest.overrideMimeType()方法用来指定 MIME 类型，覆盖服务器返回的真正的 MIME 类型，从而让浏览器进行不一样的处理  
- XMLHttpRequest.getResponseHeader()方法返回 HTTP 头信息指定字段的值  
- XMLHttpRequest.getAllResponseHeaders()方法返回一个字符串，表示服务器发来的所有 HTTP 头信息  
- XMLHttpRequest.abort()方法用来终止已经发出的 HTTP 请求  
### XMLHttpRequest实例的事件  
- readyState属性的值发生改变，就会触发 readyStateChange 事件  
- 上传文件时，XMLHttpRequest 实例对象本身和实例的upload属性，都有一个progress事件，会不断返回上传的进度  
- load 事件表示服务器传来的数据接收完毕，error 事件表示请求出错，abort 事件表示请求被中断（比如用户取消请求）  
- abort、load和error这三个事件，会伴随一个loadend事件，表示请求结束，但不知道其是否成功  
- 服务器超过指定时间还没有返回结果，就会触发 timeout 事件  
### Navigator.sendBeacon()  
用户卸载网页的时候，有时需要向服务器发一些数据。很自然的做法是在unload事件或beforeunload事件的监听函数里面，使用XMLHttpRequest对象发送数据。但是，这样做不是很可靠，因为XMLHttpRequest对象是异步发送，很可能在它即将发送的时候，页面已经卸载了，从而导致发送取消或者发送失败。  
```
window.addEventListener('unload',logData,false);
function logData(){
  navigator.sendBeacon('/log',analyticsData);   //navigator.sendBeacon(url, data)
}
```
## 同源限制  
所谓同源，即协议相同、域名相同、端口相同。同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。  
### Cookie  
- 两个网页一级域名相同、次级域名不同，浏览器允许通过设置document.domain共享cookie   
- 通过Set-Cookie指定所属域名为一级域名，这样二级域名和三级域名不用做任何设置  
### iframe和多窗口通信  
- 片段识别符  
片段识别符指的是，URL的#号后面的部分，只是改变片段标识符，页面不会重新刷新  
```
//父窗口写入子窗口  
var src=originURL + '#' +data;
//子窗口监听hashchange事件  
window.hashchange=checkMessage;
function checkMessage(){
  var message=window.location.hash;
}
```
```
//子窗口改变父窗口的片段标识符  
parent.location.href=target+'#'+hash;
```
- window.postMessage()
跨文档通信API为window对象新增了一个window.postMessage方法,允许两个是否同源的窗口通信  
```
//父窗口向子窗口发送消息
var sonWin=window.open('URL','title');
sonWin.postMessage('data','URL');
```
```
//子窗口向父窗口发送消息
window.opener.postMessage('data','URL');
```
父窗口和子窗口都可以通过message事件，监听对方消息。message事件的参数是事件对象event:
event.source:发送消息的窗口  
event.origin:消息发向的网址  
event.data:消息内容  
- LocalStorage  
通过window.postMessage读写其他窗口的LocalStorage.  
### AJAX  
AJAX除了假设服务器代理，有JSONP、WebSocke、CORS三种方式规避同源限制  
- JSONP  
①网页中添加一个<script>元素，向服务器请求一个脚本  
```
  //请求的脚本网址有一个callback参数（?callback=bar），用来告诉服务器，客户端的回调函数名称（bar）
  <script src="https://api.foo.com?callback=bar"></script>
```
②服务器收到请求后，拼接一个字符串，将 JSON 数据放在函数名里面，作为字符串返回（bar({...})）  
③户端会将服务器返回的字符串，作为代码解析
- WebSocket  
WebSocket 是一种通信协议，使用ws:// （非加密）和wss:// （加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。  
- CORS  
CORS 是跨源资源分享（Cross-Origin Resource Sharing）的缩写,允许任何类型的请求  
## CORS  
CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。  
### 两种请求  
区分：请求方法是——HEAD\GET\POST;HTTP的头信息字段：ACCEPT/ACCEPT-Language/Content-Language/Laxt-Event-ID/Content-type  
#### 简单请求  
对于简单请求，浏览器直接发出 CORS 请求。具体来说，就是在头信息之中，增加一个Origin字段  
- Access-Control-Allow-Origin该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求  
- Access-Control-Allow-Credentials该字段可选。它的值是一个布尔值，表示是否允许发送 Cookie  
- 如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定  
- 显式指定Access-Control-Allow-Credentials字段，告诉浏览器可以发送 Cookie  
#### 非简单请求  
- 预检请求  
```
var url = 'http://api.alice.com/cors';
var xhr = new XMLHttpRequest();
xhr.open('PUT', url, true);
xhr.setRequestHeader('X-Custom-Header', 'value');
xhr.send();
```
- 预检请求的回应  
- 浏览器的正常请求和回应  
## Storage接口  
Storage接口用于脚本在浏览器保存数据。两个对象部署了这个接口：window.sessionStorage和window.localStorage。  
sessionStorage保存的数据用于浏览器的一次对话/localStorage保存的数据长期存在  
- Storage.length：返回保存的数据项的个数  
- Storage.setItem()方法用于存入数据
```
//参数都是字符串
window.sessionStorage.setItem('key','value');
window.localStorage.setItem('key','value');
window.localStorage.key='value';
window.localStorage['key']='value';
```
- Storage.getItem()方法用于读取数据，参数为键名  
- Storage.removeItem()方法用于清除某个键名对应的键值，参数为键名   
- Storage.clear()方法用于清除所有保存的数据  
- Storage.key()接受一个整数作为参数，返回该位置对应的键值   
### Storage事件  
Storage接口存储的数据发生变化时，会触发storage时间，可以指定这个事件的监听函数  
```
//监听函数接受一个event实例对象作为参数：StorageEvent.key/StorageEvent.newValue/StorageEvent.oldValue/StorageEvent.storageArea/StorageEvent.url   
window.addEventListener('storage',onStorageChange);
```
> 该事件有一个很特别的地方，就是它不在导致数据变化的当前页面触发，而是在同一个域名的其他窗口触发
