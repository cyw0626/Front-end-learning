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
