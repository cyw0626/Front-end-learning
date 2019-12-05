# Promise对象  
ES6原生提供Promise对象。  
所谓Promise，就是一个容器，里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果。从语法上说Promise是一个对象，从它可以获取异步操作的消息。  
特点：  
- 对象的状态不受外界的影响。Promise对象有三种状态：pending\fulfilled\rejected,只有异步操作的结果可以决定当前是哪一种状态  
- 一旦状态改变，就不会在变，称为resolved(已定型)。如果改变已经发生，你再去Promise添加回调函数，也会立即得到这个结果  
## 基本用法  
Promise对象是一个构造函数，用来生成Promise实例。  
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。   
Promise实例生成后，可以用then方法分别指定resolved状态和rejected状态的回调函数。  
resolve和reject完成以后，Promise的使命就完成了，最好在它们前面的语句加上return语句。   
```
const promise=new Promise(function(resolved,reject){
  if(/*success*/){
    resolve(value);
  }else{
    reject(value);
  }
})
promise.then(function(value){//},function(error){//})
```
## Promise.prototype.then()  
作用是为Promise实例添加状态改变时的回调函数。   
then方法返回的是一个新的Promise实例  
## Promise.prototype.catch()  
Promise.prototype.catch方法是.then(null,rejection)或.then(undefined,rejection)的别名，用于指定发生错误时的回调函数  
- Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止  
- then方法后使用catch捕捉错误   
## Promise.prototype.finally()  
finally方法用于指定不管Promise对象最后状态如何，都会执行的操作  
finally方法的回调函数不接受任何参数  
## Promise.all()  
Promise.all()方法用于讲多个Promise实例，包装成一个新的Promise实例   
```
//参数必须具有Iterator接口，接受一个数组作为参数，p1、p2、p3都是Promise实例   
const p=Promise.all([p1,p2,p3]);
//p1/p2/p3都fulfulled，p才fulfilled
//p1/p2/p3之中有一个rejected,p就rejected  
```
## Promise.race()   
Promise.race()将多个Promise实例，包装成一个新的Promise实例  
只要有一个状态率先改变，p就跟着改变  
## Promise.allSettled()  
Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。  
## Promise.any()  
Promise.any()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。  
## Promise.resolve()  
将现有对象转为Promise对象  
- 参数是一个Promise对象  
- 参数是以一个thenable对象  
- 参数根本不是对象  
- 不带任何参数  
## Promise.reject()  
Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected  
## 应用  
- 加载图片  
- 与Generator函数结合  
## Promise.try()  
可以统一用promise.catch()捕获所有同步和异步的错误。



