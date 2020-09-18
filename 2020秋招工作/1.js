function printShrinkTimes(n){
    let res = 0;
    if (n === 1) return res;
    let temp = n;
    while(temp !== 1){
        let pump = temp % 2;
        if(pump === 1){
            temp = temp * 3 + 1;
        }else{
            temp = temp / 2;
        }
        res += 1;        
    }
    return res;
}