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
使用元素节点对象的dataset属性，它指向一个对象，可以用来操作HTML元素标签的data-*属性  
