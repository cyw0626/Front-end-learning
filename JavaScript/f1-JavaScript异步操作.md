# 异步操作
## 异步操作概述
### 单线程模型
1.JavaScript本质是单线程。  
2.事件循环机制————CPU可以不管IO操作，挂起处于等待中的任务，先运行排在后面的任务。等到IO操作返回了结果，再回过头，把挂起的任务继续执行下去。  
### 同步任务和异步任务  
1.同步任务是没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。  
2.异步任务是被引擎放在一边，不进入主线程、而进入任务队列的任务。只有引擎认为某个异步任务可以执行了，该任务才会进入主线程执行。  
### 任务队列和事件循环  
1.任务队列里面是各种需要当前程序处理的异步任务。  
2.首先，主线程会执行所有的同步任务。同步任务全部执行完，如果满足条件，那么异步任务进入主线程开始执行，这是它变为同步任务。直至任务队列清空。  
3.事件循环是一个程序结构，用于等待和发送消息和事件。  
### 异步操作模式
- 回调函数
```
function f1(callback){
  //...
  callback();
}
function f2(){
  //...
}
f1(f2);
```
- 事件监听
- 发布/订阅
### 异步操作的流程控制  
- 串行执行
```
var items=[1,2,3,4,5,6];
var results=[];

function async(arg,callback){
  console.log('参数为'+arg+',1秒后返回结果');
  setTimeout(function(){callback(arg*2);},1000);
}

function final(value){
  console.log('完成：',value);
}

function series(item){
  if(item){
    async(item,function(result){
      results.push(result);
      return series(items.shift());
    }）
  }else{
    return final(results[results.length-1]);
  }
}
series(items.shift());
```
- 并行执行
```
var items=[1,2,3,4,5,6];
var results=[];

function async(arg,callback){
  console.log('参数为'+arg+',1秒后返回结果');
  setTimeout(function(){callback(arg*2);},1000);
}

function final(value){
  console.log('完成：',value);
}

items.forEach(function(item){
  async(item,function(result){
    result.push(result);
    if(results.length=items.length){
      final(results[results.length-1]);
    }
  })
});
```
- 并行与串行的结合  
```
//通过调节limit达到资源与效率的平衡

var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
var running = 0;
var limit = 2;

function async(arg, callback) {
  console.log('参数为 ' + arg +' , 1秒后返回结果');
  setTimeout(function () { callback(arg * 2); }, 1000);
}

function final(value) {
  console.log('完成: ', value);
}

function launcher() {
  while(running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function(result) {
      results.push(result);
      running--;
      if(items.length > 0) {
        launcher();
      } else if(running == 0) {
        final(results);
      }
    });
    running++;
  }
}

launcher();
```
## 定时器
### setTimeout()、setInterval()
1.setTimeout()用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号。
```
var timeId=setTimeout(func|code,delay);
```
> 如果回调函数是对象的方法，setTimeout使方法内部的this关键字指向全局环境  
2.setInterval()指定某个任务每隔一段时间就执行一次。
### clearTimeout()、clearInterval()
clearTimeout(id)\clearInterval(id)取消相应的定时器  
### debounce函数
防止用户连续击键，采用debounce(防抖动)
```
$('textarea').on('keydown',debounce(ajaxAction,2500));
function debounce(fn,delay){
  var timer=null; //声明定时器
  return function(){
    var context=this;
    var args=arguments;
    clearTimeout(timer);
    timer=setTimeout(function(){
      fn.apply(context,args);
    },delay);
  };
}
```
### setTimeout(f,0)
- 含义：当前脚本的同步任务，全部处理完后才会执行setTimeout指定的回调函数f  
- 调整事件的顺序
- 分成多个小任务
```
var div=document.getElementsByTagName('div')[0];
var timer;
var i=0x100000;
function func(){
  timer=setTimeout(func,0);
  div.style.backgroundColor='#'+i.toString(16);
  if(i++==0xFFFFFF) clearTimeout(timer);
}
timer=setTimeout(func,0);
```
