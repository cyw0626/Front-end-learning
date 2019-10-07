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
