# 浏览器模型  
## Navigator对象,Screen对象  
### Navigator对象属性  
- Navigator.userAgent属性返回浏览器的 User Agent 字符串，表示浏览器的厂商和版本信息  
```
var ua=navigator.usrAgent.toLowerCase();
if(/mobi/i.test(us))
  {//手机浏览器}
else
  {//非手机浏览器}
```
- Navigator.plugins属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件  
- Navigator.platform属性返回用户的操作系统信息  
- Navigator.onLine属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）  
- Navigator.language属性返回一个字符串，表示浏览器的首选语言;Navigator.languages属性返回一个数组，表示用户可以接受的语言  
- Navigator.geolocation属性返回一个 Geolocation 对象，包含用户地理位置的信息。注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。  
①Geolocation.getCurrentPosition()：得到用户的当前位置  
②Geolocation.watchPosition()：监听用户位置变化  
③Geolocation.clearWatch()：取消watchPosition()方法指定的监听函数  
- Navigator.cookieEnabled属性返回一个布尔值，表示浏览器的 Cookie 功能是否打开  
### Navigator对象方法  
- Navigator.javaEnabled()方法返回一个布尔值，表示浏览器是否能运行 Java Applet 小程序  
- Navigator.sendBeacon()方法用于向服务器异步发送数据  
### Screen对象  
Screen 对象表示当前窗口所在的屏幕  
