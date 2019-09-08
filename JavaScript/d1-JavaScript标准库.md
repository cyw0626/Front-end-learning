# 标准库
## Object对象
1.Object()本身是一个函数，可将任意值转为对象。  
2.Object构造函数：
```
var obj=new Object();
====================
var obj={};
```
3.Object静态方法指部署在Object对象自身的方法。  
4.Object.keys()参数是一个对象，返回一个数组/Object.getOwnPropertyNames()可返回不可枚举属性  
5.Object.valueOf()默认情况下返回对象自身  
6.Object.prototype.toString()默认情况下返回类型的字符串  
```
//判断数据类型
var type=function (o){
  var s=Object.prototype.toString.call(o);
  return s.match(/\[object(.*?)\]/)[1].toLowerCase();
};

typr({});   //"object"
```
7.Object.prototype.toLocaleString()返回针对某些地域特定值  
8.Object.prototype.hasOwnProperty()参数为一个字符串，返回一个布尔值，表示该实例对象自身是否具有该属性  
## 属性描述对象
1.JavaScript提供一个内部数据结构，描述对象的属性。  
2.Object.getOwnPropertyDescriptor()方法获取属性描述对象，不能用于继承的属性。  
3.Object.getOwnPropertyNames()方法返回参数对象的全部属性名组成的数组。  
4.Object.defineProperty()方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象。
```
Object.defineProperty(object,propertyName,attributesObject)
```
Object.defineProperties()方法一次性定义或修改多个属性。  
5.Object.prototype.propertyIsEnumerable()返回一个布尔值，判断某个属性是否可遍历。  
6.元属性是属性描述对象的各个属性：  
- value是目标属性的值
- writable属性是一个布尔值，决定目标属性的值是否可以改变
- enumerable返回一个布尔值，表示目标属性是否可遍历 
- configurable返回一个布尔值，决定是否可以修改属性描述对象(对于value只要writable和configurable有一个为true，就允许改动)  
- 取值使用get,赋值使用set
```
var obj={
  get p(){
    return 'getter';
  }，
  set p(value){
      console.log('set'+value);
  }
};
```
- 使用from-to进行拷贝
```
var extend = function (to, from) {
  for (var property in from) {
    to[property] = from[property];
  }

  return to;
}

extend({}, {
  a: 1
})
// {a: 1}
```
- Object.preventExtensions方法可以使得一个对象无法再添加新的属性;Object.isExtensible方法用于检查一个对象是否使用了Object.preventExtensions方法
- Object.seal方法使得一个对象既无法添加新属性，也无法删除旧属性;Object.isSealed方法用于检查一个对象是否使用了Object.seal方法
- Object.freeze方法可以使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量;Object.isFrozen方法用于检查一个对象是否使用了Object.freeze方法
