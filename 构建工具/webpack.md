# Webpack   
Webpack是静态模块打包器：   
入口文件->依赖关系图->代码块chunk->打包：less:css/js:js/...->输出bundle    
- Entry:入口起点  
- Output:bundle输出到哪里   
- Loader:处理非js文件   
- Plugins:打包优化和压缩   
- Mode:development/production   
>> less预处理器技术->CSS   
## 命令行操作   
```
npm init 
npm i webpack  
npm i webpack-cli  
//开发环境：webpack ./src/index.js -o ./build/built.js --mode-development  
//生产环境：webpack ./src/index.js -o ./build/built.js --mode-production
//只能处理js/json代码   
//生产环境和开发环境会ES6模块编译化处理，生产环境比开发环境多一个压缩JS代码   
entry:index.js   
```
