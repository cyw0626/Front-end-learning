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
