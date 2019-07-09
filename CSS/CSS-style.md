# CSS-two学习
## CSS背景
- 背景属性  
将所有背景属性写在一个background声明中。
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
## CSS文本
- 缩进文本  
使用text-indent属性，所有元素的第一行都可以缩进一个给定的长度。
- 水平对齐  
使用text-align进行文本行互相之间的对齐，left、right、center和justify分别是文本元素的左对齐、右对齐、居中和两端对齐。
- 字间隔  
word-spacing属性可以改变单词之间的标准间隔。
- 字母间隔  
letter-spacing属性可以改变字符之间的间隔。
- 字符转换  
使用text-transform属性处理文本的大小写。  
默认值none对文本不做任何改动，uppercase和lowercase将文本转换为全大写和全小写，capitalize只对每个单词的首字母大写。
- 文本装饰  
使用text-decoration属性。  
underline会对元素加下划线；overline在顶端增加上划线，line-through在文本中间画一个贯穿线，blink会让文本闪烁。
- 处理空白符
使用white-space属性会影响到用户代理对源文档中的空格、换行和tab字符的处理。
normal会丢掉多余的空白符，pre保留所有空白，nowrap防止元素换行，pre-wrap保留所有，pre-line合并所有空白符，保留换行符。
