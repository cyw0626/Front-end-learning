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
## 登录注册前后端信息交互例
>登录信息确认
```
fetch(url, {
   method: 'post',
   body: Json.stringify(data),
   }).then(res => res.json())
   .then(json => {
      if(json !== null){
        console.log(json);
        let userInfo ={ userName:json.userName,passWord:json.passWord};
        this.props.login(userLogin);  //改变响应式状态显示——>位于header
      }else{
        this.setState({hasUser: '用户名或密码错误'})
      }
  });
```
>注册信息确认
```
fetch(url)
   .then(res => res.json())
   .then(json =>{
      if(json)
      {alert('注册成功')}
   })
```
## 登录登出状态自响应显示

        
