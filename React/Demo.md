# React--Mooc  
## create-react-app    
```
npm install -g create-react-app  
create-react-app todolist
cd todolist  
npm run start 
```
### localhost:3000  
### 工程目录文件  
PWA serviceWorker缓存存储
- README.md:说明文件
- package.json:node包文件，包依赖/start启动...  
- .gitgnore:上传git忽略文件  
- node_modules:第三方模块  
- public:ico图标文件/index.html首页模板/manifest.json缓存存储  
- src:index.js整个程序入口文件/App.js引入组件/App.test.js自动化测试文件   
### 前端组件化(App.js)  
### React衍生
#### React声明式开发，jQuery命令式编程操作DOM  
#### 可以与其他框架并存，React只负责root
#### 组件化，普通标签h5小写字母/组件首大写字母  
- 父组件向子组件通过属性进行传值
- 子组件调用父组件的方法，间接传值  
#### 单向数据流  
父组件可以向子组件传值，但不允许子组件改变
----便于测试  
#### 视图层框架  
需要redux数据层框架  
#### 函数式编程  
便于前端自动化测试  
### Props\State\render函数  
input:输入-onChange-state-value  
当组件state或props发生改变，render()函数重新执行
### 虚拟DOM  
state数据改变-->render()函数执行  
#### 自己实现  
1.state数据  
2.JSX模板  
3.数据+模板结合，生成真实的DOM来显示  
4.state发生改变  
5.数据+模板结合，生成真实的DOM来代替原始的DOM   
缺陷：  
DOM生成、替换的开销大 

1.state数据  
2.JSX模板  
3.数据+模板结合，生成真实的DOM来显示  
4.state发生改变  
5.数据+模板结合，生成真实的DOM  
6.新DOM(DocumentFragment)和原始DOM做比对，找差异  
7.更新DOM发生变化元素，替换老的DOM元素  
缺陷：  
性能提升不明显   

1.state数据  
2.JSX模板  
//JSX->React.createElement('标签名'，'属性'，'内容')->虚拟DOM(JS对象)->真实DOM  
3.数据+模板生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实的DOM)[损耗了性能] 
<div id='abc'><span>hello world</span></div>
{'div',{id:'abc'},['span',{},'hello world']}   
4.虚拟DOM结构生成真实的DOM来显示   
5.state发生变化  
6.数据+模板生成新的虚拟DOM[极大提升了性能]  
{'div',{id:'abc'},['span',{},'bye']}    
7.比较原始虚拟DOM和新的虚拟DOM区别，找到区别[极大提升了性能]    
8.直接操作DOM，改变区别中的内容    
优点：  
1.性能提升了  
2.使得跨端应用得以实现。React Native  虚拟DOM->原生应用组件   

### diff算法  
- setState数据发生变化，设置成异步，多次setState合并成一次，减少DOM比对次数    
- 同层比对，算法简单速度快  
- 列表循环key比对，key设置提升虚拟DOM比对性能，需要使用稳定key值，最好不要index,因为无法保证虚拟DOM前后key值不变     

### 生命周期函数(针对组件)  
生命周期函数某一时刻组件会自动执行的函数   
constructor()/render()  
初始化：  
constructor()   
挂载：  
在组件即将被挂载到页面的时刻自动执行    
- componentWillMount()  
- render()  
- componentDidMount()     
更新：  
props:  
//一个组件从父组件接收参数   
//只要父组件render重新执行，子组件的这个函数就自动执行   
//如果组件第一次存在于父组件中，不会被执行  
//如果之间已经存在于父组件中，就会执行  
componentWillReceiveProps()
state:  
//组件被更新之前自动执行,返回布尔值决定组件是否被更新   
shouldComponentUpdate()   
componentWillUpdate()  
//ajax请求   
componentDidUpdate()  
卸载：  
//组件即将被清除时自动执行    
componentWillUnmount()  
### React性能优化  
- this.handleClick改变作用域放在constructor(),只会执行一次，避免子组件的为谓渲染  
-  setState内置异步，降低虚拟DOM比对频率  
- 虚拟DOM，同层比对，key值  
- shouldComponentUpdate()避免子组件的重复render()
### axios请求  
