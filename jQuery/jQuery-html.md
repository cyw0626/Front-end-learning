# jQuery-three学习
## 1.jQuery获取内容和属性
>DOM=Document Object Model(文档对象模型)
```
$(selector).text()  //设置返回所选元素的文本内容
$(selector).html()  //设置或返回所选元素内容（包括HTML标记）
$(selector).val()   //设置或返回表单字段值
```
jQuery attr()方法用于获取属性值。 
```
$(selector).attr() 
```
对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。  
对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。  
具有true和false两个属性的属性，如checked,selected或者disabled使用prop()。
## 2.jQuery设置内容和属性  
>$(selector).text("you want to change")  //回调使用origText  
>$(selector).html("you want to change")  //回调使用origText  
>$(selector).val("you want to change")  //回调使用origValue
回调必需index:
```
$("#test2").html(function(i,origText){
   return "旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")"; 
});
```
**修改链接及title**
```
$(document).ready(function(){
  $("button").click(function(){
    $("#runoob").attr({
      "href" : "http://www.runoob.com/jquery",
      "title" : "jQuery 教程"
    });
	// 通过修改的 title 值来修改链接名称
	title =  $("#runoob").attr('title');
	$("#runoob").html(title);
  });
});
```
