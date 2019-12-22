# JSX  
React将标记和逻辑共同的存放在“组件”的松散耦合单元中。
## 添加JSX到项目
### ```<script>```标签   
```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script src="need.js" type="text/babel"></script>
```
### Node.js包管理  
- npm init -y  
- npm install babel-cli@6 babel-preset-react-app@3  
- src文件夹:need.js  
- npx babel --watch src --out-dir . --presets react-app/prod 
### JSX中嵌入表达式   
- 变量包裹在大括号中   
- ReactDOM使用驼峰法定义属性的名称   
