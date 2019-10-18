# DOM
## 属性的操作  
HTML元素包括标签名和若干个键值对，这个键值对就称为属性。  
### Element.attributes属性  
元素对象有一个attributes属性，返回一个类似数组的动态对象，成员是该元素标签的所有属性节点对象，属性的实时变化都会反映在这个节点对象上。  
### 元素的标准属性  
HTML元素的标准属性，会自动成为元素节点对象的属性  
###  属性操作的标准方法  
- Element.getAttribute()方法返回当前元素节点的指定属性  
- Element.getAttributeNames()返回一个数组，成员是当前于是怒的所有属性的名字  
- Element.setAttribute()方法用于为当前节点新增属性，该方法没有返回值  
- Element.hasAttribute()方法返回一个布尔值，表示当前元素节点是否包含指定属性  
- Element.hasAttributes()方法返回一个布尔值，表示当前元素是否有该属性  
- Element.removeAttribute()方法移除指定属性  
### dataset属性  
使用元素节点对象的dataset属性，它指向一个对象，可以用来操作HTML元素标签的data-* 属性  
## Text节点和DocumentFragment节点
### Text节点概念  
文本节点(Text)代表元素节点(Element)和属性节点(Attribute)的文本内容。  
```
var textnode=document.createTextNode('the string you need to add');
document.querySelector('div').appendChild(textNode);

var text1=new Text('the string you need to add');
```
### Text节点的属性  
- data属性用来设置或读取文本节点的内容  
- wholeText属性将当前文本节点与毗邻的文本节点，作为整体返回  
- length属性返回当前文本节点的长度  
- nextElementSibling属性返回紧跟在当前文本节点后面的那个同级的文本节点，previousElementSibling属性返回当前文本节点前面最近的同级元素节点  
### Text节点的方法  
- appendData()在Text节点尾部追加字符串  
- deleteData()删除Text节点内部的字符串 
- insertData()在Text节点插入字符串  
- replaceData()用于替换文本  
- subStringData()用于获取子字符串  
- remove()用于移除当前Text节点  
- splitText()将Text节点一分为二，原Text节点只包含分割位置前方的字符串,父元素的normalize()可以将它们合并  
### DocumentFragment节点
DocumentFragment节点代表一个文档的片段，本身就是一个完整的DOM树形结构，它没有父节点  
```
var docFrag=document.createDocumentFragment();

var docFrag=new DocumentFragment();
```
DocumentFragment节点本身不能插入当前文档，它作为appendChild()、insertBefore()、replaceChild()等方法的参数时，它的所有子节点插入当前文档  
