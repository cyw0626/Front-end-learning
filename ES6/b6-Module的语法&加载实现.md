# Module的语法   
CommonJS用于服务器，AMD用于浏览器实现运行时模块加载   
ES6编译时加载（静态加载）  
## 严格模式  
ES6模块自动采用严格模式，顶层的this指向undefined   
## export命令    
export命令用于规定模块的对外接口,处于模块顶层   
```
//out.js
var firstName='Chen';
var lastName='Jie';
var year=1998;
export {firstName,lastName,year as age}
export var m=1;
```
## import命令  
import命令具有提升效果，会提升到整个模块的头部   
import是静态执行，不能使用表达式和变量   
```
//in.js
import {firstName,lastName,age} from './out.js';
```
## 模块的整体加载   
整体加载：使用星号（*）指定一个对象，所有输出值都加载再这个对象上面   
```
import * as circle from './circle';

console.log(`圆面积:${circlr.area(4)}`);
```
## export default命令   
export default命令为模块指定默认输出，import命令可以为该匿名函数指定任意名字    
一个模块只能有一个默认输出，export default命令只能使用一次，import命令不用加大括号，唯一对应export default命令   
export default命令的本质是将后面的值，赋给default变量   
## export与import的复合写法   
```
//转发接口   
export {foo,bar} from 'my_module';
export {default} from './someModule';
```
## 模块的继承   
*命令会忽略模块的default方法   
## 跨模块常量   
```
export const db={
  url:'URL',
  name:'admin',
  pw:'password'
};
export const users=['root','ceo','chief','moditor'];
export {db} from './db';
export {users} from './users';

import {db,users} from './contants/index';
```
## import()   
import()函数完成动态加载   
```
import(specifier)  //import参数的specfier指定所要加载的模块位置,返回一个Promise对象   
import('./routh')
  .then(module=>{module.loadPageInto(main);})
  .catch(err=>{main.textContent=err.message;})
```
### 使用场合  
- 按需加载  
- 条件加载  
- 动态的模块路径  
# Module的加载实现   
## 浏览器加载   
- 传统方法   
```
<script type="application/javascript">//module code</script>
<script type="application/javascript" src="path/myModule.js"></script>
//异步渲染
<script src="path/myModule.js" defer></script>  //DOM结构完全生成，渲染完执行
<script src="path/myModule.js" async></script>  //一旦下载完，渲染引擎就会中断渲染，下载完执行
```
- 加载规则  
```
<script type="module" src="./foo.js"></script>
<script type="module">
  import $ from './jquery.js';
  $('#message').text('Hi from jQuery!');
</script>
```
## ES6模块与CommonJS差异   
差异：  
①CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用   
②CommonJS模块是运行时加载，ES6模块是编译时输出接口   
ES6模块是动态引用的，模块里面的变量绑定其所在的模块  
## Node加载  
Node要求ES6模块采用.mjs后缀文件名。只要脚本文件里面使用import或者export命令采用.mjs后缀名   
Node的.mjs支持URL路径，Node的import命令是异步加载   
### 内部变量   
ES6顶层的this指向undefined,CommonJS模块的顶层this指向当前模块   
arguments\require\module\exports\_filename\_dirname顶层变量在ES6模块之中都是不存在的   
### ES6模块加载CommonJS模块   



