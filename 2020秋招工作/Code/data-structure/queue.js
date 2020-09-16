function Queue(){
    this.item = [];
    Queue.prototype.enqueue = function(element){
        this.item.push(element);
    }
    Queue.prototype.dequeue = function(){
        return this.item.shift();
    }
    Queue.prototype.front = function(){
        return this.item[0];
    }
    Queue.prototype.isEmpty = function(){
        return this.item.length === 0;
    }
    Queue.prototype.size = function(){
        return this.item.length;
    }
    Queue.prototype.toString = function(){
        let res = '';
        for(let i = 0; i < this.item.length; i++){
            res += this.item[i] + ' ';
        }
        return res;
    }
}
function passGame(nameList,num){
    const queue = new Queue();
    for(let i = 0; i < nameList.length; i++){
        queue.enqueue(nameList[i]);
    }
    while(queue.size()>1){
        for(let i = 0; i<num-1;i++){
            queue.enqueue(queue.dequeue());
        }
        queue.dequeue();
    }
    return queue.dequeue();
}