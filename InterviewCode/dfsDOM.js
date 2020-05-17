//DFS
//递归  
let res=[];
function dfsDOM(node){
    if(node){
        res.push(node);
        let children=node.children;
        for(let i=0;i<children.length;i++){
            dfsDOM(children);
        }
    }
    return res;
}
//非递归  
function dfsDOM(node){
    let res=[];
    let stack=[];
    if(node){
        stack.push(node);
        while(stack.length){
            let item=stack.pop();
            res.push(item);
            let children=item.children;
            for(let i=children.lenght-1;i>0;i--){
                stack.push(children[i]);
            }
        }
    }
    return res;
}
