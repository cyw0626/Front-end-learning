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
# 开发环境优化  
- 优化打包构建速度    
- 优化代码调试  

# 生产环境优化  
- 优化打包构建速度  
- 优化代码运行性能  
    速度(eval>inline>cheap>...)
        eval-cheap-source-map
        eval-source-map
    调试友好
        source-map
        cheap-module-source-map
        cheap-source-map
    开发环境---->eval-source-map
    源代码隐藏
        内联会让代码体积变大，所以在生产环境不要用内联  
        nosources-source-map 全部隐藏
        hidden-source-map 只隐藏源代码，构建后的代码不隐藏

    生产环境---->source-map/cheap-modue-source-map

1. source-map:一种提供源代码到构建后代码映射技术(如果构建后代码出错，通过映射可以追踪源代码错误)
    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
    inline-source-map:内联    只生成一个内联的source-map   错误代码准确信息和源代码错误位置
    hidden-source-map：外部                               错误代码准确信息，只能定位到构建后的代码位置
    eval-source-map:内联     每一个文件都生成对应的source-map，都在eval中     错误代码准确信息和源代码错误位置
    nosources-source-map：外部                          错误代码准确信息，但是没有任何源代码位置信息
    cheap-source-map：外部                                错误代码准确信息，只精确到行
    cheap-module-source-map：外部                         错误代码准确信息和源代码错误位置

    1.外部生成了文件，内部没有  2.内联构建速度快
2. HMR：hot module replacement 模块热替换
    作用：一个模块发生变化，只会重新打包这一个模块，提升构建速度  
        样式文件：style-loader内部实现HMR
        js文件：默认不能使用HMR功能---->修改JS代码，添加支持HMR
        ```
            if (module.hot) {
                module.hot.accept('./xxx.js',function(){
                    //...
                })
            }
        ```
        html文件：默认不能使用HMR，同时不能保持热更新---->修改entry入口，将html文件引入    


1. oneOf[]--loader只会匹配一个  
2. HMR时babel需要缓存，cacheDirectory:true；
    ---->打包速度更快
    文件资源缓存：
    hash:每次webpack构建时会生成一个唯一的hash值
        一个变，都重新请求---缓存雪崩  
    chunkhash:根据chunk生成的hash值，如果打包来源于同一个chunk，那么hash一致
    contenthash:根据文件内容的hash
    ---->代码线上缓存优化
3. tree shaking 
    去除无用代码
    前提：1.必须使用ES6 module; 2.开启production环境----自动tree shaking
    作用：减少代码体积
    在package.json中配置
        "sideEffects":false 所有代码都没有副作用(都可以进行tree shaking)
        问题：可能会把css/ @babel/polyfill文件给shaking
        "sideEffects":["*.css","*.less"]
4. code split 
    chunk代码分割,按需加载
    1. entry多入口
    //可以将node_modules中代码单独打包成一个chunk输出    
    2. optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
    3. 使用js的import动态导入语法，将某个文件单独打包
        import().then(()=>{
            //文件加载成功
        }).catch(()=>{
            //eslint-disable-next-line
        })
5. 懒加载和预加载
//正常加载为并行加载，同一时间加载多个文件；预加载prefetch等其他资源加载完毕浏览器空闲了再加载其他资源
    懒加载：需要使用时才加载
        if(需要){
            import().then(()=>{
                //...
            }) 
        }
    预加载：使用之前才提前加载
        webpackPrefetch:true