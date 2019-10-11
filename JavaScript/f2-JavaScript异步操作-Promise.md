# JavaScript异步操作-Promise
## 概述
Promise对象是JavaScript的异步操作解决方案，为异步操作提供统一接口。  
它起到代理作用(proxy)，充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。  
Promise让异步操作写起来就像写同步操作的流程，而不必一层层地嵌套回调函数。  
## Promise对象的状态
- 异步操作未完成(pending)  
- 异步操作成功(fulfilled)
- 异步操作失败(rejected)  
fulfilled和rejected合在一起称为resolved(已定型)  
## Promise构造函数
```
//resolve和reject由JavaScript引擎提供，不用自己实现
var promise = new Promise(function (resolve, reject) {
  // ...

  if (/* 异步操作成功 */){
    resolve(value);
  } else { /* 异步操作失败 */
    reject(new Error());
  }
});
```
### Promise.prototype.then()  
Promise实例的then方法，在接受实例状态(fulfilled|rejected)改变，就调用相应的回调函数  
```
//图片加载例子
var preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
preloadImage('https://example.com/my.jpg')
  .then(function (e) { document.body.append(e.target) })
  .then(function () { console.log('加载成功') })
```
## 微任务  
Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。它们的区别在于，正常任务追加到下一轮事件循环，微任务追加到本轮事件循环。这意味着，微任务的执行时间一定早于正常任务。  
```
setTimeout(function() {
  console.log(1);
}, 0);

new Promise(function (resolve, reject) {
  resolve(2);
}).then(console.log);

console.log(3);
// 3
// 2
// 1
```
