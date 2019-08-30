# JavaScript数据类型
## null,undefined和布尔值
1.null是一个表示空的对象，转为数值时为0；undefined是一个表示“此处无定义”的原始值，转为数值时为NaN.  
2.下列运算符返回布尔值：
- 前置逻辑运算符：!
- 相等运算符：===,!==,==,!=
- 比较运算符：>,>=,<,<=  

3.转化为false的值有：  

| 代表值 | 结果 |
| :---: | :---: |
| undefined、null、false、0、NaN、""或''(空字符串) | false | 
> 空数组[]和空对象{}都是true
## 数值
1.JavaScript内部所有数以64位浮点数形式存储。  
2.JavaScript浮点数的64个二进制位，从最左边开始：  
- 第1位：符号位，0表示正数，1表示负数
- 第2位到第12位(共11位):指数部分  
- 第13位到第64位(共54位):小数部分(即有效数字)
符号位决定了一个数的正负，指数部分决定了数值的大小，小数部分决定了数值的精度。

3.特殊数值：  
- +0和-0  
- NaN(Not a Number)
- Infinity无穷  

4.与数值相关的全局方法  
- parseInt() ①将字符串转为整数②两个参数时将第二个参数位进制(2-36)转换为十进制
- parseFloat() 将字符串转换为浮点数
- isNaN 判断一个值是否为NaN
- isFinite返回一个布尔值表示某个值是否为正常的数值
## 字符串
1.字符串就是零个或多个排在一起的字符，放在单引号或双引号内。  
2.反斜杠(\\)在字符串内有特殊含义，用来表示一些特殊字符。  
3.字符串可以被视为字符数组，可以使用数组的方括号运算符，返回某个位置的字符和用length返回长度。  
## 对象
1.对象就是一组"键值对"的集合，是一种无序的复合数据集合。  
2.定义方法
```
var obj={
  p:function(x){
    return x*x;
  }
}
```
3.不同的变量名指向同一个对象，它们指向同一个内存地址，修改对象中一个变量，会影响其他所有变量。  
4.属性的操作：  
- 读取对象属性obj.p、obj['p']
- 属性后续赋值
- 属性的删除delete obj.p
- 属性是否存在'p' in obj
- 属性的遍历:for...in循环
```
for(var i in obj)
{
  consloe.log('键名：',i);
  console.log('键值：',obj[i]);
}
```
## 数组
1.数组是按次序排列的一组值。  
2.任何类型的数据，都可以放入数组。  
> 3.数组本质上属于一种特殊的对象。  

4.①数组的length属性，返回数组的成员数量。  
②清除数组的一个方法，就是将length属性设为0。  
5.检查某个键名是否存在的运算符in适用于数组。空位的话in返回false。  
6.for...in不仅会遍历数组所有的数字键，还会遍历非数字键。  
7.数组的遍历：
```
var a=[1,2,3];
//for循环
for(var i=0;i<a.length;i++)
{
  console.log(a[i]);
}
//while循环
var i=0;
while(i<a.length)
{
  console.log(a[i]);
  i++;
}
//逆向遍历
var l=a.length;
while(l--)
{
  console.log(a[l]);
}
//forEach方法
a.forEach(function(i){
  console.log(i);
});
```
8.数组的空位可以读取返回undefined  
9.delete删除一个数组成员会形成空位，不会影响length属性  
10.undefined会被forEach、for...in、Object.keys方法遍历，空位会被跳过  
11.类似数组的对象：函数的arguments对象，大多数DOM元素集，字符串...   
①数组的slice方法将“类似数组的对象”变为真正的数组：
```
var arr=Array.prototype.slice.call(arrayLike);
```
②call()把数组的方法放到对象上：
```
function print(value,index){
  console.log(index+':'+value);
}
Array.prototype.forEach.call(arrayLike,print);
```
