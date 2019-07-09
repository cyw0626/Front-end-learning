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
## CSS字体
- 指定字体    
使用font-family属性定义文本的字体。
>当字体名中有一个或多个空格，或者字体名包括#和$之类的符号，需要在声明中加单引号。
- 字体风格  
font-style属性规定斜体文本。normal文本正常显示，italic文本斜体显示，oblique文本倾斜显示。
- 字体变形  
font-variant属性设定小型大写字母。
- 字体加粗
font-weight设置文本的粗细。100~900指定了9级加粗度，400~normal，700~bold。
- 字体大小  
font-size属性设置文本的大小。
>使用em或百分比来设置字体大小在浏览器中调整文本。
## CSS链接
- a:link {color:red;} //未被访问的链接
- a:visited{color:green;} //已被访问的链接
- a:hover{color:blue;}  //鼠标指针移动到链接上
- a:active{color:yellow;}  //正在被点击的链接
## CSS列表
list-style可以包含列表标志类型、标志图像、标志位置。
- list-style-type用于列表标志类型，可以为square、circle。
- list-style-image将标志展示为图像，可以为url(...)。
- list-style-position出现在列表项内容之外还是内部，参数为inside或者outside。
## CSS表格
- 表格边框  
使用border属性设置表格边框。
- 折叠边框  
border-collapse属性将表格边框折叠为单一边框。
```
table{
  border-collapse:collapse;
}
```
- 表格宽度和高度  
通过width和height定义表格宽度和高度。
- 表格文本对齐
text-align设置水平对齐方式；vertical-align设置垂直对齐方式。
- 表格内边距
padding属性控制内容与边框的距离。
- 表格颜色
