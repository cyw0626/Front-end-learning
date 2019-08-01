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
## CSS 3D转换
