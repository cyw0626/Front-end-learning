# Babel  
Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。  
```
//安装Babel  
$ npm install --save-dev @babel/core
//最新转码规则
$ npm install --save-dev @babel/preset-env
//react转码规则
$ npm install --save-dev @babel/preset-react 

//加入.babelrc
{
  "presets":[
    "@babel/env",
    "@babel/preset-react"
  ],
  "plugins":[]
}
```
Google公司的Traceur转码器，也可以将ES6转为ES5。  
