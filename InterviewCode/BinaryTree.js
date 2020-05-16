//求取二叉树的深度    
//题目链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    //DFS
    if(root==null) return 0;
    let left=maxDepth(root.left);
    let right=maxDepth(root.right);
    return Math.max(left,right)+1;
    //BFS
    let level=0;
    if(root==null) return level;
    let queue=[root];
    while(queue.length){
        let len=queue.length;
        while(len--){
            let cur=queue.pop();
            if(cur.left){
                queue.unshift(cur.left);
            }
            if(cur.right){
                queue.unshift(cur.right);
            }
        }
        level+=1;
    }
    return level;
};
