# [React16中Component&PureComponent](https://cloud.tencent.com/developer/article/1587390)   
- PureComponent与Component相似，都是用class定义组件时需要继承的类。  
- Component并未实现shouldComponentUpdate。  
- PuerComponent以<em>浅层对比</em>prop和state的方式实现了shouldComponentUpdate。  
- 如果赋予 React 组件相同的 props 和 state，render() 函数会渲染相同的内容，那么在某些情况下使用 React.PureComponent 可提高性能。
