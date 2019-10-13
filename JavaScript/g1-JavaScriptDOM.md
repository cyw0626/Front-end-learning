# DOM
## 概述
DOM是JavaScript操作网页的接口，称为“文档对象模型(Document Object Model)”。它的作用是将网页转为一个JavaScript对象，从而可以用脚本进行操作。  
节点类型：  
- Document:整个文档树的顶层节点  
- DocumentType:doctype标签(比如<!DOCTYPE html>)  
- Element:网页的各种HTML标签(比如<body>、<a>)  
- Attribute:网页元素的属性(比如class="right")  
- Text:标签之间或标签包含的文本  
- Comment:注释  
- DocumentFragment:文档的片段  
## Node接口  
### 属性  
- Node.prototype.nodeType属性返回一个整数值，表示节点的类型  
- Node.prototype.nodeName属性返回节点的名称  
- Node.prototype.nodeValue属性返回一个字符串，表示当前节点本身的文本值，该属性可读写  
- Node.prototype.textContent属性返回当前节点和它的所有后代节点的文本内容  
- Node.prototype.baseURI属性返回一个字符串，表示当前网页的绝对路径。浏览器根据这个属性，计算网页上相对路径URL。该属性为只读  
- Node.prototype.ownerDocument属性返回当前节点所在的顶层文档对象，即document对象  
- Node.prototype.nextSibling属性返回紧跟当前节点后面的第一个同级节点，没有则返回null  
- Node.prototype.previousSibling属性返回当前节点前面的、距离最近的一个同级节点，没有则返回null  
- Node.prototype.parentNode属性返回当前节点的父节点  
- Node.prototype.parentElemnt属性返回当前节点的父元素节点  
- Node.prototype.firstChild属性返回当前节点的第一个子节点，lastChild属性返回当前节点的最后一个子节点  
- Node.prototype.childNodes属性返回一个类似数组的对象，成员包括当前节点的所有子节点  
- Node.prototype.isConnected属性返回一个布尔值，表示当前节点是否在文档之中  
### 方法
- Node.prototype.appendChild()方法接受一个节点对象作为参数，将其作为最后一个子节点，插入当前节点，该方法的返回值就是插入文档的子节点  
- Node.prototype.hasChildNodes()方法返回一个布尔值，表示当前节点是否有子节点  
- Node.prototype.cloneNode()方法用于克隆一个节点，它接受一个布尔值作为参数，表示是否同时克隆子节点。它的返回值是以一个克隆出来的新节点  
- Node.prototype.insertBefore()方法用于将某个节点插入父节点内部的指定位置  
- Node.prototype.removeChild()方法接受一个子节点作为参数，用于从当前值移除该子节点。返回值是移除的子节点  
- Node.prototype.replaceChild()方法用于将一个新的节点，替换当前节点的某一个子节点  
- Node.prototype.contains()方法返回一个布尔值，表示参数节点满足：为当前节点；为当前节点的子节点；为当前节点的后代节点  
- Node.prototype.compareDocumentPosition()返回一个六个比特位的二进制值，表示参数节点与当前节点的关系  
- Node.prototype.isEqualNode()方法返回一个布尔值，用于检查两个节点是否相等。所谓相等的节点，指的是两个节点的类型相同、属性相同、子节点相同  
- Node.prototype.isSameNode()方法返回一个布尔值，表示两个节点是否为同一个节点  
- Node.prototype.normalize()方法用于清理当前节点内部的所有文本节点（text）。它会去除空的文本节点，并且将毗邻的文本节点合并成一个  
- Node.prototype.getRootNode()方法返回当前节点所在文档的根节点document，可用于document节点自身
## NodeList接口、HTMLCollection接口  
### NodeList接口  
1.NodeList实例是一个类似数组的对象，它的成员是节点对象，可以使用length和forEach方法，通过以下实例得到    
- Node.childNodes  
- document.querySelectorAll()  

2.NodeList.prototype.length属性返回NodeList实例包含的节点数量  
3.NodeList.prototype.forEach()方法用于遍历NodeList的所有成员  
4.NodeList.prototype.item()接受一个整数值作为参数，表示成员的位置，返回该位置上的成员  
5.通过for...of循环遍历，NodeList.prototype.keys()返回键名的遍历器，NodeList.prototype.values()返回键值的遍历器，NodeList.prototype.entries()返回的遍历器同时包含键名和键值  
### HTMLCollection接口  
1.HTMLCollection是一个节点对象的集合，只能包含元素节点，返回值是一个类似数组的对象，只能用for循环遍历  
2.返回主要是一些Document对象的集合属性，比如document.links、document.forms、document.images  
3.HTMLCollection.prototype.length返回HTMLCollection实例包含的成员数量  
4.HTMLCollection.prototype.item()方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员  
5.HTMLCollection.prototype.namedItem()方法的参数是一个字符串，表示id属性或name属性的值，返回对应的元素节点  
## ParentNode接口，ChildNode接口  
### ParentNode接口  
1.只有元素节点(element)、文档节点(document)、文档片段节点(documentFragment)用于子节点  
2.ParentNode.children属性返回一个HTMLCollection实例，成员是当前节点的所有元素子节点。该属性只读  
3.ParentNode.firstElementChild属性返回当前节点的第一个元素子节点   
4.ParentNode.lastElementChild属性返回当前节点的最后一个元素子节点  
5.ParentNode.childElementCount属性返回一个整数，表示当前节点的所有元素子节点的数目  
6.ParentNode.append()方法为当前节点追加一个或多个子节点，位置是最后一个元素子节点的后面，ParentNode.prepend()方法为当前节点追加一个或多个子节点，位置是第一个元素子节点的前面  
### ChildNode接口  
1.ChildNode.remove()方法用于从父节点移除当前节点  
2.ChildNode.before()方法用于在当前节点的前面，插入一个或多个同级节点，ChildNode.after()方法用于在当前节点的后面，插入一个或多个同级节点，两者拥有相同的父节点   
3.ChildNode.replaceWith()方法使用参数节点，替换当前节点
