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
    height:200px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-100px;
    margin-left:-100px;
}
```
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
### ④
## 3.jquery中index是什么  
## 4.let和var区别，变量提升     
## 5.call和apply的使用，Array.prototype.slice.call(arguments)怎么转化的      
## 6.xff，xss安全攻击   
