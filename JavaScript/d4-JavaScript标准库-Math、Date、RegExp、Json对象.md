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
## Date()对象
1.Date对象是JavaScript的原生时间库，以国际标准时间(UTC)1970年1月1日00:00:00作为时间零点  
2.Date()直接调用，返回一个代表当前时间的字符串  
3.使用new构造Date对象,默认调用toString()方法返回字符串  
- new Date()参数可以是负数，代表1970年元旦之前时间  
- 只要是能被Date.parse()方法解析的字符串，都可以当作参数  
- 参数为年、月、日等多个参数时，年和月不能省略  
> 月的取值为0-11   
- 参数超出正常月份会被折算，月份大于11折算到下一年；参数为负数则扣去时间  
4.两个日期实例对象进行减法运算返回间隔毫秒数；进行加法运算返回两个字符串连接成的新字符串  
5.静态方法  
- Date.now()方法返回当前时间距离零点（1970年1月1日 00:00:00 UTC）的毫秒数  
- Date.parse()用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数；如果解析失败，返回NaN    
- Date.UTC()方法接受年、月、日等变量作为参数，返回该时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数
```
Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])
```
6.实例方法  
- Date.prototype.valueOf()方法返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数  
- Date.prototype.toString()方法返回一个完整的日期字符串  
- Date.prototype.toUTCString()方法返回UTC时间字符串   
- Date.prototype.toISOString()方法返回UTC时区的ISO8601写法
```
var d=new Date(2013,0,1);
d.toISOString()
//"2012-12-31T16:00:00.000Z"
```
- Date.prototype.toJSON()返回结果与toISOString()方法相同  
- Date.prototype.toDateString方法返回日期字符串（不含小时、分和秒）  
- Date.prototype.toTimeString方法返回时间字符串（不含年月日）  
- Date.prototype.toLocaleString()：转为完整的本地时间;toLocaleDateString()：转为本地日期（不含小时、分和秒）;toLocaleTimeString()：转为本地时间（不含年月日）  
- getTime()：返回实例距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
- getDate()：返回实例对象对应每个月的几号（从1开始）。
- getDay()：返回星期几，星期日为0，星期一为1，以此类推。
- getFullYear()：返回四位的年份。
- getMonth()：返回月份（0表示1月，11表示12月）。
- getHours()：返回小时（0-23）。
- getMilliseconds()：返回毫秒（0-999）。
- getMinutes()：返回分钟（0-59）。
- getSeconds()：返回秒（0-59）。
- getTimezoneOffset()：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。
```
//计算本年度还剩多少天
function leftDays(){
  var today=new Date();
  var endYear=new Date(today.getFullYear(),11,32,23,59,59,999);
  var msPerDay=24*60*60*1000;
  return Math.round((endYear.getTime()-today.getTime())/msPerDay);
}
```
- setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
- setFullYear(year [, month, date])：设置四位年份。
- setHours(hour [, min, sec, ms])：设置小时（0-23）。
- setMilliseconds()：设置毫秒（0-999）。
- setMinutes(min [, sec, ms])：设置分钟（0-59）。
- setMonth(month [, date])：设置月份（0-11）。
- setSeconds(sec [, ms])：设置秒（0-59）。
- setTime(milliseconds)：设置毫秒时间戳。  
## RegExp对象
