//浅拷贝：新对象的成员都是对原对象成员的引用。如果修改了原对象的成员，会同步反应到新对象。
let obj1={};
let obj2={};
let obj={...obj1,...obj2};
//or
let obj=Object.assign({},obj1,obj2};
//深拷贝：深拷贝拷贝了对象里面的值，如果修改原对象的成员，不会同步反应到新对象。  
//方法1
let cloneObj=JSON.parse(JSON.stringify(obj));
//方法2  
function deepClone(obj){
  if(obj&& typeof obj==="object"){
    let objClone=Array.isArray(obj)?[]:{};  //  obj是否是数组
  }
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
    //判断obj子元素是否为对象
      if(obj[key]&&typeof obj[key]==="object"){
        //递归复制
        objClone[key]=deepClone(obj[key]);
      }else{
        //简单复制
        objClone[key]=obj[key];
      }
    }
  }
  return objClone;
}
