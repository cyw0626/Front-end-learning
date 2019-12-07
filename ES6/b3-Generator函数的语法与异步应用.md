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
### yield表达式  
- yield表达式后面的表达式，只有当调用了next方法，内部指针指向该语句时才会执行，等于提供了惰性求值的语法功能。  
- yield表达式只能用在Generator函数里面，其他地方会报错  
- yield表达式用在另一个表达式中，必须放在圆括号里  
### 与Iterator接口的关系  
把Generator赋值给对象的Symbol.iterator属性，从而使得该对象具有Iterator接口  
```
var myIterator={};
myIterator[Symbol.iterator]=function* (){
  yield 1;
  yield 2;
  yield 3;
};
[...myIterator] //[1,2,3]
```
## next方法的参数  
yield表达式本身没有返回值，或者说返回undefined.next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。  
## for...of循环   
for...of循环可以自动遍历Generator函数运行时生成的Iterator对象  
## Generator.prototype.throw()  
- Generator函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在Generator函数体里捕获  
- throw方法可以接受一个参数，该参数会被catch语句接收  
> 不要混淆遍历器对象的throw方法和全局的throw命令。函数体外的catch语句块，捕获了错误之后，就不会继续try代码块里剩余的语句了  
throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法  
throw方法被捕获以后，会附带执行下一条yield表达式   
## Generator.prototype.return()  
Generator函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Gnerator函数。如果return不提供参数，则返回值的value属性为undefined.  
如果Generator函数内部有try...finaly代码块，且正在执行try代码块，那么return方法会立即进入finally代码块，执行完finally代码块后，再返回return()方法指定的返回值  
## next()\throw()\return()的共同点   
- next()是将yield表达式替换成一个值   
- throw()是将yield表达式替换成一个throw语句   
- return是将yield表达式替换成一个return语句   
## yield* 表达式   
ES6提供yield* 表达式，用来在一个Generator函数里执行零个Generator函数  
任何数据结构只要有Iterator接口，就可以被yield* 遍历  
## 作为对象属性的Generator函数  
如果一个对象的属性是Generator函数   
```
let obj={
  * myGeneratorMethod(){
  }
};
```
## Generator函数的this   
Generator函数返回的是遍历器对象，不是this对象   
## 含义  
### Generator与状态机  
### Generator与协程  
协程是一种程序运行的方式，可以理解成“协作的线程”或“协作的函数”。协程既可以用单线程实现，也可以用多线程实现。   
协程：多个线程可以并行执行，但是只有一个线程处于正在运行的状态，其他线程都处于暂停态，线程之间可以交换控制权。  
协程以多占用内存为代价，实现多任务并行。  
Generator函数称为“半协程”，只有Generator函数的调用者，才能将程序的执行权还给Generator函数。  
### Generator与上下文  
Generator函数执行的上下文环境，一旦遇到yield命令，就会暂时退出堆栈，但并不消失，里面所有的变量和对象会冻结在当前状态。等到对它执行next命令时，这个上下文环境又会重新加入调用栈，冻结的变量和对象恢复执行。  
## 应用  
- 异步操作的同步化表达   
可以把异步操作卸载yield表达式里面，等到调用next方法时再往后执行。  
- 控制流管理   
```
let steps=[step1Func,step2Func,step3Func];
function* iterator(steps){
  for(var i=0;i<steps.length;i++){
    var step=steps[i];
    yield step();
  }
}
```
- 部署Iterator接口  
- 作为数据结构  
# Generator函数的异步应用   
## 传统方法  
- 回调函数  
- 事件监听  
- 发布/订阅  
- Promise对象   
## 基本概念  
异步：一个任务不是连续完成的，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段   
同步：连续的执行   
回调函数：把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数   
Promise:将回调函数改为链式调用  
## Generator函数  
- 协程的Generator函数实现   
整个Generator函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用yield语句注明。   
- Generator函数的数据交换和错误处理  
next返回的value属性，是Generator函数向外输出数据；next方法还可以接受参数，向Generator函数内输入数据   
Generator函数体外，使用指针对象throw抛出的错误，可以被函数体内的try...catch代码块捕获   
- 异步任务的封装   
```
var fetch=require('node-fetch');

function* gen(){
  var url=URL;
  var result=yield fetch(url);
  console.log(result.bio);
}

var g=gen();
var result=g.next();
result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
})
```
## Thunk函数   
### 参数的求值策略  
C语言采用传值调用，Haskell语言采用传名调用   
### Thunk函数的含义   
编译器的传名调用实现，往往就是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就是Thunk函数   
### JavaScript语言的Thunk函数   
JavaScript语言中，Thunk函数替换的是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数   
### Thunkify模块   
生产环境的转换器，建议使用thunkify模块   
```
//安装
$ npm install thunkify
//使用方式
var thunkify=require('thunkify');
var fs=require('fs');

var read=thunkify(fs.readFile);
read('package.json')(function(err,str){
  //...
});
```
### Generator函数的流程管理   
## Co模块   
Co模块用于Generator函数的自动执行，Co模块让不用编写Generator函数的执行器   
## Co模块的原理   
- 回调函数。将异步操作包装成Thunk函数，在回调函数里面交回执行权。  
- Promise对象。将异步操作包装成Promise对象，用then方法交回执行权。  
## 基于Promise对象的自动执行   
## 处理并发的异步操作   
## 实例：处理Steam  
```
const co=require('co');
const fs=require('fs');

const steam=fs.createReadSteam('text.txt');
let demonCount=0;

co(function*(){
  while(true){
    const res=yield Promise.race([
      new Promise(resolve=>steam.once('data','resolve')),
      new Promise(resolve=>steam.once('end',resolve)),
      new Promise((resolve,reject)=>steam.once('error',reject))
    ]);
    if(!res){
      break;
    }
    steam.removeAllListeners('data');
    steam.removeAllListeners('end');
    steam.removAlllisteners('error');
    demonCount+=(res.toString().match(/demon/ig)||[]).length;
  }
  console.log('count',demonCount);
})
```
