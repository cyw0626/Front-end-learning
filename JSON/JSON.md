# JSON学习
## Json简介
- JSON：JavaScript对象表示法(JavaScript Object Notation)  
- JSON是轻量级的文本数据交换格式
- JSON独立于语言，具有自我描述性，更易理解。
## JSON与XML比较
### 与XML相同之处
- JSON是纯文本
- JSON具有自我描述性
- JSON具有层级结构
- JSON可通过JS进行解析
- JSON数据可以通过AJAX传输
### 与XML不同之处
- 没有结束标签
- 更短，读写速度更快
- 能够使用内建的JavaScript eval()方法进行解析
- 使用数组
- 不使用保留字
## JSON语法规则
- 数据在名称/值对中
- 数据由逗号分隔
- 大括号保存对象
- 中括号保存数组
### JSON名称/值对
JSON数据的书写格式是：名称/值对，名称包括在双引号内，跟着一个冒号，然后是值。
JSON值可以是：
- 数字
- 字符串(在双引号中)
- 逻辑值
- 数组(在中括号中)
- 对象(在大括号中)
- null
```
{
"sites":[
{"name":"GitHub"},
{"flag":true}]
}
```
### JSON文件
- JSON文件的文件类型是.json
- JSON文本的MIME类型是"application/json"
## JSON对象
### 访问对象值
```
var myObj,x;
myObj={"name":"GitHub","site":null};
x=myObj.name;
*************
x=myObj["name"];
```
### 循环对象
**只能使用([])形式
```
for (x in myObj){
  document.getElementById("demo").innerHTML += x +"<br>";
}
```
### 修改值  
使用(.)或者([])修改JSON对象的值
```
myObj.sites.site1="www.google.com"
**********************************
myObj.sites["site1"]="www.google.com"
```
### 删除对象属性
使用delete删除JSON对象属性
## JSON数组
### 循环数组
```
for (i in myObj.sites){
  x += myObj.sites[i] + "<br>" ;
}
********************************
for (i = 0; i < myObj.sites.length; i++){
  x += myObj.sites[i] + "<br>";
}
```
### 删除数组
delete运算符并不是彻底删除元素，而是删除它的值，但仍会保留空间。
```
delete myObj.sites[1];
```
## JSON.parse()
在接收服务器数据时一般是字符串，使用JSON.parse()将数据转换为JavaScript对象。
### 语法
```
JSON.parse(text[,reviver])  //text必需的JSON字符串，reviver可选的转换结果函数
```
### 异常-JSON不能存储Date对象
如果需要存储Date对象，需要将其转换为字符串。
```
var text = '{"name":"GitHub","initDate":"2019-7-6"};
var obj=JSON.parse(text);
obj.initDate = new Daate(obj.initDate);
```
### 解析函数
JSON不允许包含函数，需要将函数作为字符串存储，再将字符串转化为函数。
>eval()还要用一对圆括号包起来，迫使eval函数在处理JS代码时将括号内的表达式转化为对象，而不是语句。
```
var text = '{"name":"GitHub","fc":"function(){return 1000;}"}';
var obj = JSON.parse(text);
obj.fc=eval("("+obj.fc+")");  // eval(string)函数可计算某个字符串，并执行其中的JS代码。
```
