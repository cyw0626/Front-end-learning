# Proxy  
Proxy用于修改某些操作的默认行为。在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，可以对外界的访问进行过滤和还写  
```
var proxy=new Proxy(target,handle);
```
## Proxy实例方法  
- get(target,propKey,receiver):拦截对象属性的读取  
- set(target, propKey, value, receiver)：拦截对象属性的设置  
- has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值  
- deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值  
- ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组  
- getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象  
- defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值  
- preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值  
- getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象  
- isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值  
- setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值  
- apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作  
- construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作
### get()  
get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和proxy实例本身  
- get方法可以继承  
- get方法的第三个参数指向原始的读操作所在的那个对象  
- 属性不可配置(configurable)且不可写，proxy不能修改该属性  
### set()  
set方法用来拦截某个属性的赋值操作，可以接受四个参数：目标对象、属性名、属性值和proxy实例本身   
- set方法的第四个参数receiver,指的是原始的操作行为所在的那个对象  
- 目标对象的某个属性不可写且不可配置，set方法将不起作用  
- 严格模式下，set代理如果没有返回true，就会报错  
### apply()  
apply方法拦截函数的调用、call和apply操作，可以接受三个参数：目标对象、目标对象的上下文对象(this)和目标对象的参数数组  
### has()  
has方法用来拦截HasProperty操作，典型的操作就是in运算符  
- 原对象不可配置或禁止扩展，has拦截会报错  
- has拦截对for...in循环不生效  
### construct()  
construct方法用于拦截new命令，construct方法可以接受：目标对象、构造函数的参数对象、创造实例对象时的new命令作用的构造函数   
- construct方法返回的必须是一个对象，否则会报错  
### deleteProperty()  
deleteProperty方法用于拦截delete操作  
- 目标对象自身的不可配置的属性，不能被deleteProperty方法删除   
### defineProperty()   
defineProperty方法拦截了Object.defineProperty操作   
- 目标对象不可扩展，则defineProperty不能增加目标对象上不存在的属性  
- 目标对象的某个属性不可写或不可配置，defineProperty方法不能改变这两个设置  
### getOwnPropertyDescriptor()  
getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor(),返回一个属性描述对象或者undefined  
### getPrototypeOf()  
getPrototypeOf方法主要用来拦截获取对象原型  
### isExtensible()  
isExtensible方法拦截Object.isExtensible操作   
- 该方法只能返回布尔值，否则返回值会自动转为布尔值  
### ownKeys()  
ownKeys方法用来拦截对象自身属性的读取操作  
- 使用Object.keys方法时，目标对象上不存在的属性/属性名为Symbol值/不可遍历的属性不会返回  
### preventExtensions()  
preventExtensions方法拦截Object.preventExtensions()  
- 该方法必须返回一个布尔值，否则会自动转为布尔值  
### setPrototypeOf()  
setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法  
## Proxy.revocable()  
Proxy.revocable方法返回一个可以取消的Proxy实例，revoke是一个函数，可以取消Proxy实例  
## this问题  
Proxy代理的情况下，目标对象内部的this关键字会指向Proxy代理   
- 有些原生对象的内部属性，只有通过正确的this才能拿到  
## 实例：Web服务的客户端   
```
const service=createWebService('hhtp://example.com/data');

service.employees().then(json=>{
  const employees=JSON.parse(json);
  //...
})

function createWebService(baseUrl){
  return new Proxy({}，{
    get(target,propKey,receiver){
      return ()=>httpGet(baseUrl+'/'+propkey);
    }
  });
}
```




