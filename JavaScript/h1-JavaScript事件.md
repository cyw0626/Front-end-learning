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
