# 事件  
## EventTarget接口  
事件的本质时程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。   
DOM的事件操作(监听和触发)，都定义在EventTarget接口  
- addEventListener:绑定事件的监听函数  
```
target.addEventListener(type,listener[,useCapture]);  //type:事件名称,listener:监听函数,useCapture:false监听函数在冒泡阶段触发/true监听函数在捕获阶段触发
```
- removeEventListener:移除事件的监听函数  
removeEventListener方法移除监听函数，必须时addEventListener方法添加的监听函数，而且必须在同一个元素节点  
- dispatchEvent:触发事件  
```
target.dispatchEvent(event);
```
## 事件模型  
### 监听函数  
- HTML的on-属性  
HTML语言的元素事件监听属性：on加上事件名，只会在冒泡阶段触发```<body onload="doSomething()">```  
- 元素节点的事件属性  
```
//只会在冒泡阶段触发  
window.onload=doSomething;
```
- EventTarget.addEventListener()  
### this的指向  
> 监听函数内部this指向触发事件的那个元素节点  
### 事件的传播  
一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。  
- 第一阶段：从window对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。  
- 第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。  
- 第三阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。  
事件传播的最上层对象是window，接着依次是document，html（document.documentElement）和body（document.body）。
也就是说，上例的事件传播顺序，在捕获阶段依次为window、document、html、body、div、p，在冒泡阶段依次为p、div、body、html、document、window。  
### 事件的代理  
由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数同意处理多个子元素的事件，这种方法叫做事件的代理  
- stopPropagation事件停止传播，本节点监听事件继续执行  
- stopImmediatePropagation彻底取消事件  
## Event对象  
事件发生以后，会产生一个事件对象，作为参数传给监听函数。Event对象本身就是一个构造函数，可以用来生成新的实例  
```
event=new Event(type,options);
//type——字符串，表示事件的名称
//bubbles:布尔值，默认false，表示事件对象是否冒泡;cancelable:布尔值，默认false,表示事件是否能用Event.preventDefault()取消这个事件  
```
### 实例属性  
- Event.bubbles属性返回一个布尔值，表示当前事件是否会冒泡;Event.eventPhase属性返回一个整数常量，表示是啊见目前所处的阶段  
- Event.cancelable属性返回一个布尔值，表示事件是否可以取消,Event构造函数生成的事件，默认时不可以取消的;Event.cancelBubble属性是一个布尔值，true相当于执行Event.stopPropagation(),可以阻止事件的传播;Event.defaultPrevented属性返回一个布尔值，表示该事件是否调用过Event.preventDefault方法  
- Event.currentTarget属性返回事件当前所在的节点，Event.target返回原始触发的节点，后者通常为前者的后代节点  
- Event.type属性返回一个字符串，表示事件类型  
- Event.timeStamp属性返回一个毫秒时间戳，表示事件发生的时间，它是相对于网页加载成功开始计算的  
```
//计算鼠标移动速度的例子，显示每秒移动的像素数量  
var previousX;
var previousY;
var previousT;

window.addEventListener('mousemove',function(event){
  if(previousX !== undefined && previousY !== undefined && previousD !==undefined)
    {
      var deltaX=event.screenX-previousX;
      var deltaY=event.screenY-previousY;
      var deltaZ=Math.sqrt(Math.pow(delatX,2)+Math.pow(deltaY,2));
      var deltaT=event.timeStamp-previousT;
      console.log(deltaZ/deltaT*1000);
    }
    previousX=event.screenX;
    previousY=event.screenY;
    previousT=event.timeStamp;
});
```
- Event.isTrusted属性返回一个布尔值，表示该事件是否由真实的用户行为产生  
- Event.detail属性返回一个数值，表示事件的某种信息  
### 实例方法  
- Event.preventDefault()方法取消浏览器对当前事件的默认行为，只是取消事件对当前元素的默认影响，不会阻止事件的传播   
- Event.stopPropagation()阻止事件在DOM中继续传播  
- Event.stopImmediatePropagation阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点  
- Event.composedPath()返回一个数组，成员是事件的最底层节点和依次冒泡经过的所有上层节点  
## 鼠标事件  
鼠标事件指与鼠标相关的事件，继承了MouseEvent接口  
- click:按下鼠标时触发//mousedown-mouseup-click  
- dbclick:在同一个元素上双击鼠标时触发  
- mousedown:按下鼠标键时触发  
- mouseup：释放按下的鼠标键时触发  
- mousemove:当鼠标在一个节点内部移动时触发  
- mouseenter:鼠标进入一个节点时触发，进入子节点不会触发这个事件  
- mouseover:鼠标进入一个节点时触发，进入子节点会再一次触发这个事件  
- mouseout:鼠标离开一个节点时触发，离开父节点也会触发这个事件  
- mouseleave:鼠标离开一个节点时触发，离开父节点不会触发这个事件  
- contextmenu:按下鼠标右键时触发  
- wheel:滚动鼠标的滚轮时触发  
### MouseEvent接口概述  
```
var event=new MouseEvent(type,options);
//type--字符串，表示事件名称  
```
- screenX,screenY数值，鼠标相对于屏幕的水平和垂直位置  
- clientX,clientY数值，鼠标相对于程序窗口的水平和垂直位置  
- crtlKey,shiftKey,altKey,metaKey布尔值，是否同时按下键  
- button,buttons数值，表示按下哪个鼠标键  
- relatedTarget:节点对象，表示事件的相关节点  
### MouseEvent接口的实例属性  
- MouseEvent.altKey、MouseEvent.ctrlKey、MouseEvent.metaKey、MouseEvent.shiftKey这四个属性都返回一个布尔值，表示事件发生时，是否按下对应的键。它们都是只读属性  
- MouseEvent.button属性返回一个数值，表示事件发生时按下了鼠标的哪个键；MouseEvent.buttons属性返回一个三个比特位的值，表示同时按下了哪些键  
- MouseEvent.clientX属性返回鼠标位置相对于浏览器窗口左上角的水平坐标（单位像素），MouseEvent.clientY属性返回垂直坐标   
- MouseEvent.movementX属性返回当前位置与上一个mousemove事件之间的水平距离（单位像素）；MouseEvent.movementY属性返回当前位置与上一个mousemove事件之间的垂直距离（单位像素）  
- MouseEvent.screenX属性返回鼠标位置相对于屏幕左上角的水平坐标（单位像素），MouseEvent.screenY属性返回垂直坐标。  
- MouseEvent.offsetX属性返回鼠标位置与目标节点左侧的padding边缘的水平距离（单位像素），MouseEvent.offsetY属性返回与目标节点上方的padding边缘的垂直距离  
- MouseEvent.pageX属性返回鼠标位置与文档左侧边缘的距离（单位像素），MouseEvent.pageY属性返回与文档上侧边缘的距离（单位像素）  
- MouseEvent.relatedTarget属性返回事件的相关节点  
### MouseEvent接口的实例属性  
- MouseEvent.getModifierState()返回布尔值，表示有没有按下的特定的功能键  
### WheelEvent接口  
WheelEvent 接口继承了 MouseEvent 实例，代表鼠标滚轮事件的实例对象  
- WheelEvent.deltaX：数值，表示滚轮的水平滚动量   
- WheelEvent.deltaY：数值，表示滚轮的垂直滚动量   
- WheelEvent.deltaZ：数值，表示滚轮的 Z 轴滚动量   
- WheelEvent.deltaMode：数值，表示上面三个属性的单位，0是像素，1是行，2是页  

