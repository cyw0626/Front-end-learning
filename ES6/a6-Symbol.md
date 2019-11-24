# Symbol  
ES6引入新的数据类型Symbol,表示独一无二的值。JavaScript共有七种数据类型：对象、字符串、数值、布尔值、Symbol、undefined、null  
对象的属性名有两种类型：字符串/Symbol类型  
Symbol函数接受一个字符串作为参数，表示对Symbol实例的描述  
Symbol值不能与其他类型的值进行运算，会报错  
Symbol值可以转为字符串或布尔值  
```
String(symbol1);
symbol1.toString();

Boolean(symbol1);
!symbol1;
```
## Symbol.prototype.description  
```
const sym=Symbol('des');

sym.description   //"des"
```
## 作为属性名的Symbol  
```
let obj={
  [sym](arg){...}
};
```
## 实例：消除魔术字符串  
魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一具体的字符串或者数值。  
强耦合值等于哪个值不重要，可以设置为Symbol()  
## 属性名的遍历  
Object.getownPropertySymbols()方法获取指定对象的所有Symbol属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的Symbol值  
Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和Symbol键名  
## Symbol.for(),Symbol.keyFor()  
Symbol.for()用于使用同一个Symbol值  
Symbol.keyFor()方法返回一个已登记的Symbol类型值的key  
## 实例：模块的Singleton模式  
Singleton模式指的是调用一个类，任何时候返回的都是同一个实例  
```
//mod.js  
const FOO_KEY=Symbol.for('foo');
function A(){
  this.foo='hello';
}
if(!global[FOO_KEY]){
  global[FOO_KEY]=new A();
 }
 
 module.exports=global[FOO_KEY];
 ```
 ## 内置的Symbol值  
 - Symbol.hasInstance判断是否为该对象的实例，调用这个方法  
 - Symbol.isContatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开  
 - Symbol.species属性指向一个构造函数。创造衍生对象时，会使用该属性  
 - Symbol.match属性指向一个函数，如果该属性存在就会调用函数  
 - Symbol.replace属性返回该方法的返回值  
 - Symbol.search当String.prototype.search方法调用时，返回该方法的返回值  
 - Symbol.split当String.prototype.split方法调用时，返回该方法的返回值  
 - Symbol.iterator属性，指向该对象的默认遍历器方法  
 - ymbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值  
 - Symbol.toStringTag属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型  
 - Symbol.unscopables属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除



