# Iterator和for...of循环  
## Iterator(遍历器)的概念  
Iterator是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作。  
作用：  
- 为各种数据结构，提供统一的、简单的访问接口；  
- 使得数据结构的成员能够按某种次序排列；  
- Iterator接口供新的遍历命令for...of循环。  
遍历过程：  
- 遍历器对象的本质上是一个指针对象。创建一个指针对象，指向当前数据结构的起始位置。  
- 第一次调用指针对象的next方法，可以指向数据结构的第一个成员。  
- 第二次调用指针对象next方法，指针指向数据结构的第二个成员。  
- 不断调用指针对象的next方法，直到它指向数据结构的结束位置。  
调用next方法，返回一个包含value和done两个属性的对象。value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。  
> 遍历器和它所遍历的数据结构是分开的  
## 默认Iterator接口  
### 一个数据结构只要有Symbol.iterator属性，就认为是可遍历的。   
- Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。  
- 属性名Symbol.iterator是一个表达式，返回Symbol对象的iterator属性   
### 原生具备Iterator接口的数据结构  
- Array  
- Map  
- Set  
- String  
- TypedArray  
- 函数的arguments对象  
- NodeList对象   
类似数组对象可以直接调用数组的Symbol.iterator方法  
> 类似数组对象的键名是0，1，2...
```
NodeList.prototype[Symbol.iterator]=[][Symbol.iterator];
```
## 调用Iterator接口的场合  
- 解构赋值  
- 扩展运算符  
- yield*  
- 其他：for...of/Array.from()/Map(),Set(),WeakMap(),WeakSet()/Promise.all()/Promise.race()   
## 字符串的Iterator接口  
## Iterator接口与Generator函数  
## 遍历器对象的return()，throw()  
如果一个对象在完成遍历前，需要清理或释放资源，就可以部署return方法  
## for...of循环   
- 数组：for...of循环可以代替数组实例的forEach方法   
for...in循环获得键名；for...of循环获得键值，只返回具有数字索引的属性   
- Set和Map结构   
①遍历的顺序是按照各个成员被添加数据结构的顺序  
②Set结构遍历时，返回的是一个数组，该数组的两个成员分别为当前Map成员的键名和键值   
- 计算生成的数据结构：entries()\keys()\values()   
- 类似数组的对象  
可以用Array.from将类似数组对象转化为数组  
- 对象  
# 遍历语法的比较  
- for循环  
- 数组内置forEach，无法中途跳出  
- for...in遍历对象键名  
- for...of遍历键值，搭配break,continue和return使用
