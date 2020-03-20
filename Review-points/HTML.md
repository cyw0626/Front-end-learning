# HTML  
## 1.HTML多媒体播放   
### ①HTML音频播放
```
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
</audio>
```
### ②HTML视频播放  
```
<video controls>
  <source src="movie.mp4" type="video/mp4">
</video>
```
### ③object和embed形式  
```
<object width="400" height="50" data="bookmark.suf"></object>
<embed width="400" height="50" src="bookmark.suf">
```
## 2.script中defer和async的区别  
### ①<script src="script.js"></script>  
浏览器立即加载并执行指定的脚本，不等待后续加载的文档元素，读到就加载执行。  
### ②<script async src="script.js"><script>  
加载和渲染后续文档元素将与scirpt.js的加载与执行并行进行(异步)。  
### ③<script defer src="script.js"></script>  
加载后续文档的过程与script.js的加载同步进行，但是script.js的执行要在所有元素解析完成之后，DOMContentLoaded事件触发之前完成。  
> defer和async在网络读取时相同，区别在于下载脚本后何时执行。    
  
## 3.HTML表单  
### ①HTTP请求方法  
| 方法 | 描述 |
| :------: | :------: | 
| GET | 请求指定页面，返回实体主体 | 
| POST | 向指定资源提交数据进行处理请求。数据被包含在请求体中，POST可能会导致新的资源建立和/或已有的资源修改。 | 
| HEAD | 类似GET请求，只不过返回的响应中没有具体的内容，用于获取报头。|
| PUT | 从客户端向服务器传送数据取代指定的文档内容。|
| DELETE | 请求服务器删除指定页面。|
| OPTIONS | 允许客户端查看服务器的性能。|
| TRACE | 回显服务器收到的请求，主要用于测试和诊断。|
| CONNECT | HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。|
| PATCH | 对PUT方法的补充，对已有的资源进行局部更新。|
#### 1>HTTP的GET和POST   
- GET参数通过URL传递，POST放在Request body中  
- GET在浏览器回退时是无害的，POST会再次提交请求  
- GET产生的地址可以被bookmark，POST不可以  
- GET的请求会被浏览器主动cache,POST不会，除非手动设置    
- GET请求只能进行url编码，POST支持多种编码方式  
- GET请求参数会完整保存在浏览器的历史记录里，POST的参数不会保留  
- GET在Url请求是有长度限制的，POST没有  
- GET只接受ASCII字符，POST没有限制  
- GET比POST更不安全，因为参数直接暴露在URL里，不能传递敏感信息  
#### 2>完整的HTTP请求过程  
> DNS域名解析--->与服务器建立连接（TCP/IP三次握手）--->发起HTTP请求（请求报文：请求方法/请求地址url/协议版本）--->服务器响应请求，浏览器得到http代码（响应报文：协议版本/状态码/状态码描述）--->浏览器解析html代码，请求html代码里的资源--->浏览器对页面渲染呈现给用户
##### 状态码  
- 1xx：指示信息–表示请求已接收，继续处理。  
- 2xx：成功–表示请求已被成功接收、理解、接受。  
- 3xx：重定向–要完成请求必须进行更进一步的操作。  
- 4xx：客户端错误–请求有语法错误或请求无法实现。  
- 5xx：服务器端错误–服务器未能实现合法的请求。  
### ②表单按钮   
```
<button>提交</button>
<input type="submit" value="提交"/>
```
### ③表单   
```
<form>
  <fieldset>
    <legend>前端</legend>
      <label>名字：<input type="text" autocomplete="on"/></label><br/>
      <label>密码：<input type="password" maxlength="10"/></label><br/>
      <label>邮箱：<input type="text" placeholder="user@qq.com" required pattern=".*@qq.com$"/></label><br/>
      <label>性别：
        <select>
          <option>男</option>
          <option>女</option>
        </select>
       </label><br/>
      <button>提交</buttton>
  </fieldset>
</form>
```
