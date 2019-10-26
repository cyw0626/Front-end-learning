# 事件  
## 进度事件  
### 进度事件的种类  
进度事件用来描述资源加载的进度，主要由AJAX请求、```<img>```,```<audio>```,'''<video>```,```<style>```,```<link>```等外部资源的加载触发，继承了ProgressEvent接口  
- abort:外部资源中止加载触发  
- error:由于错误导致外部资源无法加载时触发  
- load:外部资源加载成功时触发  
- loadstart:外部资源停止加载时触发，发生在error、abort、load等事件的后面  
- progress:外部资源加载过程中不断触发  
- timeout:加载超时时触发  
- loadend事件监听函数，可以用来取代abort、load、error事件的监听函数，它在这些事件之后发生  
### ProgressEvent接口  
浏览器原生提供了ProgressEvent()构造函数，用来生成事件实例  
```
new ProgressEvent(type,options)
//type:字符串，表示事件的类型；options:配置对象
```
```
var xhr=XMLHttpRequest();
xhr.addEventListener('progress',updateProgress,flase);
xhr.addEventListener('load',transferComplete,flase);
xhr.addEventListener('error',transferFailed,flase);
xhr.addEventListener('abort',transferCanceled,flase);
xhr.open();
function updateProgress(e){
  if(e.length Computable){
     var percentComplete=e.loaded/e.total;
   }else{
     console.log('不能计算进度')；
   }
}
function transferComplete(e) {
  console.log('传输结束');
}
function transferFailed(evt) {
  console.log('传输过程中发生错误');
}
function transferCanceled(evt) {
  console.log('用户取消了传输');
}
```









