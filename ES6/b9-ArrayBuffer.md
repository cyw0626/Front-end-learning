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
