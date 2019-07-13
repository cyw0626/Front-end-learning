# CSS定位
## CSS定位概述
通过display属性改变生成框的类型，可以将display属性设置为block，让行内元素表现得像块级元素一样。    
还可以设置display为none，让生成的元素没有框，这样该框的内容就不再显示。  
position属性值含义：  
- static元素框正常生成。
- relative元素框偏移某个距离。元素仍保持其未定位前的形状，其原本空间仍保留。
- absolute元素框从文档流完全删除，并相对于其包含块定位。
- fixed元素框的表现类似于将position设置为absolute。
## CSS相对定位
>使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。移动元素会导致它覆盖其他框。
## CSS绝对定位
```
#box-absolute{
  position:absolute;
  left:30px;
}
```
## CSS浮动
**浮动的框可以向左或向右移动，直到它的外边缘碰到了包含框或另一个浮动框的边框为止。**  
通过float属性实现元素的浮动。  
使用clear属性清除浮动。
```
.news {
  background-color: gray;
  border: solid 1px black;
  float: left;
  }
.news img {
  float: left;
  }
.news p {
  float: right;
  }
<div class="news">
<img src="news-pic.jpg" />
<p>some text</p>
</div>
```
