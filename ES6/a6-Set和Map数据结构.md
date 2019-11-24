# Set和Map数据结构  
## Set  
ES6提供了新的数据结构Set,类似于数组，成员都是唯一的  
Set函数接受一个数组作为参数，用来初始化  
```
//去除数组、字符串重复成员
const set=new Set(Array);
[...set]
```
- Set.prototype.constructor:构造函数，默认就是Set函数  
- Set.prototype.size:返回Set实例的成员总数  
- Set.prototype.add(value):添加某个值，返回Set结构本身  
- Set.prototype.delete(value):删除某个值，返回一个布尔值，表示删除是否成功  
- Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员  
- Set.prototype.clear()：清除所有成员，没有返回值  
- Set.prototype.keys()：返回键名的遍历器  
- Set.prototype.values()：返回键值的遍历器  
- Set.prototype.entries()：返回键值对的遍历器  
- Set.prototype.forEach()：使用回调函数遍历每个成员  
```
let set=new Set([1,3,9]);
set.forEach((value,key)=>console.log(key+':'+value))
```
## WeakSet  
WeakSet结构和Set类似，也是不重复值的集合，它的成员只能是对象，而不是其他类型的值，垃圾回收机制不考虑WeakSet对该对象的引用  
## Map  
Map数据结构类似对象，各种类型的键值都可以当做键  
Set和Map都可以用来生成新的Map  
- size属性返回Map结构的成员总数  
- Map.prototype.set(key,value)设置键名key对应的键值value  
- Map.prototype.get(key)读取key对应的键值  
- Map.prototype.has(key)方法返回一个布尔值，表示某个键是否在当前 Map 对象之中  
- Map.prototype.delete(key)方法删除某个键，返回true  
- Map.prototype.clear()方法清除所有成员，没有返回值  
- Map.prototype.keys()：返回键名的遍历器。  
- Map.prototype.values()：返回键值的遍历器。  
- Map.prototype.entries()：返回所有成员的遍历器。  
- Map.prototype.forEach()：遍历 Map 的所有成员。 
> Map转为数组使用扩展符(...)  
> 数组转为Map  
> Map转为对象,Map键值都是字符串 
> 对象转为Map  
> Map转为JSON  
```
JSON.stringfy(strMap);//Map键名都是字符串
JSON.stringfy([...map]);//Map键名有非字符串
```
> JSON转为Map  
```
JSON.parse(json);
```
## WeakMap  
WeakMap只接受对象作为键名，且键名所指向的对象，不计入垃圾回收机制   






