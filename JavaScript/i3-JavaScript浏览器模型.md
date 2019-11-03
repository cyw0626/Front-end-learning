# 浏览器模型  
## Location对象，URL对象，URLSearchParams对象  
### Location对象  
- Location对象提供：href、protocol、host、hostname、port...属性  
- Location.assign()方法接受一个URL字符串作为参数，使得浏览器立刻跳转到新的URL  
- Location.replace()方法接受一个URL字符串作为参数，使得浏览器立刻跳转到新的 URL，replace会在浏览器的浏览历史History里面删除当前网址   
- Location.reload()方法使得浏览器重新加载当前网址，相当于按下浏览器的刷新按钮  
- Location.toString()方法返回整个 URL 字符串，相当于读取Location.href属性  
### URL的编码和解码  
网页的URL只能包含合法的字符，URL元字符&语义字符  
- encodeURI()方法用于转码整个URL  
- encodeURIComponent()方法用于转码 URL 的组成部分，会转码除了语义字符之外的所有字符，即元字符也会被转码  
- decodeURI()方法用于整个 URL 的解码  
- decodeURIComponent()用于URL 片段的解码。它是encodeURIComponent()方法的逆运算  
### URL接口  
#### 构造函数
```
var url=new URL('https://www.baidu.com');
```
#### 实例属性  
#### 静态方法  
- URL.createObjectURL()方法用来为上传/下载的文件、流媒体文件生成一个 URL 字符串。这个字符串代表了File对象或Blob对象的 URL  
```
function handleFile(files){
  for(var i=0;i<files.length;i++){
    var img=document.createElement('img');
    img.src=window.URL.createObjectURL(files[i]);
    div.appendChile(img);
  }
}
```
- URL.revokeObjectURL()方法用来释放URL.createObjectURL()方法生成的 URL 实例  
### URLSearchParams对象  
URLSearchParams对象是浏览器的原生对象，用来构造、解析和处理 URL 的查询字符串（即 URL 问号后面的部分）  
```
// 方法一：传入字符串
var params = new URLSearchParams('?foo=1&bar=2');
// 等同于
var params = new URLSearchParams(document.location.search);

// 方法二：传入数组
var params = new URLSearchParams([['foo', 1], ['bar', 2]]);

// 方法三：传入对象
var params = new URLSearchParams({'foo' : 1 , 'bar' : 2});
```
```
//浏览器向服务器发送表单数据时，可以直接使用URLSearchParams实例作为表单数据  
const params=new URLSearchParams({foo:1,bar:2});
fetch('URL',{
  method:'POST',
  body:params
}).then(...)
```
- URLSearchParams.toString()方法返回实例的字符串形式  
- URLSearchParams.append()方法用来追加一个查询参数  
- URLSearchParams.delete()方法用来删除指定的查询参数  
- URLSearchParams.set()方法用来设置查询字符串的键值  
- URLSearchParams.get()方法用来读取查询字符串里面的指定键，URLSearchParams.getAll()方法返回一个数组，成员是指定键的所有键值  
- URLSearchParams.sort()方法对查询字符串里面的键进行排序  
- URLSearchParams.keys()，URLSearchParams.values()，URLSearchParams.entries()这三个方法都返回一个遍历器对象，供for...of循环遍历。它们的区别在于，keys方法返回的是键名的遍历器，values方法返回的是键值的遍历器，entries返回的是键值对的遍历器  
