# jQuery-four学习
## 1.jQuery遍历
jQuery遍历，意味“移动”，用于根据其相对于其他元素的关系来“查找”HTML元素。以某项选择开始，并沿着这个选择移动，直到抵达期望的元素为止。
## 2.jQuery遍历-祖先
jQuery parent()方法返回被选元素的直接父元素。  
jQuery parents()方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素。  
jQuery parentsUntil()方法返回介于给顶元素之间的所有祖先元素。
```
$("span").parent();  //返回每个span元素的的直接父元素
$("span").parents();  //返回所有span元素的所有祖先
$("span").parents("ul");  //返回所有span元素的所有祖先，并且它是ul元素
$("span").parentsUntil("div");  //返回介于span与div元素之间的所有祖先元素
```
