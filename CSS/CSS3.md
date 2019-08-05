# CSS3
## CSS边框
- CSS圆角边框
```
border-radius:25px;
```
- CSS阴影边框
```
box-shadow: 10px 10px 5px #888888;
```
- CSS边框图片
```
border-image:url(border.png) 30 30 round;
border-image:url(border.png) 30 30 stretch;
```
## CSS背景
- CSS background-size属性规定背景图片的尺寸
```
background:url(bg_flower.gif);
background-size:63px 100px;
background:no-repeat;
}
```
- CSS background-origin属性规定背景图片的定位区域
```
background:url(bg_flower.gif);
background-repeat:no-repeat;
background-origin:content-box;
```
## CSS文本效果
- CSS文本阴影
```
text-shadow:5px 5px 5px #FF00000;
```
- CSS自动换行
```
word-wrap:break-word;
```
## CSS 2D转换
函数|描述
:---:|:---:
matrix(n,n,n,n,n,n)|定义2D转换，使用六个值的矩阵
translate(x,y)|定义2D转换，沿着X和Y轴移动
translateX(n)|定义2D转换，沿着X轴移动元素
translateY(n)|定义2D转换，沿着Y轴移动元素
scale(x,y)|定义2D缩放转换，改变元素的宽度和高度
scaleX(n)|定义2D缩放转换，改变元素的宽度
scaleY(n)|定义2D缩放转换，改变元素的高度
rotate(angle)|定义2D旋转，在参数中规定角度
skew(x-angle,y-angle)|定义2D倾斜旋转，沿着X和Y轴
skewX(angle)|定义2D倾斜转换，沿着X轴
skewY(angle)|定义2D倾斜转换，沿着Y轴
## CSS3 3D转换
- rotateX()元素围绕其X轴以给定度数进行旋转;rotateY()元素围绕其  Y轴以给定的读书旋转。
```
transform:rotateX(120deg);
transform:rotateY(120deg);
```
## CSS3过渡
CSS3过渡是元素从一种样式逐渐改变为另一种的结果。  
- 规定希望效果
- 规定效果时长
```
div
{
transition:width 2s,height 2s,transform 2s;
}
div:hover
{
width:200px;
height:200px:
transform:rotate(180deg);
}
```
过渡属性：  

属性|描述
:---:|:---:
transition|简写属性，用于在一个属性中设置四个过渡属性
transition-property|规定应用过渡的CSS属性的名称
transition-duration|规定过渡效果花费的时间，默认为0
transition-timing-fuction|规定过渡效果的时间曲线，默认为ease
transition-delay|规定过渡效果何时开始，默认为0
```
transition:width 1s linear 2s;
```
## CSS3动画
@keyframes规则用于创建动画，在@keyframes中规定某项CSS样式，就能创建由当前样式逐渐改变为新样式的效果。  
```
div
{
animation: mycartoon 5s linear 2s infinite alternate;
}
@keyframes mycartoon
{
0% {background：red;}
50% {background：yellow;}
100% {background：green;}
}
```
## CSS3多列
