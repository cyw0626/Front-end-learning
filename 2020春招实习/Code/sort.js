//冒泡排序,时间复杂度O（n^2)
function bubbleSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var swap=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=swap;
            }
        }
    }
    return arr;
}
//快排,利用二分法和递归,平均时间复杂度O（nlogn)  
function quickSort(arr){
    if(arr.length==0){
        return [];
    }
    var cIndex=Math.floor(arr.length/2);
    var c=arr.splice(cIndex,1);
    var s=[],l=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<c){
            s.push(arr[i]);
        }else{
            l.push(arr[i]);
        }
    }
    return quickSort(s).concat(c,quickSort(l));
}
