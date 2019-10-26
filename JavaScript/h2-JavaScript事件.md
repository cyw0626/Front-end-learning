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
- DataTransfer.getData()方法接受一个字符串作为参数，返回事件所带的指定类型的数据  
```
//getData方法返回的是一个字符串，如果其中包含多项数据，手动解析  
function doDrop(event){
  var lines=event.dataTransfer.getData('text/uri-list').split('\n');
  for(let line of lines){
    let link=document.createElement('a');
    link.href=line;
    link.textContent=line;
    event.target.appendChild(link);
  }
  event.preventDefault();
}
```
- DataTransfer.clearData()方法接受一个字符串作为参数，删除事件所带的指定类型的数据，该方法只能用在dragstart事件的监听函数  
- DataTransfer.setDragImage()拖动过程中（dragstart事件触发后），浏览器会显示一张图片跟随鼠标一起移动，表示被拖动的节点  
## 其他常见事件  
### 资源事件  
- beforeunload事件在串口、文档、各种资源将要卸载前触发 
> 用户修改了表单，还没保存就要离开  
```
window.addEventListener('beforeunload',function(e){
  var confirmationMessage='确认关闭窗口？';
  e.returnValue=confirmationMessage;
  return confirmationMessage;
});
```
- unload事件  
unload事件在窗口关闭或document对象将要卸载时触发，它的出发顺序在beforeunload、pagehide后面，这个事件是无法取消的  
- load事件、error事件  
load事件在页面或某个资源加载成功时触发；error事件是在页面或资源加载失败时触发。abort事件在用户取消加载时触发  
### session历史事件
- pageshow事件、pagehide事件  
pageshow事件在页面加载时触发，包括第一次加载和从缓存加载两种情况；pegehide事件离开当前页面触发  
- popstate事件  
popstate事件在浏览器history对象的当前记录发生显示切换时触发  
```
window.onpopstate=function(event){
  console.log('state:'+ event.state);
};
history.pushState({page:1},'title 1','?page=1');
history.pushState({page:2},'title 2','?page=2');
history.replaceState({page:3},'title 3','?page=3');
history.back(); //state:{"page":1}
history.back();//state:null
history.go(2);//state:{"page":3}
```
- hashchange事件  
hashchange事件在URL的hash部分(即#号后面的部分，包括#号)发生变化时触发  
```
// URL 是 http://www.example.com/
window.addEventListener('hashchange',myFunction);
function myFunction(e){
  console.log(e.oldURL);
  console.log(e.newURL);
}
location.hash='part2';
// http://www.example.com/
// http://www.example.com/#part2
```
### 网页状态事件  
- DOMConetentLoaded事件网页下载并解析完成以后，浏览器就会在document对象上触发 DOMContentLoaded 事件   
- readystatechange事件当 Document 对象和 XMLHttpRequest 对象的readyState属性发生变化时触发：loading、interactive、complete  
### 窗口事件  
- scroll事件在文档或文档元素滚动时触发，主要出现在用户拖动滚动条  
```
//用requestAnimationFrame控制该事件的触发频率，然后可以结合customEvent抛出一个新事件;requestAnimationFrame方法保证每次页面重绘（每秒60次），只会触发一次scroll事件的监听函数
(function () {
  var throttle = function (type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function () {
      if (running) { return; }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  // 将 scroll 事件重定义为 optimizedScroll 事件
  throttle('scroll', 'optimizedScroll');
})();
window.addEventListener('optimizedScroll', function() {
  console.log('Resource conscious scroll callback!');
});
//setTimeout方法
(function() {
  window.addEventListener('scroll', scrollThrottler, false);
  var scrollTimeout;
  function scrollThrottler() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function () {
        scrollTimeout = null;
        actualScrollHandler();
      }, 66);
    }
  function actualScrollHandler() {
    // ...
  }
}());
//Date()方法
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}
window.addEventListener('scroll', throttle(callback, 1000));
//lodash库函数  
window.addEventListener('scroll', _.throttle(callback, 1000));
```
- resize事件改变浏览器窗口大小时触发，主要发生在window对象上   
- fullscreenchange事件在进入或退出全屏状态时触发，该事件发生在document对象上面;fullscreenerror事件在浏览器无法切换到全屏状态时触发  
### 剪贴板事件  
ClipboardEvent接口实例：cut、copy、paste;clipboraddata是一个DataTransfer对象  
### 焦点事件  
焦点事件发生在元素节点和document对象上面，与获得或失去焦点相关。它主要包括以下四个事件。  
- focus：元素节点获得焦点后触发，该事件不会冒泡。  
- blur：元素节点失去焦点后触发，该事件不会冒泡。  
- focusin：元素节点将要获得焦点时触发，发生在focus事件之前。该事件会冒泡。  
- focusout：元素节点将要失去焦点时触发，发生在blur事件之前。该事件会冒泡。  
这四个事件都继承了FocusEvent接口。FocusEvent实例具有以下属性。  
- FocusEvent.target：事件的目标节点。  
- FocusEvent.relatedTarget：对于focusin事件，返回失去焦点的节点；对于focusout事件，返回将要接受焦点的节点；对于focus和blur事件，返回null。  
### CustomEvent接口  
CustomEvent 接口用于生成自定义的事件实例  
浏览器原生提供CustomEvent()构造函数，用来生成CustomEvent事件实例  
```
new CustomEvent(type,options)
//options:只有一个自带的detail属性
```
### GlobalEventHandlers接口  
- GlobalEventHandlers.onabort某个对象的abort事件（停止加载）发生时，就会调用onabort属性指定的回调函数  
- GlobalEventHandlers.onerror方法error事件发生时，就会调用onerror属性指定的回调函数  
- GlobalEventHandlers.onload元素完成加载时，会触发load事件，执行onload()、对于<img>和<video>等元素，加载开始时还会触发loadstart事件，导致执行onloadstart  
- GlobalEventHandlers.onfocus，GlobalEventHandlers.onblur当前元素获得焦点时，会触发element.onfocus；失去焦点时，会触发element.onblur  
- GlobalEventHandlers.onscroll页面或元素滚动时，会触发scroll事件，导致执行onscroll()  
- GlobalEventHandlers.oncontextmenu用户在页面上按下鼠标的右键，会触发contextmenu事件，导致执行oncontextmenu()。如果该属性执行后返回false，就等于禁止了右键菜单；元素的右键菜单显示时，会触发该元素的onshow监听函数  
```
document.oncontextmenu=function(){
  return false;
};
```
