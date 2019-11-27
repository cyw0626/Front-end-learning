# Reflect  
Reflect设计目的：  
- 将Object对象的一些明显属于语言内部的方法放到Reflect对象上  
- 修改某些Object方法的返回结果，让其变得更合理  
- 让Object操作都变成函数行为  
- Reflect对象的方法和Proxy对象的方法一一对应   
## 静态方法  
- Reflect.get(target,name,receiver)方法返回target对象的name属性   
> 如果第一个参数不是对象，Reflect.get方法会报错  
- Reflect.set(target,name,value,receiver)方法设置target对象的那么属性等于value  
> 如果第一个参数不是对象，Reflect.set会报错  
- Reflect.has(Obj,name)方法对应name in obj里面的in运算符  
> 如果第一个参数不是对象，会报错  
- Reflect.deleteProperty(obj,name)   
Reflect.deleteProperty方法等同于delete obj[name],用于删除对象的属性  
- Reflect.construct(target,args)  
Reflect.construct方法等同于new target(...args),这提供一种不使用new,来调用构造函数的方法  
- Reflect.getPrototypeOf(obj)  
Reflect.getPrototypeOf方法用于读取对象的_proto_属性，对应Object.getPrototypeOf(obj)  
- Reflect.setPrototypeOf(obj,newProto)  
Reflect.setPrototypeOf方法用于设置目标对象的原型，对应Object.setPrototype(obj,newProto)方法   
- Reflect.apply(func,thisArg,args)  
Reflect.apply方法等同于Function.prototype.apply.call(func,thisArg,args),用于绑定this对象后执行给定函数  
- Reflect.defineProperty(target,propertyKey,attributes)  
Refelct.defineProperty方法基本等同于Object.defineProperty,用来为对象定义属性   
- Reflect.getOwnPropertyDescriptor(target,propertyKey)    
Reflect.getOwnPropertyDescriptor基本等同于Object.getOwnPropertyDescriptor  
- Reflect.isExtensible(target)  
Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展  
- Reflect.preventExtensions(target) 
Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功  
- Reflect.ownKeys(target)  
Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和  
## 实例：使用Proxy实现观察者模式  
