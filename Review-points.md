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
