# 标准库
## Object对象
1.Object()本身是一个函数，可将任意值转为对象。  
2.Object构造函数：
```
var obj=new Object();
====================
var obj={};
```
3.Object静态方法指部署在Object对象自身的方法。  
4.Object.keys()参数是一个对象，返回一个数组/Object.getOwnPropertyNames()可返回不可枚举属性  
5.Object.valueOf()默认情况下返回对象自身  
6.Object.prototype.toString()默认情况下返回类型的字符串  
```
//判断数据类型
var type=function (o){
  var s=Object.prototype.toString.call(o);
  return s.match(/\[object(.*?)\]/)[1].toLowerCase();
};

typr({});   //"object"
```
7.Object.prototype.toLocaleString()返回针对某些地域特定值  
8.Object.prototype.hasOwnProperty()参数为一个字符串，返回一个布尔值，表示该实例对象自身是否具有该属性  
