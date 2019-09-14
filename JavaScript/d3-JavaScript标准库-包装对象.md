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
## String对象
1.字符串对象是一个类似数组的对象
```
(new String('abc'))[1]  //"b"
```
2.String对象提供的静态方法——String.fromCharCode(),该方法的参数是一个或多个Unicode码点，返回值是这些码点组成的字符串  
> String.fromCharCode()不支持Unicode码点大于0xFFFF(65536)的字符    

3.字符串的length属性返回字符串长度  
4.实例方法  
- String.prototype.charAt()方法返回指定位置的字符，参数为负数或大于字符串长度，返回空字符串  
- String.prototype.charCodeAt()返回字符串指定位置的码点  
- String.prototype.concat()用于连接两个字符串，返回一个新的字符串，不改变原字符串  
- String.prototype.slice()从原字符串取出字符串并返回，不改变原字符串。第一个参数为子字符串的开始位置，第二个为子字符串的结束位置  
- String.prototype.substring()类似slice,区别①第一个参数大于第二个参数，会更换两参数位置②负数会自动转为0  
- String.prototype.substr()类似slice(),第一个参数是子字符串的开始位置，第二个是子字符串的长度。如果第二个参数是负数会自动转为0  
- String.prototype.indexOf()确定一个字符串在另一个字符串第一次出现的位置，返回-1表示不匹配。第一个参数为待匹配字符串，第二个为从该位置开始匹配    
- String.prototype.lastIndexOf()从尾部开始匹配   
- String.prototype.trim()去除字符串两端的空格(制表符、换行符、回车符)，返回一个新的字符串，不改变原字符串  
- String.prototype.toLowerCase()将字符串转为小写，String.prototype.toUpperCase()抓为大写  
- String.prototype.match()确定原字符串是否匹配某个字符串，返回一个数组，成员为匹配的第一个字符串，没有返回null  
返回的数组具有index和input属性，分别表示匹配字符串开始的位置和原始字符串  
- String.prototype.search()返回值为匹配的第一个位置，没有返回-1，String.prototype.replace()替换匹配的字符串，一般只替换第一个匹配   
- String.prototype.split()按给定规则分割字符串，返回一个由分割出来的子字符串组成的数组  
- String.prototype.localCompare()比较两个字符串，考虑自然语言顺序，第二个参数可以指定所使用的语言
