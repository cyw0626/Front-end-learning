# JavaScript标准库Math、Date、RegExp、Json对象
## Math对象
1.Math是JavaScript的原生对象，所有属性和方法都必须在Math对象上调用  
2.静态属性
- Math.E // 2.718281828459045
- Math.LN2 // 0.6931471805599453
- Math.LN10 // 2.302585092994046
- Math.LOG2E // 1.4426950408889634
- Math.LOG10E // 0.4342944819032518
- Math.PI // 3.141592653589793
- Math.SQRT1_2 // 0.7071067811865476
- Math.SQRT2 // 1.4142135623730951  

3.静态方法  
- Math.abs方法返回参数值的绝对值  
- Math.max方法返回参数之中最大的那个值，Math.min返回最小的那个值。如果参数为空, Math.min返回Infinity, Math.max返回-Infinity  
- Math.floor方法返回小于参数值的最大整数（地板值）;Math.ceil方法返回大于参数值的最小整数（天花板值）  
- Math.round方法用于四舍五入  
> Math.round()参数为负数时，对0.5处理是接近它的天花板值  
```
Math.round(-1.5)  //-1
```
- Math.pow方法返回以第一个参数为底数、第二个参数为幂的指数值  
- Math.sqrt方法返回参数值的平方根。如果参数是一个负值，则返回NaN  
- Math.log方法返回以e为底的自然对数值;其他底数可以用换底公式
```
Math.log(100)/Math.LN10   //2
```
- Math.exp方法返回常数e的参数次方  
- Math.random()返回0到1之间的一个伪随机数，可能等于0，但是一定小于1  
```
//任意范围的随机整数生成
function getRandomInt(min,max){
  return Math.floor(Math.random()*(max-min+))+min;
}
```
- Math.sin()：返回参数的正弦（参数为弧度值）
- Math.cos()：返回参数的余弦（参数为弧度值）
- Math.tan()：返回参数的正切（参数为弧度值）
- Math.asin()：返回参数的反正弦（返回值为弧度值）
- Math.acos()：返回参数的反余弦（返回值为弧度值）
- Math.atan()：返回参数的反正切（返回值为弧度值）
