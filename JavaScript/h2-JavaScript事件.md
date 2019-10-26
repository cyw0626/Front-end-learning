# 事件  
## 进度事件  
### 进度事件的种类  
进度事件用来描述资源加载的进度，主要由AJAX请求、```<img>```,```<audio>```, ```<video>```,```<style>```,```<link>```等外部资源的加载触发，继承了ProgressEvent接口  
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
## 表单事件  
- input事件  
input事件当```<input>\<select>\<textarea>```或```<input type=checkbox>\<input type=radio>```的值发生变化时触发   
input事件的一个特点，就是会连续触发，比如用户每按下一次按键，就会触发input事件  
- select事件  
select事件当在```<input>\<textarea>```里面选中文本触发  
- change事件  
change事件不会连续触发，只有当全部修改完成时才会触发  
- invaild事件  
用户提交表单时，如果表单元素的值不满足校验条件，就会触发valid事件  
```
<form>
  <input type="text" required oninvalid="console.log('invaild input')"/>
  <button type="submit">提交<button>
</form>
```
- reset事件，submit事件  
这两个事件发生在表单对象```<form>```上，reset事件当表单重置时触发，submit事件当表单数据向服务器提交时触发。  
### InputEvent事件  
浏览器原生提供InputEvent()构造函数，用来生成实例对象  
```
new InputEvent(type,options)
//type：字符串，表示事件名称  
//options:inputType-字符串，表示变更的类型/data-字符串，表示插入的字符串/dataTransfer-返回一个DataTransfer对象实例
```
```
<input type="text" id="myInput">
//返回一个字符串，表示变更的内容
var input=document.getElementById('myInput');
input.addEventListener('input',myfunction,false);
function myFunction(e){
  conosle.log(e.data)
}
```







