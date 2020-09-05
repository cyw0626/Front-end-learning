//前序遍历DLR  
//递归
let result=[];
let dfsPreOrder=function(node){
    if(node){
        result.push(node.value);
        dfsPreOrder(node.left);
        dfsPreOrder(node.right);
    }
}
//迭代  
let defPreOrder=function(node){
    let result=[];
    let stack=[];
    stack.push(node);
    while(stack.length){
        let current=stack.pop();
        result.push(current.value);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return result;
}
//中序遍历LDR
//递归
let result=[];
let dfsInOrder=function(node){
    if(node){
        dfsPreOrder(node.left);
        result.push(node.value);
        dfsInOrder(node.right);        
    }
    return result;
}
//迭代
function dfsInOrder(node){
    let result=[];
    let stack=[];
    while(stack.length||node){
        if(node){
            stack.push(node);
            node=node.left;
        }else{
            node=node.pop();
            result.push(node.value);
            //若无右子树，则取父节点  
            node=node.right;
        }
    }
}
//后序遍历LRD
//递归  
let result=[];
function dfsPostOrder(node){
    if(node){
        dfsPostOrder(node.left);
        dfsPostOrder(node.right);
        result.push(node.value);
    }
    return result;
}
//迭代
function dfsPostOrder(node){
    let result=[];
    let stack=[];
    stack.push(node);
    while(stack.length){
        if(node.left&&!node.touched){
            node.touched='left';
            node=node.left;
            stack.push(node);
            continue;
        }
        if(node.right&&!node.touched){
            node.touched='right';
            node=node.right;
            stack.push(node);
            continue;
        }
        node=stack.pop();
        node.touched&&delete node.touched;
        result.push(node.value);
        node=stack.length?stack[stack.length-1]:null;
    }
    return result;
}
//广度遍历BFS  
//递归  
let result=[];
//将二叉树压入栈中
let stack=[tree]; 
let count=0;
let bfs=function(){
    let node=stack[count];
    if(node){
        result.push(node.value);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
        count++;
        bfs();
    }
}
//迭代  
function bfs(node){
    let result=[];
    let queue=[];
    queue.push(node);
    //利用指针代替shift()
    let pointer=0;
    while(pointer<queue.length){
        //推入一个执行一个
        let node=queue[pointer++];
        result.push(node.value);
        node.left&&queue.push(node.left);
        node.right&&queue.push(node.right);
    }
    return result;
}
