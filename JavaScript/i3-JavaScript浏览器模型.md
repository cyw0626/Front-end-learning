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
## ArrayBuffer对象，Blob对象  
### ArrayBuffer对象  
ArrayBuffer对象表示一段二进制数据，用来模拟内存里面的数据。通过这个对象，JavaScript可以读写二进制数据。这个对象可以看作内存数据的表达。  
浏览器原生提供ArrayBuffer()构造函数，用来生成实例。它接受一个整数作为参数，表示这段二进制数据占用多少字节。   
```
var buffer=new ArrayBuffer(num);
```
- ArrayBuffer.byteLength表示当前实例占用的内存长度  
- slice()方法用来赋值一部分内存，它接受两个整数参数，分别表示复制开始位置和结束位置  
### Blob对象  
Blob对象表示一个二进制文件的数据内容，它通常用来读写文件，它的名字是Binary Large Object的缩写，它用来操作二进制文件  
```
//第一个参数是数组，成员是字符串或二进制对象，表示新生成的Blob实例对象的内容
//第二个参数是配置对象 
new Blob(array [,options])
```
#### 实例属性和实例方法  
- Blob.size返回数据大小，Blob.type返回数据类型  
- slice()用于拷贝原来的数据  
#### 获取文件信息  
> 文件选择器<input type="file">用来让用户选取文件  
文件选择器返回一个FileList对象，该对象是一个类似数组的成员，每个成员都是一个File实例对象  
```
//HTML代码
<input type="file" accpet="image/*" mutiple onchange="fileinfo(this.files)"/>  
//JS脚本  
function fileinfo(files){
  for(var i=0;i<files.length;i++){
    var f=files[i];
    console.log(f.name,f.size,f.type,f.lastModifiedDate);
  }
}
#### 下载文件  
AJAX 请求时，如果指定responseType属性为blob，下载下来的就是一个 Blob 对象  
#### 生成URL  
#### 读取文件  
取得Blob对象以后，可以通过FileReader对象，读取Blob对象的内容  
- FileReader.readAsText()：返回文本，需要指定文本编码，默认为 UTF-8。  
- FileReader.readAsArrayBuffer()：返回 ArrayBuffer 对象。  
- FileReader.readAsDataURL()：返回 Data URL。  
- FileReader.readAsBinaryString()：返回原始的二进制字符串。  
```
//HTML代码  
<input type="file" onchange="typefile(this.file[0])"></input>
//JS代码  
function onchange(file){
  var slice=file.slice(0,4);
  var reader=new FileReader();
  reader.readArrayBuffer(slice);
  reader.onload=function(e){
    var buffer=reader.result;
    // 将这四个字节的内容，视作一个32位整数
    var view=new DateView(buffer);
    var magic=view.getUnit32(0,false);
    switch(magic){
      case 0x89504E47: file.verified_type = 'image/png'; break;
      case 0x47494638: file.verified_type = 'image/gif'; break;
      case 0x25504446: file.verified_type = 'application/pdf'; break;
      case 0x504b0304: file.verified_type = 'application/zip'; break;    
    }
    console.log(file.name,file.verified_type);
  };
}
```
## File对象，FileList对象，FileReader对象  
### File对象
File对象代表一个文件，用来读写文件信息  
最常用的使用场合是表单的文件上传空间(<input type="file">),用户选中文件以后，浏览器就会生成一个数组，里面是每一个用户选中的文件，它们都是File实例对象  
#### 构造函数  
```
new File(array,name[,options])
```
#### 实例属性和实例方法  
- File.lastModified:最后修改时间  
- File.name:文件名或文件路径  
- File.size:文件大小  
- File.type:文件的MIME类型  
### FileList对象  
- length属性
- item()方法用来指定返回指定位置的实例  
### FileReader对象  
FileReader对象用于读取File对象或Blob对象所包含的文件内容  
## 表单、FormData对象  





