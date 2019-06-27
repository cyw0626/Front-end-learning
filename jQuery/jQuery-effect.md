# jQuery-two学习
## 1.jQuery显示隐藏  
```
$(selector).hide(speed,callback);  
$(selector).show(speed,callback);  
```
可选的speed参数规定隐藏/显示的速度，可以取："slow"、"fast"或毫秒。  
可选的callback参数是隐藏或显示完成后所执行的函数名称。(callback既可以是函数名，也可以是匿名函数)  
```
$(selector).toggle(speed,callback);    //切换hide()和show()方法 
```
## 2.jQuery淡入淡出
```
$(selector).fadeIn(speed,callback);   //淡入已隐藏元素
$(selector).fadeOut(speed,callback);  //淡出可见元素
$(selector).fadeToggle(speed,callback);   //fadeIn()与fadeOut()方法的切换
$(selector).fadeTo(speed,opacity,callback);   //渐变为给定的不透明度
```
## 3.jQuery滑动
```
$(selector).slideDown(speed,callback);    //向下滑动元素
$(selector).slideUp(speed,callback);    //向上滑动元素
$(selector).slideToggle(speed,callback);    //向上向下切换元素
```
## 4.jQuery动画
**如需对位置进行操作，要记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute！**
```
$(selector).animate({params},speed,callback); 
```
必需的params参数定义形成动画的CSS属性;  
可选的speed参数规定效果的时长；  
可选的callback参数是动画完成后所执行的函数名称。
**当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名。**
### jQuery animate()——使用相对值
定义相对值，该值相对于元素的当前值。
```
$("button").click(function(){
  $("div").animate({
    left:'250px',
    height:'+=150px',
    width:'+=150px'
  });
});
```
### jQuery animate()——使用预定义值
```
$("button").click(function(){
  $("div").animate({
    height:'toggle'
  });
});
```
### jQuery animate()——使用队列功能
<div>元素右移，并且字号增加。
```
$("button").click(function(){
  var div=$("div");
  div.animate({left:'100px'},"slow");
  div.animate({fontSize:'3em'},"slow");
});
```
