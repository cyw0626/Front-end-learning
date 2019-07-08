# CSS-two学习
## CSS背景
- 背景色
使用background-color属性为元素设置背景色。
- 背景图像
使用background-image属性把图像放入背景
```
body{
  background-image:url(.../bgi.gif);
}
```
- 背景重复
使用background-repeat属性对背景图像进行平铺。
```
background-repeat:repeat-x;  //整个平面
background-repeat:repeat-x;  //水平方向
background-repeat:repeat-y;  //垂直方向
```
- 背景定位
使用background-position属性改变图像在背景中的位置。  
可以使用关键字center,top,...;或者百分数值;或者长度值(相对于左上角)。
- 背景关联
使用background-image防止文档滑动时，背景图像的滚动。
