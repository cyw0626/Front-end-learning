# wechat面试  
## 一 手撕代码  
### 1.题目1：合并两个升序链表。比如：L1={1, 3, 5}, L2={2, 4}, L1.merge(L2)后，L1={1, 2, 3, 4, 5}   
```
/**
 * function LinkNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {LinkNode} headL2
 */
LinkNode.prototype.merge = function (headL2) {

}
```
```
LinkNode.prototype.merge = function (headL2) {
    var n1=L1.val,
        n1Next=L1.next,
        n2=L2.val,
        n2Next=L2.next;
    while(n1Next!==null){
         if(n2>=n1){
            n1Next=n2;
         }else{
             L1.previous=n2;
         }
        n2=n2Next;
        n1=n1Next;
    }
    return L1;
}
```
### 2.题目2：给定一个递增的循环数组，从里面找出最小的元素。比如：[50, 52, 63, 90, 3, 8, 15, 44]，最小元素为3，要求时间复杂度尽可能小。  
```
/**
 * @param {number[]} nums
 * @returns {number} 
 */
const findmin = function (nums) {

}
```
```
const findmin = function (nums) {
    nums.sort(function(a,b){
        return a-b;
    })
    return nums[0];
}
```
### 3.题目3：找出二叉排序树中第3大的节点，要求空间复杂度为O(1)。   
```
/**
* function TreeNode(value) {
*     this.value = value
*     this.left = null
*     this.right = null
* }
* 
*
* @param {TreeNode} root
* @returns {number}
*/
const find = function (root) {

}
```
```
const find = function (root) {
    var arr=[],
        r=root.value,
        rLeft=root.left,
        rRight=root.right;
    if(rLeft!==null){
         arr.push(r);
         r=rLeft;
    }else if(rRight!==null){
          arr.push(r);
          r=rRight;
    }
}
```
## 二、项目  
### 1.ECAT怎么安全机制的，除了CRC还有什么其他的安全方法，丢包怎么办，数据序列不对？   
### 2.jquery用过的语法   
## 三、知识点   
### 1.操作CSS  
```
<div>
    <div>
        <p>指定这个?</p>
        <p>所有p?</p>
        <p></p>
    </div>
</div>
```
### 2.TCP三次握手，四次挥手？四次挥手中2，3，可以一起发吗？  
### 3.TCP和HTTP关系？http和https的区别，https的SSL？  
### 4.XSS安全？怎么消除  
### 5.跨域的了解   
### 6.异步怎么知道获取资源的线程结束？比如fetch....  
