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
