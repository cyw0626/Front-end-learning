# DOM  
## Document节点  
### 概述  
document节点对象代表整个文档，每张网页都有自己的document对象。window.document属性就指向这个对象  
### 属性  
#### 快捷方式属性  
- document.defaultView属性返回document对象所属的window对象  
- document.doctype属性返回```<!DOCTYPE html>```  
- document.documentElement属性返回```<html>```  
- document.body,document.head  
- document.scrollingElement属性返回文档的滚动元素  
- document.activeElement属性返回当前焦点的DOM元素  
- document.fullscreenElement属性返回当前以全屏状态展示的DOM元素  
#### 节点集合属性  
- document.links属性返回当前文档所有设定了href属性的```<a>```及```<area>```节点  
- document.forms属性返回所有```<form>```表单节点  
- document.images,document.embeds、document.plugins,document.scripts,document.styleSheets  
#### 文档静态信息属性  
- document.documentURI,document.URI属性返回一个字符串，表示当前文档的网址  
- document.domain属性返回当前文档的域名，不包含协议和端口  
- document.location提供URL相关的信息和操作方法  
- document.lastModified属性返回一个字符串，表示当前文档的最后修改时间  
- document.title,document.characterSet,document.reffer.document.dir,document.compatMode  
#### 文档状态属性  
- document.hidden属性返回一个布尔值，表示当前页面是否可见  
- document.visibilityState返回文档的可见状态  
- document.readyState属性返回当前文档的状态，loading\interactive\complete  
- document.cookie、document.designMode属性控制当前文档是否可编辑  
- document.implementation属性返回一个DOMImplementation对象，用于创建XML、HTML、DocumentType对象  
### 方法  
- document.open()方法清除当前文档所有内容，使得文档处于可写状态,document.close()方法用来关闭document.open()打开的文档  
- document.write()方法用于向当前文档写入内容，document.writeln方法会在输出内容的尾部添加换行符  
- document.querySelector()方法接受一个 CSS 选择器作为参数，返回匹配该选择器的元素节点，document.querySelectorAll方法返回一个NodeList对象，包含所有匹配给定选择器的节点  
- document.getElementsByTagName()返回一个类似数组对象  
- document.getElementsByClassName()方法返回一个包括所有class名字符合指定条件的元素的类似数组对象  
- document.getElemnetsByName()方法选择拥有name属性的HTML元素的一个类似数组的对象  
- document.getElementById()方法返回匹配指定id属性的元素节点  
- document.elementFromPoint()方法返回位于页面指定位置最上层的元素节点，document.elementsFromPoint()返回一个数组，成员是位于指定坐标（相对于视口）的所有元素  
- document.createElement()方法用来生成元素节点，并返回该节点  
- document.createTextNode()方法用来生成文本节点（Text实例），并返回该节点  
- document.createAttribute()方法生成一个新的属性节点（Attr实例）  
- document.createComment()方法生成一个新的注释节点，并返回该节点  
- document.createDocumentFragment()方法生成一个空的文档片段对象  
- document.createEvent()方法生成一个事件对象（Event实例），该对象可以被element.dispatchEvent方法使用，触发指定事件  
- document.addEventListener()，document.removeEventListener()，document.dispatchEvent()这三个方法用于处理document节点的事件  
- document.hasFocus()方法返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点  
- document.adoptNode()方法将某个节点及其子节点，从原来所在的文档或DocumentFragment里面移除，归属当前document对象，返回插入后的新节点;document.importNode()方法则是从原来所在的文档或DocumentFragment里面，拷贝某个节点及其子节点，让它们归属当前document对象  
- document.createNodeIterator()方法返回一个子节点遍历器  
- document.createTreeWalker()方法返回一个 DOM 的子树遍历器  
- document.execCommand()改变内容的样式，document.queryCommandSupported()方法返回一个布尔值，表示浏览器是否支持document.execCommand()的某个命令，document.queryCommandEnabled()方法返回一个布尔值，表示当前是否可用document.execCommand()的某个命令  
- document.getSelection()指向window.getSelection()
## Element节点
Element节点对象对应网页的HTML元素。  
### 实例属性  
#### 元素特性的相关属性  
- Element.id属性返回指定元素的id属性，该属性可读写  
- Element.tagName属性返回指定元素的大写标签名  
- Element.dir属性用于读写当前元素的文字方向  
- Element.accessKey属性用于读写分配给当前元素的快捷键  
- Element.draggable属性返回一个布尔值，表示当前元素是否可拖动，该属性可读写  
- Element.lang属性返回当前元素的语言设置，该属性可读写  
- Element.tabIndex属性返回一个整数，表示当前元素在Tab键遍历的顺序  
- Element.title属性用来读写当前元素的HTML属性的title  
#### 元素状态的相关属性  
- Element.hidden属性返回一个布尔值，表示当前元素的hidden属性，用来控制当前元素是否可见，该属性可读写  
- Element.contentEditable,Element.isContentEditable设置contentEdtable属性，使元素的内容可编辑  
#### Element.attributes  
Element.attributes属性返回一个类似数组的对象，成员是当前元素节点的所有属性节点  
#### Element.className
- Element.className属性用来读写当前元素节点的class属性，每个class属性用空格分割  
- Element.classList属性返回一个类似数组的对象，当前元素节点的每一个class就是这个对象的一个成员，有add(),remove(),contains(),toggle(),item(),toString()等方法  
#### Element.dataset
网页元素可以的自定义data-属性，用来添加数据  
#### Element.innerHTML  
> 该属性可读写，用来返回某元素包含的HTML代码或设置某个节点的内容  
#### Element.outerHTML
> 该属性可读写，该元素返回一个字符串，表示当前元素节点的所有HTML代码，包括该元素本身和所有子元素  
#### Element.clientHeight/Element.clientWidth/Element.clientLeft/Element.clientTop
Element.clientHeight属性表示元素节点的CSS高度，Element.clientWidth属性返回元素节点的CSS宽度，Element.clientLeft等于元素节点左边框的宽度，Element.clientTop属性等于网页元素顶部边框的宽度  
#### Element.scrollHeight/Element.scrollWidth/Element.scrollLeft/Element.scrollTop  
Element.scrollHeight属性表示当前元素的总高度，Element.scrollWidth属性表示当前元素的总宽度，Element.scrollLeft属性表示当前元素的水平滚动条向右侧滚动的像素数量，Element.scrollTop属性表示当前元素的垂直滚动条向下滚动的像素数量  
#### Element.offsetParent/Element.offsetHeight/Element.offsetWidth/Element.offsetLeft/Element.offsetTop  
Element.offsetParent属性返回最靠近当前元素的、并且 CSS 的position属性不等于static的上层元素,Element.offsetHeight属性返回一个整数，表示元素的 CSS 垂直高度（单位像素），包括元素本身的高度、padding 和 border，以及水平滚动条的高度（如果存在滚动条）,Element.offsetWidth属性表示元素的 CSS 水平宽度（单位像素）,Element.offsetLeft返回当前元素左上角相对于Element.offsetParent节点的水平位移，Element.offsetTop返回垂直位移，单位为像素  
#### Element.style/Element.children/Element.childElementCount/Element.firstElementChild/Element.lastElementChild/Element.nextElementSibling/Element.previousElementSibling   
每个元素节点都有style用来读写该元素的行内样式信息,Element.children属性返回一个类似数组的对象（HTMLCollection实例），包括当前元素节点的所有子元素,Element.childElementCount属性返回当前元素节点包含的子元素节点的个数,Element.firstElementChild属性返回当前元素的第一个元素子节点，Element.lastElementChild返回最后一个元素子节点,Element.nextElementSibling属性返回当前元素节点的后一个同级元素节点，如果没有则返回null,Element.previousElementSibling属性返回当前元素节点的前一个同级元素节点，如果没有则返回null  
### 实例方法  
#### 属性实例方法  
- getAttribute()：读取某个属性的值  
- getAttributeNames()：返回当前元素的所有属性名  
- setAttribute()：写入属性值  
- hasAttribute()：某个属性是否存在  
- hasAttributes()：当前元素是否有属性  
- removeAttribute()：删除属性  
#### Element.querySelector()  
Element.querySelector方法接受 CSS 选择器作为参数，返回父元素的第一个匹配的子元素  
#### Element.querySelectorAll()  
Element.querySelectorAll方法接受 CSS 选择器作为参数，返回一个NodeList实例，包含所有匹配的子元素  
#### Element.getElementsByClassName()  
Element.getElementsByClassName方法返回一个HTMLCollection实例，成员是当前元素节点的所有具有指定 class 的子元素节点  
#### Element.getElementsByTagName()  
Element.getElementsByTagName方法返回一个HTMLCollection实例，成员是当前节点的所有匹配指定标签名的子元素节点  
#### Elements.closest()  
Element.closest方法接受一个 CSS 选择器作为参数，返回匹配该选择器的、最接近当前节点的一个祖先节点（包括当前节点本身）  
#### Element.matches()  
Element.matches方法返回一个布尔值，表示当前元素是否匹配给定的 CSS 选择器  
#### 事件相关方法  
- Element.addEventListener()：添加事件的回调函数  
- Element.removeEventListener():移除事件监听函数  
- Element.dispatchEvent()：触发事件  
#### Element.scrollIntoView()  
Event.scrollIntoView方法滚动当前元素，进入浏览器可见区域  
#### Element.getBoundingClientRect()  
Element.getBoundingClientRect方法返回一个对象，提供当前元素节点的大小、位置等信息，基本上就是 CSS 盒状模型的所有信息  
#### Element.getClientRects() 
Element.getClientRects方法返回一个类似数组的对象，里面是当前元素在页面上形成的所有矩形（所以方法名中的Rect用的是复数）  
#### Element.insertAdjacentElement()  
Element.insertAdjacentElement方法在相对于当前元素的指定位置，插入一个新的节点  
#### Element.insertAdjacentHTML()，Element.insertAdjacentText()  
Element.insertAdjacentHTML方法用于将一个 HTML 字符串，解析生成 DOM 结构，插入相对于当前节点的指定位置;Element.insertAdjacentText方法在相对于当前节点的指定位置，插入一个文本节点  
#### Element.remove()  
Element.remove方法继承自 ChildNode 接口，用于将当前元素节点从它的父节点移除  
#### Element.focus()，Element.blur()  
Element.focus方法用于将当前页面的焦点，转移到指定元素上,Element.blur方法用于将焦点从当前元素移除  
#### Element.click()  
Element.click方法用于在当前元素上模拟一次鼠标点击，相当于触发了click事件  
