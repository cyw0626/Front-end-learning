# React-router-dom学习
***
## react-router-dom和sessionStorage进行登录权限的控制
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
