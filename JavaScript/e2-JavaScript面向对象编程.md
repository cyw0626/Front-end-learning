# 面向对象编程
## 对象的继承
1.JavaScript通过构造函数生成新对象，因此构造函数可以视为对象的模板。实例对象的属性和方法，可以定义在构造函数内部。  
2.同一个构造函数的多个实例之间，无法共享属性，造成系统资源的浪费。  
3.每个函数都有一个prototype属性，指向一个对象。构造函数生成实例时，该属性会自动生成实例对象的原型。    
4.原型对象的作用，就是定义所有实例对象共享的属性和方法。  
5.原型链一层层上溯最后都可以是Object.prototype,最上层为null。  
6.如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”。  
### constructor属性 
1.prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数  
①constructor属性可得知某个实例对象时哪一个构造函数产生的  
②从一个实例对象新建另一个实例
```
function Constr(){}
var x=new Constr();
var y=new x.constructor();
y instanceof Constr         //true
```
2.修改原型对象时，同时修改constructor属性指向
```
//way1
C.prototype={
  constructor:C,
  method1:function(...){...},
};
//way2
C.prototype.method1=function(...){...};
```
### instanceof运算符
1.instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例(除了null)  
2.instanceof可以判断对象的类型  
### 构造函数的继承
一个函数继承另一个构造函数，第一步在子类的构造函数中调用父类构造函数；第二部让子类继承父类原型  
```
//Rectangle构造函数继承Shape
function Rectangle(){
  Shape.call(this);
}
Rectangle.prototype=Object.create(Shape.prototype);
Rectangle.prototype.constructor=Rectangle;
```
### 多重继承
```
//子类S继承父类M1和M2
function M1() {
  this.hello = 'hello';
}

function M2() {
  this.world = 'world';
}

function S() {
  M1.call(this);
  M2.call(this);
}

// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);

// 指定构造函数
S.prototype.constructor = S;

var s = new S();
s.hello // 'hello'
s.world // 'world'
```
### 模块
- 基本实现方法：把模块写成一个对象，所有模块成员放到这个对象里面  
 ```
 var module= new Object({
    _count:0,
    m1:function(){
      //...
    },
    m2:function(){
      //...
    }
});
```
- 构造函数写法封装私有变量  
```
function StringBuilder(){
  this._buffer=[];
}
StringBuilder.prototype={
  constructor:StringBuilder,
  add:function(str){
    this._buffer.push(str);
  },
  toString:function(){
    return this._buffer.join('');
  }
}
```
- 立即执行函数封装私有变量
```
var module1 = (function () {
　var _count = 0;
　var m1 = function () {
　  //...
　};
　var m2 = function () {
　　//...
　};
　return {
　　m1 : m1,
　　m2 : m2
　};
})();
```
> 宽放大模式：
```
var module1 = (function (mod) {
　//...
　return mod;
})(window.module1 || {});
```
> 输入全局变量
```
//finalCarousel对象输出到全局，对外暴露init和destroy接口，内部方法go、handleEvents、initialize、dieCarouselDie都是外部无法调用的

(function($, window, document) {

  function go(num) {
  }

  function handleEvents() {
  }

  function initialize() {
  }

  function dieCarouselDie() {
  }

  //attach to the global scope
  window.finalCarousel = {
    init : initialize,
    destroy : dieCarouselDie
  }

})( jQuery, window, document );
```
## Object对象的相关方法  
- Object.getPrototypeOf()方法返回参数对象的原型  
- Object.setPrototypeOf()方法为参数对象设置原型，返回该参数对象，它接受两个参数，第一个是现有对象，第二个是原型对象  
- Object.create()方法接受一个对象作为参数，以它为原型返回一个实例对象  
- Object.prototype.isPrototypeOf()用来判断该对象是否为参数对象的原型  
- Object.prototype._proto_返回该对象原型，该属性可读写  
- Object.getOwnPropertyNames()方法返回一个数组，成员是参数对象本身所有属性的键名，不包含继承的属性键名  
- Object.prototype.hasOwnProperty()方法返回一个布尔值判断某个属性定义在对象自身还是原型链上  
- in 运算符返回布尔值判断一个对象是否具有该属性，for...in可遍历对象所有可遍历属性  
- 对象的拷贝
```
function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}
```
### 严格模式
```
//置于头部
'use strict';
```
严格模式创设eval作用域，eval所生成的变量只用于eval内部

