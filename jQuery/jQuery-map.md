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
## 3.jQuery遍历-后代
jQuery children()方法返回被选元素的所有直接子元素。  
jQuery find()方法返回被选元素的后代元素，一路向下直到最后一个后代。
```
$("div").children("p.1");  //返回类名为1的所有p元素，并且它们是div的直接子元素
$("div).find("*");   //返回div的所有后代
$("div").find("span")  //返回div中所有span元素
```
## 4.jQuery遍历-同胞
jQuery siblings()方法返回被选元素的所有同胞元素。  
jQuery next()方法返回被选元素的下一个同胞元素。  
jQuery nextAll()方法返回被选元素的所有跟随的同胞元素。  
jQuery nextUntil()方法返回介于两个给定参数之间的所有跟随的同胞元素。  
jQuery prev()方法返回被选元素的上一个同胞元素。  
jQuery prevAll()方法返回被选元素的所有上面的同胞元素。  
jQuery prevUntil()方法返回介于两个给定参数之间的所有上面的同胞元素。
```
$("h1").siblings("p");  //返回属于h2的同胞元素的所有p元素
```
## 5.jQuery遍历-过滤
jQuery first()方法返回被选元素的首个元素。  
jQuery last()方法返回被选元素的最后一个元素。  
jQuery eq()方法返回被选元素中带有指定索引号的元素。 //索引号从0开始  
jQuery filter()方法返回匹配的元素。  
jQuery not()方法返回不匹配标准的所有元素。
