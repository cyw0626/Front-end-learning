# CSS高级
## CSS对齐
- 使用margin对齐，width不为100%
```
.center{
  margin-left:auto;
  margin-right:auto;
  width:90%;
  background-color:#b0e0e6;
}
```
- 使用position对齐
```
.left{
  position:absolute;
  left:0px;
  width:500px;
  background-color:#b0e0e6;
}
```
- 使用float属性进行对齐
```
.right{
  float:right;
  width:500px;
  background-color:#b0e0e6;
}
```
## CSS尺寸属性
属性|描述
:---:|:---:
height|设置元素高度
width|设置元素宽度
max-height|设置元素最大高度
max-width|设置元素最大宽度
min-height|设置元素最小高度
min-width|设置元素最小宽度
line-height|设置行高
## CSS分类属性
属性|描述
:---:|:---:
clear|设置一个元素的侧面是否允许其他的浮动元素(left\right\both\none\inherit)
cursor|规定当指向某元素之上时显示的指针类型(default\auto\...)
display|是否及如何显示元素(none\block\inline\...)
float|定义元素在哪个方向浮动(left\right\none\inherit)
position|把元素放置到一个静态的、相对的、绝对的或固定的位置(absolute\fixed\relative\static\inherit)
visibility|元素是否可见或不可见(visible\hidden\collapse\inherit)
## CSS导航条
```
ul
{
list-style-type:none;
margin:0;
padding:0;
overflow:hidden;
}
li
{
float:left;
}
a
{
display:block;
width:60px;
text-decoration:none;
color:black;
background-color:#dddddd;
}
```
## CSS图片库
```
div.img
{
margin:3px;
border:1px solid #bebebe;
height:auto;
width:auto;
float:left;
text-align:center;
}
div.img img
{
display:inline;
margin:3px;
border:1px solid #bebebe
}
div.img a:hover img
{
border:1px solid #333333;
}
div.desc
{
text-align:center;
font-weight:normal;
width:150px;
font-size:12px;
margin:10px 5px 10px 5px
}
```
## CSS图像透明度
使用属性opacity来设定透明度，取值范围为从0到1，值越小，越透明。
## CSS媒介类型
媒介类型定义以何种媒介提交文档，文档显示在显示器、纸媒介或者听觉浏览器上。
```
@media screen
{
p.test{font-family:times;}
}
```
```
