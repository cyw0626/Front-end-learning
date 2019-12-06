# Generator函数的语法  
Generator函数是ES6提供的一种异步编程解决方案。  
- 语法上，首先可以把它理解成，Generator函数是一个状态机，封装了多个内部状态。  
- 执行Generator函数会返回一个遍历器对象，返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。  
- function关键字与函数名之间有一个星号；函数体内部使用yield表达式，定义不同的内部状态
```
function* helloWorldGenerator(){
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw=helloWorldGenerator();
```
调用Generator函数也是在函数名后加括号。用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象。  
下一步调用遍历器对象的next方法，使得指针移向下一个状态，直到遇到下一个yield表达式为止。  
第一次调用next,Generator函数开始执行，直到遇到第一个yield为止，next方法返回的一个对象。它的value属性就是当前yield的表达式的值，done属性表示遍历是否结束。  
