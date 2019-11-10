# let和const命令  
变量声明的方法：ES5——var&function;ES6——let&const&import&class  
## 块级作用域    
1.ES5只有全局作用域和函数作用域，导致：  
- 内层变量可能会覆盖外层变量;  
- 用来计数的循环变量泄露为全局变量。  
2.ES6的let生成块级作用域  
- 可以任意嵌套；  
- 内层作用域可以定义外层作用域的同名变量；  
- 块级作用域内部，优先使用函数表达式，避免在块级作用域内声明函数。  
## let  
1.let用来声明变量，只在let命令所在的代码块内有效  
2.不存在变量提升  
3.暂时性死区(TDZ)：块级作用域存在let命令，它所声明的变量就绑定这个区域，不受外部影响  
4.不允许重复声明  
## const  
1.const声明一个只读的常量，声明后常量的值不能改变  
2.const只在声明的块级作用域内有效  
3.const实际保证变量指向的那个内存地址的数据不得改动：简单类型的值，数据保存在内存地址；复合类型的数据，指向实际数据的指针固定  
4.将对象冻结：Object.freeze  
```
var constantize=(obj)=>{
  Object.freeze(obj);
  Object.keys(obj).forEach((key,i)=>{
    if (typeof key[i]==='object'){
      constantize(obj[key]);
    }
  });
};
```
## globalThis对象  
JavaScript存在一个顶层对象，提供全局环境，所有代码都是在这个环境中运行  
- 浏览器的顶层对象是window  
- Node的顶层对象是global  
- 浏览器和Web Worker里面,self也指向顶层对象  
- 同一段代码为了取得顶层对象，一般使用this变量  
现有提案引入global-this垫片库,引入globalThis作为顶层变量  
