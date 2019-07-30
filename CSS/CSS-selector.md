# CSS选择器
## 选择器分组和声明分组
选择器放在左边，然后用逗号隔开，右边的样式应用这个两个选择器所引用的元素。逗号告诉浏览器，规则中包含两个不同的选择器。  
多个样式创建一个列表时，可以将声明分组组合在一起。
## CSS元素选择器  
设置HTML的样式，选择器是某个HTML元素。
## 通配符选择器
通配符选择器显示为*,该选择器可以与任何元素匹配，就像通配符。
```
*{color:red;}
```
## CSS类选择器
**类选择器允许一种独立于文档元素的方式来指定样式。** 
```
<p class="important">0</p>
<p class="important">1</p>
<p class="warning">2</p>
<p class="important warning">3</p>
//多类选择器
.important{font-weight:bold}
.warning{font-style:italic;}
.important warning{background:sliver;}
```
## CSS id选择器
**ID选择器允许以一种独立于文档元素的方式来指定样式。**  
语法：id选择器前面有一个#号。  
类选择器与id选择器的区别：
- id选择器只会使用一次。
- id选择器不能结合使用。
- id能包含更多含义。
> 类选择器和id选择器区分大小写。
## CSS属性选择器
选择器|描述
:---:|:---:
[attribute]|用于选取带有指定属性的元素
[attribute=value]|用于选取带有指定属性和值的元素
[attribute~=value]|用于选取属性值中包含指定词汇的元素
[attribute\|=value]|用于选取带有以指定值开头的属性值的元素，该值必须是整个单词
[attribute^=value]|匹配属性值以指定值开头的每个元素
[attribute$=value]|匹配属性值以指定值结尾的每个元素
[attribute*=value]|匹配属性值中包含指定值的每个元素
## CSS后代选择器
后代选择器可以选择作为某元素后代的元素。
```
<h1>This is an <em> important <em> heading.</h1>
h1 em{color:red;}
```
## CSS子元素选择器
子元素选择器只能选择作为某元素子元素的元素。
```
<h1>This is <strong> very </strong> important.</h1>
<h1>This is <em> really <strong> very </strong> <em> important.</h1>
h1 > strong {color:red;}
```
## CSS相邻兄弟选择器
相邻兄弟选择器可选择紧接在另一元素后的元素，且二者有相同父元素。
```
<body>
  <h1>h1</h1>
  <p>p1</p>
  <p>p2</p>
</body>
h1 + p {margin-top:50px;}   
//选择紧接在h1元素后出现的段落，h1和p元素拥有共同的父元素。
```
## CSS伪类
CSS伪类用于向某些选择器添加特殊的效果。
属性|描述
:---:|:---:
:link|向未被访问的链接添加样式
:active|向被激活的元素添加样式
:hover|当鼠标悬浮在元素上方时，向元素添加样式
:visited|向已被访问的链接添加样式
:focus|向拥有键盘输入焦点的元素添加样式
:first-child|向元素的第一个子元素添加样式
:lang|向带有指定lang属性的元素添加样式
>> 在CSS定义中，a:hover必需被置于a:link和a:visited之后，a:active必需被置于a:hover之后
```
<html>
<head>

<style type="text/css">
q:lang(no)
   {
   quotes: "~" "~"
   }
</style>

</head>

<body>
<p>文字<q lang="no">段落中的引用的文字</q>文字</p>
</body></html>

//文字~段落中的引用的文字~文字
```
