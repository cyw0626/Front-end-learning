# 标准库
## 包装对象
1.包装对象指与数值、字符串、布尔值分别相对应Number、String、Boolean三个原生对象   
2.Number、String、Boolean作为构造函数使用(带有new)时，可以将原始类型的值转为对象；作为普通函数时，可以将任意类型的值转为原始类型的值  
```
var obj1=new Number(123);
var obj2=new String('abc');
var obj3=new Boolean(true);

typeof obj1 //"object"
typeof obj2 //"object"
typeof obj3 //"object"

Number('123') //123
String(123) //'123'
Boolean(123)  //true
```
3.valueOf()方法返回包装对象原始类型的值  
4.toString()方法返回对应字符串形式  
5.某些场合，原始类型的值会自动当作包装对象用，调用包装对象的属性和方法
```
'abc'.length  //3
```
调用结束后，这个临时对象就会被销毁。且自动转换生成的包装对象是只读的，无法修改，无法添加新属性。  
## Boolean()对象
1.所有对象的布尔值都是true
```
if (new Boolean(false)){
  console.log('true');
}   //true
if (new Boolean(false).valueOf()){
  console.log('true');
}   //无输出
```
## 
