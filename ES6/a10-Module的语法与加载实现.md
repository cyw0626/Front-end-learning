# Module的语法  
CommonJS用于服务器、AMD用于浏览器，只能在运行时确定关系     
ES6模块的设计思想尽量静态化，使得编译时就能确定模块的依赖关系，以及输入和输出变量  
ES6模块通过export命令显示指定输出代码，再通过import命令输入  
## 严格模式  
ES6自动采用严格模式  
## export命令  
export命令主要用于规定模块的对外接口，import命令用于输入其他模块提供的功能   
一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取。如果希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量   
```
//out.js
var firstName='Json';
var lastName='Demon';
var year='1990';

export var m=1;
export{firstName,lastName,year as age};
```
## import命令   
```
import {m as one,firstName,lastName,age} as './out.js';
```
- import命令具有提升效果，会提升到整个模块的头部，首先执行   
- 多次重复执行同一句import语句，只会执行一次，不会执行多次   
## 模块的整体加载   
除了加载某个输出值，还可以使用整体加载，即用* 指定一个对象，所有输出值都加载在这个对象上   
```
import * as circle from './circle';
console.log(circle.area);
```
## export default命令   
export default命令为模块指定默认输出  
```
//out.js
export default function(){
  console.log('foo');
}
//in.js
import bar from './in';
bar();  //'foo'
```
> 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许为它取任意名字  
export default命令用于指定模块的默认输出，一个模块只能有一个默认输出，因此export default命令只能使用一次，import命令后面不用加大括号   
export default命令只是输出一个叫做default的变量，所以它后面不能跟变量声明语句   
## export与import的复合写法   
在一个模块中，先输入后输入同一个模块，import语句可以与export语句写在一起  
```
//转发两个接口
export {foo,bar} from 'my_module';
```
## 模块的继承  
## 跨模块常量   
```
//db.js
export const db={
  url:'URL',
  admin:'admin',
  pw:'password'
};
//user.js
exports const users=['demon','hh'];
//使用时，直接加载index.js
import {db,users} from './contants/index';
```
## import()
