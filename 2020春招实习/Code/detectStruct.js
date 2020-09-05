//通过调用construcor来识别  
{}.constructor;//返回object
[].constructor;//返回Array 
//通过instanceof来识别   
[] instanceof Array;//true  
{} instanceof Array;//false  
//通过Object.prototype.toString.call方法来识别  
Object.prototype.toString.call([])//["object Array"]
Object.prototype.toString.call({})//["object Object"]  
//通过ES6中的Array.isArray来识别  
Array.isArray([])//true  
Array.isArray({})//false  
