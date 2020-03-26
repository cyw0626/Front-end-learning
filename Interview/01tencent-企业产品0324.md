# 腾讯企业产品实习(2020-3-24)  
## 1.em，rem，vh，vm单位    
### ①px、em、rem、%、vw、vh、vm  
- px:px是像素pixel的缩写，代表图像中最小的点，一张位图就是千千万万这样的点构成的。    
- em:em是随自身font-size变化的单位，具有继承的特点。如果自身定义了font-size按自身来计算(浏览器默认字体16px),**整个页面的1em不是固定值**。  
- rem：remrem是root-em的缩写，相对于根元素html的front-size，不会像em那样依赖父元素字体的大小。  
- %：Ⅰ 对于普通定位元素就是我们理解的父元素；Ⅱ position:absolute相对于已定位的父元素；Ⅲ position：fixed的元素相对于viewport(可视窗口)  
- vw:vw是视窗宽度viewport width的缩写，是浏览器视窗宽度的1%。  
- vh:vh是视窗高度viewport height的缩写，是浏览器视窗高度的1% 。 
- vm：vm是浏览器视窗高度或宽度中较小的那个的1%。
### ②为什么一开始在css样式中给body设置font-size：62.5%？  
便于单位换算，16px*62.5%=10px,这样1em=10px，方便em的使用。  

### ③在谷歌浏览器运行以下代码，1em是显示多大的字体？  
```
body{
  font-size: 62.5%;
}
p{
  font-size:1em;
}
```
Chrome强制最小字体为12号，即使设置成10px最终都会显示成12px，当把html的font-size设置成10px，子节点rem的计算还是以12px为基准。  
### ④css还有哪些长度单位？  
in寸,cm厘米，mm毫米，t-point,pc-pica等,1in=2.54cm=25.4mm=72pt=6pc=96px。
## 2.div水平垂直居中(6种方法）  
### ①绝对方法定位：【margin:auto实现绝对定位元素的居中】
```
div{
  width:200px;
  height:200px;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  right:0;
  margin:auto;
}
```
解释下原理:  
1.在普通内容流中，margin:auto的效果等同于margin-top:0;margin-bottom:0。  
2.position:absolute使绝对定位块跳出了内容流，内容流中的其余部分渲染时绝对定位部分不进行渲染。  
3.为块区域设置top: 0; left: 0; bottom: 0; right: 0;将给浏览器重新分配一个边界框，此时该块块将填充其父元素的所有可用空间，所以margin 垂直方向上有了可分配的空间。  
4.再设置margin 垂直方向上下为auto，即可实现垂直居中。（注意高度得设置）。  
### ②绝对定位【margin负间距】  
```
div{
    width:200px;
    height:100px;
    position:absolute;
    top:50%;  
    left:50%;
    margin-top:-50px;
    margin-left:-100px;
}
```
原理：  
对当前元素的position设置为absolute并且相对于父元素定位,先设置left:50%;top:50%使当前元素的**左上角**处于父元素的中心位置,   
之后再应用负margin特性使其中心位于父元素的中心.
### ③绝对定位【Transform变形】  
```
div{
    width:200px;
    height:200px;
    position:absolute;
    top:50%;  /* 定位父级的50% */
    left:50%;
    transform: translate(-50%,-50%);  /* 自己的50% */
}
```
让left和top都是50%，这在水平方向上让div的最左与屏幕的最左相距50%，垂直方向上一样，所以再用transform向左（上）平移它自己宽度（高度）的50%，也就达到居中效果了。  
### ④弹性盒模型【css不定宽高】  
```
body {
    height:800px; /*去掉高度，只能垂直居中*/
    display:flex;
    align-items:center; /*align-items属性定义flex子项再flex容器当前行的纵轴方向上的对齐方式*/
    justify-content: center;  /* justify-content用于设置或检索弹性盒子元素在横轴方向上的对齐方式*/

}
div{
    width:200px;
    height:200px;
}
```
### ⑤父盒子设置为table-cell【vertical-align：middle;text-align:center】  
```
<div class="table-cell">
  <p>Text</p>
</div>
.table-cell{
  display:table-cell;
  vertical-align:middle;  /*定义行内元素的基线相对于该元素所在行的基线的垂直对齐*/
  text-align:center;
  width:200px;
  height:200px;
  border:1px solid #666;
}
```
### ⑥calc()函数动态计算   
```
<div class="calc">
  <div class="child">Text</div>
<div>
.calc{
  position:relative;
  border:1px solid #ccc;
  width:400px;
  height:160px;
}
.calc.child{
  position:absolute;
  width:200px;
  height:50px;
  left:-webkit-calc((400px - 200px)/2);
  top:-webkit-calc((160px - 50px)/2);
  left:-moz-calc((400px - 200px)/2);
  top:-moz-calc((160px - 50px)/2);
  left:calc((400px-200px)/2);
  top:calc(160px-50px)/2);
}
```
## 3.jquery中index是什么  
index()返回指定元素相对于其他指定元素的index位置。  
## 4.let和var，const区别，变量提升     
### ①块级作用域   
块级作用域/全局作用域/函数作用域
定义：多个操作封装在大括号里的语句，没有返回值。  
原因：Ⅰ内层变量可能覆盖外层变量Ⅱ计数循环变量泄露为全局变量  
作用：外层作用域无法读取内层作用域变量，内层作用域可以定义外层作用域的同名变量，不需要立即执行匿名函数  
### ②let/var/const  
#### var除了在函数作用域中定义，在全局和会计作用域中定义全局都可以访问到   
#### 暂时性死区：只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响  
Ⅰlet声明的变量只在块级作用域中有效Ⅱlet不存在变量提升，绑定在暂时性死区（块级作用域内，let没声明，就不可以使用）Ⅲ不能重复声明  
- var可以跨块访问，不能跨函数访问，可以重复定义  
- let只能在块作用域访问，不可以重复定义，存在TDZ  
- const定义常量，只能在块作用域访问，使用时必须初始化且不能修改  
## 5.call和apply的使用，Array.prototype.slice.call(arguments)怎么转化的    
### 在ECMAScript中，每个函数都包含两个非继承而来的方法：apply()和call(),这两个方法的作用都是在特定的作用域内调用函数，主要作用和bind一样，用来改变函数体内的this的指向，或者说是在函数调用时改变上下文。  
#### obj.call(thisObj,arg1,arg2,...)/obj.apply(thisObj,[arg1,arg2,...])  
call和apply的作用是改变函数运行时上下文环境，改变this的指向，thisObj调用了obj里的方法。  
bind同样改变了this指向的功能，但它不会立即执行，而是重新创建一个绑定函数，新函数调用时，使用bind()方法里第一个参数作为this.  
- 绑定事件函数  
- 循环回调
```
for(var i=0;i<3;i++){
    (function(j){
      setTimeout(function(){console.log(j);},100);
    })(i)
}
/////////////////////////////////////////////////
function fn(i){console.log(i)};
for(var i=0;i<3;i++){
  setTimeout(fn.call(null,i),100);
}
```
- 实现继承  
```
 var Person = function(name,age) {
   this.name = name;
   this.age = age;
 }

 var P1 = function(name,age) {
   // 借用构造函数的方式实现继承
   // 利用call 继承了Person
   Person.call(this,name,age)
 }
 P1.prototype.getName = function() {
   console.log("name: "+this.name+", age: "+this.age);
 }

 var newPerson = new P1("popo",20);   // logs name: popo, age: 20
 newPerson.getName();
 ```
 - 数组的验证方法  
 - 类数组转换为数组  
