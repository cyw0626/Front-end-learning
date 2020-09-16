//发布订阅模式
class EventEmitter {
    constructor(){
        this.events = {};
    }
    on(eventName,callback){
        if(!this.events[eventName]){
            this.events[eventName]=[callback];
        }else{
            this.events[eventName].push(Callback);
        }
    }
    emit(eventName){
        this.events[eventName] && this.events[eventName].forEach(cb=>cb())
    }
    removeListener(eventName,callback){
        if(this.events[eventName]){
            this.events[eventName]=this.events[eventName].filter(cb=>cb!=callback)
        }
    }
    once(eventName,callback){
        let fn = ()=>{
            callback();
            this.removeListener(eventName,fn);
        }
        this.on(eventName,fn);
    }
}
