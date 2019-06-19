# React-router-dom学习

## react-router-dom进行登录权限的控制
>定义一个PrivateRoute组件
```
import {Route, Redirect} from "react-router-dom";
const PrivateRoute =({component: Component, ...rest})=>
  <Route
    {...rest}
    render={props=>
      true ?
      (
        <Component {...props}/>
      ) :
      (
        <Redirect to="/login" />
      )
     }
    />
};
export default PrivateRoute;
\\使用
<PrivateRoute path="/App" Component={App} />
```
## {this.props.children}自响应内容
>定义一个组件，组件内对路由进行渲染
```
<BrowserRouter>
  <App>   //  包裹该页面的组件
    <Route path="/" exact={true} component={Defaultpage} />
    <Route path="/Firstpage" component={Firstpage} />
    ...
   </App>
 </BrowserRoute>
 ```
