# ArrayBuffer   
ArrayBuffer对象、TypedArray视图和DataView视图是JavaScript操作二进制数据的一个接口。  
- ArrayBuffer对象   
代表内存之中一段二进制数据，可以进行视图操作   
- TypedArray视图   
共9种类型视图   

|数据类型|字节长度|含义|
|:---:|:---:|:---:|
|Int8|1|8位带符号整数|
|Unit8|1|8位不带符号整数|
|Uint8C|1|8位不带符号整数(自动过滤溢出)|
|Int16|2|16位带符号整数|
|Uint16|2|16位不带符号整数|
|Int32|4|32位带符号整数|
|Uint32|4|32位不带符号整数|
|Float32|4|32位位浮点数|
|Float64|8|64位浮点数|
- DataView视图   
自定义复合格式的视图，还可以自定义字节序   
## ArrayBuffer对象   
ArrayBuffer对象代表存储二进制数据的一段内存，它不能直接读写，只能通过视图读写   
ArrayBuffer也是一个构造函数，可以分配一段可以存放数据的连续内存区域   
```
const buf=new ArrayBuffer(32);  //每个字节的值默认0

const x1=new Int32Array(buffer);

const dataView=new DataView(buf);
dataView.getUint8(0)  //0
```
- ArrayBuffer.prototype.byteLength属性返回所分配内存区域的字节长度   
- ArrayBuffer.prototype.slice()将内存区域一部分拷贝生成一个新的ArrayBuffer对象  
```
const buf=new ArrayBuffer(8);
const newBuf=buf.slice(0,3);
```
- ArrayBuffer.isView()   
返回一个布尔值表示参数是否为ArrayBuffer的试图实例   
## TypedArray视图   
同一段内存，不同的数据有不同的解读方式，TypeArray视图数组成员都是同一个数据类型   
### 构造函数   
- TypedArray(buffer,byteOffset=0,length=?)   
- TypeArray(length)   
- TypeArray(typedArray)   
- TypedArray(arrayLikeObject)   
### 数组方法   
普通数组的操作方法和属性对TypedArray同样适用  
TypedArray数组部署了Iterator接口，可以被遍历  
### 字节序  
字节序指的是数值在内存中的表示方式   
小端字节序：相对重要的字节排在后面的内存地址，相对不重要字节排在前面的内存地址   
- BYTES_PER_ELEMENT属性表示这种数据类型占据的字节数   
- ArrayBuffer与字符串的互相转换  
使用原生的TextEncoder和TextDecoder方法   
- 溢出   
TypedArray数组抛弃溢出的位，然后按照视图类型解释   
正向溢出：当输入值大于当前数据类型的最大值，结果等于当前数据类型的最小值加上余值，再减去1   
负向溢出：当输入值小于当前数据类型的最小值，结果等于当前数据类型的最大值减去余值的绝对值，再加上1   
- TypedArray.prototype.buffer返回整段内存区域对应的ArrayBuffer对象   
- TypedArray.prototype.bytteLength返回TypedArray数组占据的内存长度，单位为字节   
TypedArray.prototype.byteOffset返回TypedArray数组从底层ArrayBuffer对象的哪个字节开始   
- TypedArray.prototype.length返回TypedArray数组含有多少个成员   
- TypedArray.prototype.set()用于复制数组，将一段内容完全复制到另一端内存   
- TypedArray.prototype.subarray()对于TypedArray数组的一部分再建立一个新的视图   
- TypedArray.prototype.slice()返回一个指定位置的新的TypedArray实例   
- TypedArray.of()将参数转为一个TypedArray实例   
- TypedArray.from()接受一个可遍历的数据结构作为参数，返回一个基于这个结构的TypedArray实例  
## 复合视图  
同一段内存之中可以依次存放不同类型的数据，叫做复合视图   
## DataView视图   
```
DataView(ArrayBuffer buffer[,字节起始位置[,长度]]);
```
- DataView.prototype.getXXX读取内存;DataView.prototype.setXXX写入内存   
## 二进制数组的应用  
- AJAX
```
let xhr=new XMLHttpRequest();
xhr.open('GET',url);
xhr.responseType='arraybuffer';

xhr.onload=function(){
  let arraybuffer=xhr.responce;
  //...
};
xhr.send();
```
- Canvas   
- WebSocket  
```
let socket=new WebSocket('ws://127.0.0.1:8000');
socket.binaryType='arraybuffer';

socket.addEventListener('open',function(event){
  const typedArray=new Uint8Array(4);
  socket.send(typedArray.buffer);
});

socket.addEventListener('message',function(event){
  const arrayBuffer=event.data;
  //...
})
```
- Fetch API  
```
fetch(url)
.then(function(response){
  return response.arrayBuffer()
})
.then(function(arrayBuffer){
//...
});
```
- File API  
```
const fileInput=document.getElementById('fileInput');
const file=fileInput.file[0];
const reader=new FileReader();
reader.readAsArrayBuffer(file);
reader.onload=function(){
  const arrayBuffer=reader.result;
  //...
};
```
## SharedArrayBuffer  
JavaScript是单线程的，Web worker引入了多线程：主线程与用户互动，Worker线程来承担计算任务  
ES2017引入SharedArrayBuffer,允许Worker线程与主线程共享一块内存  
```
\\主线程
const w=new worker('myworker.js')
const sharedBuffer=new SharedBuffer(1024);
w.postMessage(sharedBuffer);

const sharedArray=new Int32Array(sharedBuffer);
\\Worker线程  
onmessage=function(ev){
  const shardBuffer=ev.data;
  const shardArray=new Int32Array(sharedBuffer);
};
```
## Atomics对象   
SharedArrayBuffer API 提供Atomics对象，保证所有共享内存的操作都是“原子性”的，并且可以在所有线程内同步。  
- Atomics.store()用来向共享内存写入数据，Atomics.load()用来从共享内存的读出数据  
- Atomics.exchange()写入数据，返回替换的值  
- Atomics.wait()在一个线程进行操作时，休眠其他线程  
```
Atomics.wait(sharedArray,index,value,timeout)
```
- Atomics.wake()唤醒线程  
```
Atomics.wake(sharedArray,index,count)
```
- 运算方法  
```
Atomics.add(sharedArray,index,value);
Atomics.sub(sharedArray,index,value);
Atomics.or(sharedArray, index, value);
Atomics.xor(sharedArray, index, value);
```
- 其他方法  
Atomics.compareExchange(sharedArray, index, oldval, newval)：如果sharedArray[index]等于oldval，就写入newval，返回oldval  
Atomics.isLockFree(size)：返回一个布尔值，表示Atomics对象是否可以处理某个size的内存锁定。如果返回false，应用程序就需要自己来实现锁定  
