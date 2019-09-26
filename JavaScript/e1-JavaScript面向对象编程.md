# JavaScript面向对象编程  
## 实例对象与new命令
### 对象定义
- 对象是单个实物的抽象  
- 对象是一个容器，封装了属性和方法
### 构造函数
构造函数名字的第一个字母通常大写，其特点有：  
- 函数体内部使用了this关键字，代表了所生成的对象实例  
- 生成对象的时候，必须使用new命令  
### new命令
new命令执行构造函数，返回一个实例对象  
使用new命令，它后面的函数依次执行下面的步骤：  
- 创建一个空对象，作为将要返回的对象实例  
- 将这个空对象的原型，指向构造函数的prototype属性  
- 将这个空对象赋值给函数内部的this关键字  
- 开始执行构造函数内部的代码  
> 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象  
> 如果普通函数（内部没有this关键字）使用new命令，则返回一个空对象  

函数内部使用new.target属性时，如果当前函数是new命令调用，new.target指向当前函数  
```
var Vehicle=function(){
  this.price=200;
};
var v= new Vehicle();
v.price //200
```
### Object.create()创建实例对象  
后者使用Object.create()继承前者的属性和方法
## this关键字
this就是属性或方法“当前”所在的对象  
### 实质  
this设计目的是在函数体内部，指代函数当前的运行环境  
### 使用场合  
- 全局环境 全局环境使用this，指的是顶层对象window  
- 构造函数 构造函数中的this,指的是实例对象  
- 对象方法 对象方法里包含this,this指向方法运行时所在的对象  
> 将嵌套对象内部方法赋值给一个变量，this指向全局对象；可只将对象赋值给变量，this的指向就不会变  
### 使用注意点  
- 避免多层this  
```
//定义变量that，固定指向外层的this,然后在内层使用that,就不会发生this指向的改变  
var o={
  f1:function(){
    console.log(this);
    var that=this;
    var f2=function(){
      console.log(that);
    }();
  }
}
o.f1()
//Object
//Object
```
- 避免数组处理方法中的this  
数组的map和foreach方法中函数做参数时，函数内部不该使用this  
> 将this当做foreach方法的第二个参数，固定它的运行环境
```
var 0={
  v:'hello',
  p:['a1','a2'],
  f:function f(){
    this.p.forEach(function(item){
      console.log(this.v+''+item);
    },this);
  }
}
o.f1()
//hello a1
//hello a2
```
- 避免回调函数中的this  
### 绑定this的方法  
- Function.prototype.call()  
1.函数实例的call()可以指定函数内部this的指向，然后在所指定的作用域中，调用该函数  
2.call()参数为空、null和undefined，则默认传入全局对象  
3.call()参数是一个原始值，那么这个原始值会自动转成对应的包装对象  
4.call()接受多参数，第一个参数是this指向的对象，后面的参数是函数调用所需的参数  
- Function.prototype.apply()
1.apply()改变this指向，调用该函数，它接收一个数组作为函数执行时的参数  
2.应用
```
//找出数组最大元素
var a=[10,2,3,16,8,9];
Math.max.apply(null,a)  //16
```
```
//将数组的空元素变为undefined
Array.apply(null,['a',,'b'])  //['a',undefined,'b']
```
```
//转换类似数组的对象
//被处理对象必须具有length属性
Array.prototype.slice.apply({0:1,length:1})   //[1]
```
```
//绑定回调函数的对象
//由于apply/call会立即执行，所以要把绑定语句放在一个函数体里
var o = new Object();
o.f = function () {
  console.log(this === o);
}
var f = function (){
  o.f.apply(o);
  // 或者 o.f.call(o);
};
// jQuery 的写法
$('#button').on('click', f);
```
- Function.prototype.bind()
1.bind()用于将函数体内的this绑定到某个对象，然后返回一个新函数  
2.bind()可以接受更多的参数，将这些参数绑定原函数的参数  
3.注意点  
①每一次返回一个新函数--事件监听时绑定函数名称  
②结合回调函数使用  
③结合call方法使用  
