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

回调必需index，function里的i是必需的:
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
## 3.jQuery添加元素
jQuery append()方法在被选元素的结尾插入内容（元素内部）。  
jQuery prepend()方法在被选元素的开头插入内容（元素内部）。  
jQuery after()方法在被选元素之后插入内容。  
jQuery before()方法在被选元素之前插入内容。
```
$("p").append("追加文本");
$("p").prepend("在开头追加文本");
$("img").after("在被选后面添加文本");
$("img").before("在被选前面添加文本");

function appendText(){
   var txt="<p>文本</p>";
   $("body").append(txt);
}
<button onclick="appendText()">追加文本</button>
```
## 4.jQuery删除元素
jQuery remove()方法删除被选元素及其子元素。  
jQuery empty()方法删除被选元素的子元素。
```
$("#div1").remove();
$("#div1").empty();
$("p").remove(".italic");   //过滤同级被删除元素
```
## 5.jQuery获取并设置CSS类
addClass()向被选元素添加一个或多个类。  
removeClass()从被选元素删除一个或多个类。  
toggleClass()对被选元素进行添加/删除类的切换操作。
css("propertyname")方法返回指定的CSS属性。  
css("propertyname","value")设置指定CSS属性。
```
$("div").addClass("blue);
$("div").removeClass("blue");
$("div").toggleClass("blue");
$("p").css("background-color);
"("p").css({"background-color":"yellow","font-size":"200%"});
```
width()方法设置或返回元素的宽度（不包括内边距、边框或外边距）。  
height()方法设置或返回元素的高度（不包括内边距、边框或外边距）。  
innerWidth() 方法返回元素的宽度（包括内边距）。  
innerHeight() 方法返回元素的高度（包括内边距）。  
outerWidth() 方法返回元素的宽度（包括内边距和边框）。  
outerHeight() 方法返回元素的高度（包括内边距和边框）。
