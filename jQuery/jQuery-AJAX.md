# jQuery-five学习
## 什么是AJAX
>AJAX=异步 JavaScript 和 XML (Asynchronous JavaScript and XML)  

在不重载整个网页的情况下，AJAX通过后台加载数据，并在网页上进行显示。  
## jQuery-AJAX load()方法
load()方法从服务器加载数据，并把返回的数据放入被选元素中。
```
$(selector).load(URL,data,callback);  //必需URL,可选data与请求一起发送，可选callback是方法执行后的函数
```
- responseTxt-调用成功的结果内容  
- statusTxt-调用状态  //success or fail
- xhr-XMLHttpRequest对象  //200、400...
## jQuery-get()/post()方法
**GET-从指定的资源请求数据**  //返回缓存  
**POST-向指定的资源提交要处理的数据**  //也可请求
```
$.get(URL,callback);
$.post(URL,data,callback);
```
