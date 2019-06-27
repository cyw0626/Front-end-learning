# jQuery-one学习
## 1.jQuery简介
jQuery是一个JavaScript函数库。
## 2.jQuery安装
```
<head>
  <script src="http://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
  </script>
 </head>
 ```
 ## 3.jQuery语法
 文档就绪事件：（DOM加载完成后才对DOM进行操作）
 ```
 $(document).ready(function(){
    //开始写jQuery代码...
 });
 ```
 > JS入口函数：（网页全部加载完毕）  
 ```
 window.onload=function(){
    //开始写JS代码
 };
 ```
 实例：  
 $(this).hide() —— 隐藏当前元素  
 $("p.test").hide() —— 隐藏所有class="test"的p标签元素  
 $("#test").hide() —— 隐藏所有id="test"的元素
 ## 4.jQuery选择器
 jQuery元素选择器基于元素名选取元素 —— $("p")  
 jQuery#id选择器通过HTML元素的id属性选取指定的元素 —— $("#test")  
 jQuery类选择器可以通过指定的class查找元素 —— $(".test")  
 ## 5.jQuery事件
 常用的jQuery事件方法：  
 ①click()——当按钮点击事件时调用一个函数；  
 ②dbclick() ——双击元素触发事件；  
 ③mouseenter() ——当鼠标指针穿过元素时，触发事件；
 ```
 $("#p1").mouseenter(function(){
    alert('您的鼠标移到了 id="p1" 的元素上!');
 });
 ```
 ④mouseleave() ——当鼠标指针离开元素，触发事件；  
 ⑤mousedown() ——当鼠标移动到元素下方，并按下鼠标时，触发事件；  
 ⑥mouseup() ——当元素上松开鼠标按钮时，触发事件；  
 ⑦hover() ——用于模拟光标悬停事件；  
 ```
 $("#p1").hover(
    function(){
        alert("你进入了 p1!");
    },
    function(){
        alert("拜拜! 现在你离开了 p1!");
    }
);
```
⑧focus() ——当元素获得焦点，触发事件；  
  blur() ——当元素失去焦点，触发事件； 
 ```
  $("input").focus(function(){
    $(this).css("background-color","#cccccc");
  });
  $("input").blur(function(){
    $(this).css("background-color","#ffffff");
  });
 ```
