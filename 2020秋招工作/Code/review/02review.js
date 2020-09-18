//1.
//用setTimeout实现setInterval
function myInterval(fn,time){
    function interval(){
        setTimeout(interval,time);
        fn();
    }
    interval();
}
//2.
//深拷贝 
//缺点：
//对象里有函数，无法拷贝；无法拷贝原型链上的属性；数据层次很深，容易栈溢出      
var objClone = JSON.parse(JSON.stringify(obj));
// 无法保持引用，容易栈溢出   
function deepClone(obj){
    if(obj && typeof obj ==="object"){
        var objClone=Array.isArray(obj)?[]:{};
    }
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] && typeof obj[key] === 'object'){
                objClone[key] = deepClone(obj[key]);
            }else{
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
}
//防止栈溢出函数
function deepClone(obj){
    var root = {};
    var loopList = [
        {
            parent:root,
            key:undefined,
            data:obj
        }
    ];
    while(loopList.length){
        var node = loopList.pop();
        var parent = node.parent;
        var key = node.key;
        var data = node.data;
        var res = parent;
        if(typeof key !== 'undefined'){
            res = parent[key]={}
        }
        for(var k in data){
            if(data.hasOwnProperty(k)){
                if(typeof data[k] === 'object'){
                    loopList.push({
                        parent:res,
                        key:k,
                        data:data[k]
                    })                    
                }else{
                    res[k] = data[k]
                }
            }
        }
    }
    return root;
}
//3.
//下拉框
<a href='javascript:void(0);' onclick ='jsButton()'/>
//4.
//取消冒泡  
function stopBubble(e){
    if(e && e.stopPropagation){
        e.stopPropagation();
    }else{
        window.event.cancelBubble = true;
    }
}
//5.性能优化方法  
//雅虎军规
//减少DOM操作
//减少HTTP请求
//
//6.节流防抖   
//防抖：短时间内多次触发同一函数，只能执行最后一次，或者只在开始时执行   
function debounce(fn,time){
    let timer = null;
    return function(){
        let contexts = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(contexts,args);
        },time)
    }
}
//节流：一段时间内只允许函数执行一次   
function throttle(fn,time){
    let timer = null;
    return function(){
        let contexts = this,
            args = arguments;
        if(!timer){
            timer =setTimeout(function(){
                fn.apply(contexts,args);
                timer = null;
            },time);
        }
    }
}
