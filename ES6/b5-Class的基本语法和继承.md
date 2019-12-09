# Class的基本语法  
ES6通过class关键字可以定义类。ES5的构造函数=>ES6的constructor构造方法   
class定义方法，不需要function关键字，方法之间不需要逗号分隔   
```
class Point{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  toString(){
    return '('+this.x+','+this.y+')';
  }
}
```
> 在类的实例上调用方法，其实就是调用原型上的方法  
可以通过Object.assign方法向类添加多个方法  
```
Object.assign(Point.prototype,{
  toString(){},
  toValue(){}
});
```
类内部所有定义的方法都是不可枚举的  
- constructor方法    
constructor是类的默认方法，通过new命令生成实例对象时，自动调用该方法  
类方法必须用new调用，否则会把报错  
- 类的实例  
实例的属性除非显示定义在其本身，this对象上，否则都是定义在原型上，class上  
类的所有实例共享一个原型对象  
- 取值函数(getter)和存值函数(setter)  
在类的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为   
- 属性表达式  
类的属性名，可以采用表达式  
- Class表达式  
```
const MyClass=class Me{
  getClassName(){
    return Me.name;
  }
}
```
①严格模式②不存在提升③name属性④Generator方法：某个方法之前加上型号，该方法是一个Generator函数   
⑤this的指向：类方法内部的this默认指向类的实例   
```
//绑定this
class Obj1{
  constructor(){
    this.printName=this.printName.bind(this);  
  }
  //...
}
class Obj2{
  constructor(){
    this.getThis=()=>this;  
  }
}
```   
## 静态方法  
一个方法前加上static关键字，表示静态方法不会被实例继承，而是直接通过类来调用    
- 静态方法包含static关键字，this指的是类，不是实例。   
- 静态方法可以与非静态方法重名。  
- 父类的静态方法可以被子类继承。   
## 实例属性的新写法   
实例属性除了定义在constructor()方法的this上面，也可以定义在类的最顶层。   
## 静态属性   
静态属性指的是Class本身的属性，即Class.propName   
## 私有方法和私有属性  
私有方法和私有属性，只能在类的内部访问的方法和属性，外部不能访问   
- 命名上加以区分  
- 将私有方法移除模块  
- 将私有方法命名为一个Symbol值  
## new.target属性   
- new是从构造函数生成实例对象的命令。ES6为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用的那个构造函数。  
- Class内部调用new.target,返回当前class   
- 子类继承父类时，new.target会返回子类   
- 在函数外部，使用new.target会报错  
# Class的继承   
Class可以通过extends关键字实现继承，子类必须在constructor方法中调用super方法，得到与父类同样的实例属性和方法   
子类的构造函数中，只有调用了super之后，才可以使用this关键字   
父类的静态方法，也会被子类继承   
## Object.getPrototypeOf()  
Object.getPrototypeOf方法可以用来从子类上获取父类  
## super关键字  
### super作为函数调用 
- 代表父类的构造函数；  
- super内部的this指的是子类的实例  
### super作为对象  
- super作为对象时，在普通方法中指向父类的原型对象；   
> ES6规定，在子类普通方法中通过super调用父类方法时，方法内部的this指向当前的子类实例   
- 在静态方法中，指向父类    
在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例   
由于对象总是继承于其他对象的，所以可以在任意一个对象中，使用super关键字  
## 类的prototype属性和_proto_属性  
- 子类的_proto_属性，表示构造函数的继承，总是指向父类  
- 子类prototype属性的_proto_属性，表示方法的继承，总是指向父类的prototype属性   
### 实例的_proto_属性  
子类原型的原型是父类的原型  
## 原生构造函数的继承   
ES6允许原生构造类定义子类，extends关键字不仅可以用来继承类，还可以继承原生构造函数  
```
class MyArray extends Array{
  constructor(...args){
    super(...args);
  }
}
var arr=new MyArray();
```
## Mixin模式的实现  
Mixin指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口  
