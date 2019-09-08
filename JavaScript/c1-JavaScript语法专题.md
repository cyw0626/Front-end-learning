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
## console对象与控制台
1.开发者工具  
- Elements:查看网页的HTML源码和CSS代码
- Network:查看网页的HTTP通信情况
- Sources:查看网页加载的脚本源码
- Performance:查看网页的性能情况，比如CPU和内存消耗
- Console:用来运行JavaScript命令
2.console.log方法支持占位符：
- %s字符串
- %d整数
- %i整数
- %f浮点数
- %o对象的链接
- %cCSS格式字符串
3.console.table()方法将复合类型的数据转为表格显示  
4.console.count()方法用于计数，输出它被调用多少次  
5.console.dir()输出DOM对象的所有属性  
```
console.dirxml(document.body)
```
6.console.dirxml()方法用目录树的形式，显示DON节点  
7.console.assert()方法用于程序运行过程中，进行条件判断，如果不满足条件则显示已给西欧五，程序继续执行  
8.console.time()方法计时开始，console.timeEnd()表示计时结束，它们的参数是计时器的名称  
9.console.group()和console.groupEnd()方法用于显示信息分组，console.groupCollapsed()在第一次显示时是收起的  
10.console.trace()方法显示当前执行的代码在堆栈中的调用路径  
11.控制台命令API  
- $_属性返回上一个表达式的值
- $0-$4控制台保存的最近5个在Elements面板中的DOM元素  
- $(selector)返回第一个匹配的元素
- $$(selector)返回选中的DOM对象  
- $x(path)返回一个数组，包含匹配特定XPath表达式的所有DOM元素
- inspect(object)方法打开相关面板，并选中相应的元素，显示它的细节
- getEventListeners(object)方法返回一个对象，该对象的成员为object登记了回调函数的各种事件（比如click或keydown），每个事件对应一个数组，数组的成员为该事件的回调函数
- keys(object)方法返回一个数组，包含object的所有键名/values(object)方法返回一个数组，包含object的所有键值
- monitorEvents(object[, events])方法监听特定对象上发生的特定事件。unmonitorEvents方法用于停止监听。
