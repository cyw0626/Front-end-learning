# HTML  
## 1.HTML多媒体播放   
### HTML音频播放
```
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
</audio>
```
### HTML视频播放  
```
<video controls>
  <source src="movie.mp4" type="video/mp4">
</video>
```
### object和embed形式  
```
<object width="400" height="50" data="bookmark.suf"></object>
<embed width="400" height="50" src="bookmark.suf">
```
## 2.script中defer和async的区别  
### <script src="script.js"></script>  
浏览器立即加载并执行指定的脚本，不等待后续加载的文档元素，读到就加载执行。  
### <script async src="script.js"><script>  
加载和渲染后续文档元素将与scirpt.js的加载与执行并行进行(异步)。  
### <script defer src="script.js"></script>  
加载后续文档的过程与script.js的加载同步进行，但是script.js的执行要在所有元素解析完成之后，DOMContentLoaded事件触发之前完成。  
> defer和async在网络读取时相同，区别在于下载脚本后何时执行。    
  
## 3.HTML表单  
### HTTP请求方法  
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
