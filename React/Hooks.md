# Hooks  
React hooks帮助大家将数据和行为绑定   
V=f(props,state),UI=V usehook()  
## What's Hooks?  
- 状态：state hook  
```
const[状态，行为]=useState(初始化);   
```
### 将UI与行为进行解耦
- 作用：effect hook   
```
//依赖变化的作用  
useEffect(someEffect(deps)，deps)
```
客观世界存在输入和输出之外的东西（改变URL，setCookie,console.log(),改变环境...）  
- 上下文：context hook  
组件的行为和数据进行解耦  
```
UI=>(data)=>{
  const(userType)=useContext(userTypeContext);
  switch(userType){
    ...不同的渲染逻辑
  }
}
```
## reducer  
设计模式：提供一种抽象状态行为的通用封装，以及计算过程的抽象方案     
Dispatch->reducer->state->视图   
```
const[data,dispatch]=useReducer(reducer,obj)
```
## 引用行为ref  
- 需要React之外做的一些事情：focus,媒体操作对象  
- 通常搭配useEffect   
- 值的缓存  
```
useRef()
```
## 缓存  
- 缓存useMemo  
- 缓存函数useCallback  
## 建议：  
### 使用React.memo减少重绘  
### hooks同步问题   
### hooks封装行为
