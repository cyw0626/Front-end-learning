# JavaScript数据类型
## 函数
### 函数的声明
1.function命令后面是函数名，函数名后面是一对圆括号，里面传入函数的参数。函数体放在大括号里面。
```
function print(s){
  console.log(s);
}
```
2.变量赋值
```
var print=function(s){
  console.log(s);
};
//调用print(s)
```
3.Function构造函数
```
var add=new Function(
  'x',
  'y',
  'return x+y'  //只有最后一个参数被当作函数体
);
```
4.函数调用自身称为递归  
5.在JavaScript中函数称为第一等公民  
6.采用function声明函数，函数名声明提升至代码头部
### 函数属性和方法
1.函数的name属性返回函数的名字  
2.函数的length属性返回函数预期传入的参数个数，即函数定义中参数的个数  
3.函数的toString方法返回一个字符串，额呢绒是函数的源码  
### 函数的作用域和参数
1.函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域  
2.传值传递在函数体内修改函数值不会影响到函数外部；传址传递(数组、对象、其他函数)在函数内部修改参数，会影响到原始值。  
3.由于JavaScript允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数。  
①arguments对象包含了函数运行时所有的参数，arguments[0]是函数体内第一个参数，以此类推  
②通过arguments对象的length属性，可以判断函数调用时带几个参数  
③arguments转为数组方法
```
var args=Array.prototype.slice.call(arguments);
//或
var args=[];
for(var i=0;i<arguments.length;i++)
{
  args.push(arguments[i]);
}
```
### 闭包
1.简单理解：定义在函数内部的函数，闭包将函数内部和函数外部连接起来的一座桥梁  
2.闭包的作用：读取函数内部的变量；让变量始终保持在内存中  
3.定义函数后立即调用函数
```
(function(){}());
```
