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
## 触摸事件  
### 触摸操作描述  
浏览器的触摸API由三个部分组成：Touch,TouchList,TouchEvent，使用event.preventDefault方法阻止发出鼠标事件  
### Touch接口  
Touch接口代表单个触摸点，浏览器原生提供Touch构造函数，用来生成Touch实例  
```
var touch=new Touch(touchOptions);
```
#### Touch接口的实例属性  
- Touch.identifier属性返回一个整数，表示触摸点的唯一ID  
- Touch.screenX，Touch.screenY，Touch.clientX，Touch.clientY，pageX，pageY  
- Touch.radiusX，Touch.radiusY，Touch.rotationAngle  
- Touch.force属性返回一个0-1之间的数值，表示触摸压力  
- Touch.target属性返回一个元素节点，代表触摸发生时所在的哪个元素节点  
#### TouchList接口
TouchList接口表示一组触摸点的集合  
- TouchList.length:数值，表示触摸点数量  
- TouchList.item():返回指定位置的成员，它的参数是该成员的位置编号  
#### TouchEvent接口  
浏览器原生提供TouchEvent()构造函数，用来生成触摸事件的实例  
```
new TouchEvent(type,options)
```
##### 实例属性  
- TouchEvent.altKey，TouchEvent.ctrlKey，TouchEvent.shiftKey，TouchEvent.metaKey表示触摸时是否按下Alt\Ctrl\Shift\Windows键  
- TouchEvent.changeTouches属性返回一个TouchList实例，成员是一组Touch实例对象，表示本次触摸事件的相关触摸点  
- TouchEvent.touches属性返回一个TouchList实例，成员是所有仍然处于活动状态的触摸点  
- TouchEvent.targetTouches属性返回一个TouchList实例，成员是触摸事件的目标元素节点内部，所有仍然处于活动状态的触摸点   
#### 触摸事件的种类  
- touchstart：用户开始触摸时触发，它的target属性返回发生触摸的元素节点。
- touchend：用户不再接触触摸屏时（或者移出屏幕边缘时）触发，它的target属性与touchstart事件一致的，就是开始触摸时所在的元素节点。它的changedTouches属性返回一个TouchList实例，包含所有不再触摸的触摸点（即Touch实例对象）。
- touchmove：用户移动触摸点时触发，它的target属性与touchstart事件一致。如果触摸的半径、角度、力度发生变化，也会触发该事件。
- touchcancel：触摸点取消时触发，比如在触摸区域跳出一个模态窗口（modal window）、触摸点离开了文档区域（进入浏览器菜单栏）、用户的触摸点太多，超过了支持的上限（自动取消早先的触摸点）。
```
var el=document.getElementByTagName('canvas')[0];
el.addEventListener('touchstart',handleStart,false);
el.addEventListener('touchmove',handleMove,false);
function handleStart(evt){
  evt.preventDefault();
  var touches=evt.changedTouches;
  for(var i=0;i<touches.length;i++){
    console.log(touch[i].pageX,touch[i].pageY);
  }
}
function handleMove(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  for (var i = 0; i < touches.length; i++) {
    var touch = touches[i];
    console.log(touch.pageX, touch.pageY);
  }
}
```
## 拖拉事件  
拖拉（drag）指的是，用户在某个对象上按下鼠标键不放，拖动它到另一个位置，然后释放鼠标键，将该对象放在那里。  
- drag:拖拉过程中，在被拖拉的节点上持续触发（相隔几百毫秒）  
- dragstart：用户开始拖拉时，在被拖拉的节点上触发，该事件的target属性是被拖拉的节点  
- dragend：拖拉结束时（释放鼠标键或按下 ESC 键）在被拖拉的节点上触发，该事件的target属性是被拖拉的节点  
- dragenter：拖拉进入当前节点时，在当前节点上触发一次，该事件的target属性是当前节点  
- dragover：拖拉到当前节点上方时，在当前节点上持续触发（相隔几百毫秒），该事件的target属性是当前节点  
- dragleave：拖拉操作离开当前节点范围时，在当前节点上触发，该事件的target属性是当前节点   
- drop：被拖拉的节点或选中的文本，释放到目标节点时，在目标节点上触发   
### DragEvent接口
```
new DragEvent(type,options)
```
### DataTransfer接口概述  
所有拖拉事件的实例都有一个DataEvent.dataTransfer属性，用来读写需要传递的数据  
浏览器原生提供一个DataTransfer()构造函数，用来生曾DataTransfer实例对象  
```
var dataTrans=new DataTransfer();//不接受参数
```
### DataTransfer的实例属性  
- DataTransfer.dropEffect属性用来设置放下被拖拉节点时的效果，会影响到拖拉经过相关区域时鼠标的形状  
- DataTransfer.effectAllowed属性设置本次拖拉中允许的效果  
- DataTransfer.files属性是一个 FileList 对象，包含一组本地文件，可以用来在拖拉操作中传送  
- DataTransfer.types属性是一个只读的数组，每个成员是一个字符串，里面是拖拉的数据格式  
- DataTransfer.items属性返回一个类似数组的只读对象（DataTransferItemList 实例），每个成员就是本次拖拉的一个对象（DataTransferItem 实例）  
### DataTransfer的实例方法  
- DataTransfer.setData()方法用来设置拖拉事件所带有的数据  
```
event.dataTransfer.setData('text/plain','Text to drag');
```



