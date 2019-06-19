# React-router-dom学习

## react-router-dom进行登录权限的控制
>定义一个PrivateRoute组件

**PravateRoute.js
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
```
**Mainpage.js**
```
\\使用
<PrivateRoute path="/App" Component={App} />
```
## { this.props.children }自响应内容
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

**Signin.js**
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

**Signout.js**
```
fetch(url)
   .then(res => res.json())
   .then(json =>{
      if(json)
      {alert('注册成功')}
   })
```
## 登录登出状态自响应显示
>登录状态显示
```
login(useInfo){
  this.setState({userName:userInfo.userName,passWord:userInfo.passWord,hasLogined: true})
  localStorage.userName=userInfo.userName;
  localStorage.passWord=userInfo.password;
}
```
>注销功能
```
loginout(){
  localStorage.userName='';
  localStorage.passWord='';
  this.setState({userName:'',passWord:'',hasLogined:false})
}
```
>对应头部Header.js

**Header.js**
```
<Nav hasLogined={this.state.hasLogined} 
     loginout={this.loginout.bind(this)}
     userName={this.state.userName} 
/>
```
**Nav.js**
```
<Loginout loginout={this.props.loginout} userName={this.props.userName} />
```
**Loginout.js**
```
import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
//如果已经登录，则头部显示用户名和退出按钮
export default class Logout extends React.Component {
  constructor(props) {
    super(props);
   }
  render() {
    return (
      <div>
        <a href='#' target='_blank'><Button type='primary'>{this.props.userName}</Button></a>
        <Button type='ghost' onClick={this.props.loginout}>注销用户</Button>
      </div>
    );
  }
}
//设置必须需要userName属性
Loginout.propTypes = {
    userName: PropTypes.string.isRequired
};
```
