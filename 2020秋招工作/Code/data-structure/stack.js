//封装栈
function Stack(){
    this.item = [];
    Stack.prototype.push = function(element){
        this.item.push(element);
    }
    Stack.prototype.pop = function(){
        return this.item.pop();
    }
    Stack.prototype.peek = function(){
        return this.item[this.item.length-1];
    }
    Stack.prototype.isEmpty = function(){
        return this.item.length === 0;
    }
    Stack.prototype.sizw = function(){
        return this.item.length;
    }
    Stack.prototype.toString = function(){
        let res = '';
        for(let i = 0;i < this.item.length; i++){
            res += this.item[i];
        }
        return res;
    }
}
//10->2
function dec2bin(decNum){
    const s = new Stack();
    while(decNum>0){
        s.push(decNum%2);
        decNum = Math.floor(decNum/2);
    }
    let res = '';
    while(!s.isEmpty()){
        res += s.pop();
    }
    return res;
}
