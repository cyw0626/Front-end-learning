# Json学习
## Json简介
- Json：JavaScript对象表示法(JavaScript Object Notation)  
- Json是轻量级的文本数据交换格式
- Json独立于语言，具有自我描述性，更易理解。
## Json与XML比较
### 与XML相同之处
- Json是纯文本
- Json具有自我描述性
- Json具有层级结构
- Json可通过JS进行解析
- Json数据可以通过AJAX传输
### 与XML不同之处
- 没有结束标签
- 更短，读写速度更快
- 能够使用内建的JavaScript eval()方法进行解析
- 使用数组
- 不使用保留字
## Json语法规则
- 数据在名称/值对中
- 数据由逗号分隔
- 大括号保存对象
- 中括号保存数组
### Json名称/值对
Json数据的书写格式是：名称/值对，名称包括在双引号内，跟着一个冒号，然后是值。
Json值可以是：
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
### Json文件
- Json文件的文件类型是.json
- Json文本的MIME类型是"application/json"
## Json对象
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
使用(.)或者([])修改Json对象的值
```
myObj.sites.site1="www.google.com"
**********************************
myObj.sites["site1"]="www.google.com"
```
### 删除对象属性
使用delete删除Json对象属性
## Json数组
循环数组
```
for (i in myObj.sites){
  x += myObj.sites[i] + "<br>" ;
}
********************************
for (i = 0; i < myObj.sites.length; i++){
  x += myObj.sites[i] + "<br>";
}
