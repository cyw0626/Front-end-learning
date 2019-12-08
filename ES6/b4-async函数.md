# async函数   
async函数是Generator函数的语法糖，将Generator函数的星号( * )替换成async,将yield替换成await   
```
const asyncReadFile=async function(){
  const f1=await readFile('/file1');
  const f2=await readFile('/file2');
  console.log(f1.toString());
  console.log(f2.toString());
};
```
- 内置执行器   
- 更好的语义   
- 更广的适用性   
- 返回值是Promise   
## 基本用法   
async函数返回一个Promise对象，可以使用then方法添加回调函数  
```
async function getStockPriceByName(name){
  const symbol=await getStockSymbol(name);
  cosnt stockPrice=await getStockPrice(symbol);
  return stockPrice;
}
getStockPriceByName('google').then(function(result){consloe.log(result);});
```
> 用法   
```
//函数声明   
async function foo(){}
//函数表达式
const foo=async function(){}
//对象的方法  
let obj={async foo(){}};
obj.foo().then(...)
//Class的方法  
class Storage{
  constructor(){
    this.cahcePromise=caches.open('avatars');
  }
  async getAvatar(name){
    const cache=await this.cahePromise;
    return cahce.match(`/avatars/${name}.jpg`);
  }
}
const storage=new Storage();
storage.getAvatar('Demon').then(...);
//箭头函数
const foo=async()=>{};
```
## 语法  
- 返回Promise对象   
async函数返回一个Promise对象，内部return语句返回的值，会成为then方法回调函数的参数   
- Promise对象的状态变化  
async函数返回的Promise对象，必须等到内部的await命令后面的Promise对象执行完，才会发生状态改变。  
- await命令   
①await后面的Promise对象返回该对象的结果，如果不是Promise对象，直接返回对应的值   
②await命令后面是一个thenable对象，那么await会将其等同于Promise对象  
```
//实现休眠语法
function sleep(interval){
  return new Promise(resolve=>{
    setTimeout(resolve,interval);
  })
}

async function one2FiveInAsync(){
  for(let i=1;i<=5;i++){
    console.log(i);
    await sleep(1000);
  }
}
one2FiveInasync();
```
③await命令后面的Promise对象变为reject，会被catch方法的回调函数接收  
```
async function f(){
  try {
    await Promise.reject('Error');
  }catch(e){
    return await Promise.resolve('next Step');
  }
}
f().then(
v=>console.log(v))
//next Step  
```
```
async function f(){
  await Promise.reject('Error')
    .catch(e=>consloe.log(e));
  return await Promise.resolve('next Step');
}
f()
.then(v=>console.log(v))
//Error
//next Step
```
- 错误处理  
防止出错的方法，就是将其放在try...catch代码块中   
- 使用注意点   
同时触发await的异步命令   
```
let [foo,bar]=await Promise.all([getFoo(),getBar()]);

let fooPromise=getFoo();
let barPromise=getBar();
let foo=await fooPromise;
let bar=await barPromise;
```
await命令只能用在async函数中,想要同时执行采用let...of / Promise.all  
async函数可以保留运行堆栈  
## async函数的实现原理  
## 与其他异步处理方法的比较  
```
async function chainAnimationAsync(elem,animations){
  let ret=null;
  try{
    for(let anim of animations){
      ret =await anim(elem);
    }
    }catch(e){
      //...
    }
    return ret;
}
```
## 实例：按顺序完成异步操作  
```
async function logInOder(urls){
  //并发读取远程URL
  const textPromises=url.map(async url=>{
    const responce=await fetch(url);
    return responce.text();
  });
  //按次序输出 
  for(const textPromise of textPromises){
    console.log(await textPromise);
  }
}
```
## 顶层await  
顶层await有点像暂停在那里  
如果加载多个包含顶层await命令的模块，加载是同步执行的  
