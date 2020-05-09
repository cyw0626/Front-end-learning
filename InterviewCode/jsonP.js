function jsonP(url,data,callback){
    data.callback=callback;
    let params=[];
    for(let item in data){
        params.push(item+'='+data[item]);
    }
    let script=document.createElement('script');
    script.src=url+'?'+params.join('&');
    document.head.appendChild(script);
    return new Promise((resolve,reject)=>{
        window[callback]=(data)=>{
            try{
                resolve(data);
            }catch(e){
                reject(e)
            }finally{
                script.parentNode.removeChild(script);
            }
        }
    })
}
jsonP('http://photo.sina.cn/aj/index',{page: 1,cate:'recommend'},'jsonCallback').then(
    function(data){
        console.log(data);
    });
