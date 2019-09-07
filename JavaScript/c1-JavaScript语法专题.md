# JavaScript语法专题
## 数据类型转换
### 强制转换
- Number()将任意类型的值转化为数值  
> parseInt逐个解析字符，Number函数整体转换字符串的类型  
> Number方法参数是对象时，返回NaN，除非是包含单个数值的数组
```
Number([5])   //5
```
- String()函数将任意类型的值转化为字符串
- Boolean()函数将任意类型的值转化为布尔值
```
Boolean(undefined||null||0||NaN||'')    //false
```
> 所有对象的布尔值都是true
### 自动转换
## 错误处理机制
1.JavaScript原生提供Error构造函数，所有抛出的错误都是这个构造函数的实例
```
var err=new Error('出错了');
err.message   //"出错了"
```
2.原生类型错误
- SyntaxError对象是解析代码时发生的语法错误
- ReferenceError对象引用一个不存在的变量时发生的错误
- RangeError对象是一个值超出有效范围时发生的错误
- TypeError对象是变量或参数不是预期类型时发生的错误
- URIError都西昂是URI相关函数的参数不正确时抛出的错误
- EvalError对象是eval函数没有正确执行  

3.自定义错误  
```
function UserError(message){
  this.message=message||'默认信息';
  this.name='UserError';
}
UserError.prototype=new Error();
UserError.prototype.cionstructor=UserError;
```
4.throw语句作用是手动中断程序执行，抛出一个错误  
5.try...catch结构try抛出错误，catch捕获错误程序会按照正常的流程继续执行下去  
6.finally代码块在try...catch后必须执行
```
function f() {
  try {
    throw '出错了！';
  } catch(e) {
    console.log('捕捉到内部错误');
    throw e; // 这句原本会等到finally结束再执行
  } finally {
    return false; // 直接返回
  }
}
try {
  f();
} catch(e) {
  // 此处不会执行
  console.log('caught outer "bogus"');
}

//  捕捉到内部错误
```
## 编程风格
### 区块
```
block{
  //...
}
```
### 圆括号
- 表示函数调用时，函数名与左括号之间没有空格
- 表示函数定义时，函数名与左括号之间没有空格
```
function (x){...}   //匿名函数定义要有空格
```
### 行尾分号
#### 不使用分号
- for和while循环
```
do{
  //...
}while(...);    //分号不能省略
```
- 分支语句if、switch、try
- 函数的声明
```
var f = function f(){
};
```
#### 分号自动添加
continue,break,return,throw直接跟换行符，会自动添加分号  
### 全局变量尽量大写
### 对象结构代替switch...case结构
```
function doAction(action) {
  switch (action) {
    case 'hack':
      return 'hack';
    case 'slash':
      return 'slash';
    case 'run':
      return 'run';
    default:
      throw new Error('Invalid action.');
  }
}
==========================================
function doAction(action) {
  var actions = {
    'hack': function () {
      return 'hack';
    },
    'slash': function () {
      return 'slash';
    },
    'run': function () {
      return 'run';
    }
  };

  if (typeof actions[action] !== 'function') {
    throw new Error('Invalid action.');
  }

  return actions[action]();
}
```
