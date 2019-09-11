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
## Number对象
1.静态属性
- Number.POSITIVE_INFINITY：正的无限，指向Infinity  
- Number.NEGATIVE_INFINITY：负的无限，指向-Infinity  
- Number.NaN：表示非数值，指向NaN  
- Number.MAX_VALUE  // 1.7976931348623157e+308  
- Number.MIN_VALUE：表示最小的正数（即最接近0的正数，在64位浮点数体系中为5e-324），相应的，最接近0的负数为-Number.MIN_VALUE  
- Number.MAX_SAFE_INTEGER：表示能够精确表示的最大整数，即9007199254740991  
- Number.MIN_SAFE_INTEGER：表示能够精确表示的最小整数，即-9007199254740991    
2.实例方法
- Number.prototype.toSting()将一个数值转为字符串  
> toSting()方法接受一个参数，表示输出的进制
```
(10).toSting(2);
10..toString(2);
10 .toSting(2);
10.0.toSting(2);  
10['toString'](2)   //"1010"
```
- parseInt(string,redix)第一个参数为要转化的字符串，第二个待转化的进制   
- Number.prototype.toFixed()将一个数转化为指定位数的小数，范围为0-20，返回这个小数对应的字符串  
- Number.prototype.toExponential()将一个数转为科学计数法的形式，参数是有效数字位数，范围为0-20，返回一个字符串
```
(1234).toExponential(2) //"1.23e+3"
```
- Number.prototype.toPrecision()将一个数转为指定位数的有效数字，范围为1-20  
- 自定义方法
```
Number.prototype.iterate = function () {
  var result = [];
  for (var i = 0; i <= this; i++) {
    result.push(i);
  }
  return result;
};

(8).iterate()
// [0, 1, 2, 3, 4, 5, 6, 7, 8]
```
