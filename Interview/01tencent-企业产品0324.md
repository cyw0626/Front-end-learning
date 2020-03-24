# 腾讯企业产品实习(2020-3-24)  
## 1.em，rem，vh，vm单位    
### ①px、em、rem、%、vw、vh、vm  
- px:px是像素pixel的缩写，代表图像中最小的点。  
- em:em是随自身front-size变化的单位，一般是1em=16px。  
- rem：rem随html的front-size变化的单位。  
- %：Ⅰ；Ⅱposition:abosolute便是相对于父元素；Ⅲ
- vw:vw是viewport width的缩写，是浏览器视图宽度的1%。  
- vh:vh是viewport height的缩写，是浏览器视图高度的1% 。 
- vm：vm是浏览器视图高度或宽度中最小的那个的1%。
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
默认12号。
### ④css还有哪些长度单位？  
in,mm,cm等
## 2.div水平垂直居中  
## 3.jquery中index是什么  
## 4.let和var区别，变量提升     
## 5.call和apply的使用，Array.prototype.slice.call(arguments)怎么转化的      
## 6.xff，xss安全攻击   