```
// 实现一个简单的数组 'unshift'方法
   Array.prototype.unshift = function(){
    this.splice.apply(this,
      [0,0].concat(Array.prototype.slice.apply(arguments)));  //在头上加入这些数组
      return this.length;
  }
```
> 首先，利用this.splice.apply(),其中splice，可以直接从数组中移除或者插入变量。apply()则以数组的形式传递参数，需要利用concat拼接数组。 
**函数被调用时，在函数内部会得到类数组arguments，它拥有一个length属性，但是没有任何数组的方法。所以，将slice方法中的this指向arguments，获取到arguments的长度，从而确定方法的start和end下标，得到一个数组变量。**
同样适用的还有，DOM里面的NodeList对象，它也是一种类数组对象。
### 题目  
```
function foo(){
	var id=3;
return function(){
	setTimeout(function(){
	console.log(this.id);
},100);
}
}
var id=1;
foo.call({id:2})();
```
> 因为setTimeout是匿名函数，this指向window,所以this.id为1.   
## 6.xff，xss安全攻击   
### xss  
[xss](https://blog.csdn.net/u014182411/article/details/80200631)
Xss:css(cross site script),跨站点脚本攻击  
攻击者向有xss漏洞的网站注入恶意的Html代码，当其他用户浏览网页时候执行代码控制用户浏览器进行一些破坏。
危害：  
- cookie挟持  
- 破坏账户信息  
- 获取用户账户信息  
防御：  
- 防御cookie挟持--HttpOnly:通过服务器设置cookie为HttpOnly，阻止js读写cookie信息； 
- 输入检测--过滤特殊字符，按照白名单  
- 输出检测--转义或编码特殊字符  
### xff  
XFF：X-Forwarded-For，简称XFF头，代表客户端，也就是HTTP的请求端的真实的IP，只有通过只有在通过了HTTP 代理或者负载均衡服务器时才会添加该项。  
标准格式如下：X-Forwarded-For: client1, proxy1, proxy2。    
伪造方式：通过浏览器插件或抓包改包工具或脚本修改header.  
**大型网站用户的Http请求经过反向代理服务器转发，服务器收到的Remote Address就是反向代理服务器的地址，用户真实IP丢失。**  
- 在进行与安全有关的操作时，只能通过Remote Address获取用户的IP地址，不能相信任何请求头。  
- 当然，在使用nginx等反向代理服务器的时候，是必须使用X-Forward-For来获取用户IP地址的（此时Remote Address是nginx的地址），因为此时X-Forward-For中的地址是由nginx写入的，而nginx是可信任的。不过此时要注意，要禁止web对外提供服务。  
### CSRF  
CSRF又称XSRF(cross-site request forgery)跨站请求伪造，在客户端执行恶意代码，不注重窃取用户cookie。  
CSRF保护的对象是那些可以直接产生数据改变的服务，对于读取随数据的服务，不需要进行CSRF的保护。  
防御：  
- 验证码：强制用户确定请求是自己发出的  
- 验证Http Referer字段：refer是http请求头部的一个字段，包含了当前请求页面的来源页面的地址  
- 添加Token并验证：表单放在隐藏的input中/cookie中，通过post的http body发送  
