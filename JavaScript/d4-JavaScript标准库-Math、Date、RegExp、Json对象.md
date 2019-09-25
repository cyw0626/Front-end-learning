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
1.正则表达式是一种表达文本模式的方法，有点像字符串的模板，常常用来按照“给定模式”匹配文本。  
```
//使用字面量，以斜杠表示开始和结束新建正则表达式
var regex=/xyx/;
//使用RegExp构造函数
var regex=new RegExp('xyz');
```
2.实例属性
- RegExp.prototype.ignoreCase:返回一个布尔值，表示是否设置i修饰符，加上i修饰符以后表示忽略大小写  
- RegExp.prototype.global:返回一个布尔值，表示是否设置了g修饰符，g修饰符表示全局匹配（global）  
- RegExp.prototype.multiline:返回一个布尔值，表示是否设置了m修饰符，m修饰符表示多行模式（multiline）  
- RegExp.prototype.flags:返回一个字符串，包含已经设置的所有修饰符，按字母排序    
- RegExp.prototype.lastIndex:返回一个整数，表示下一次开始搜索的位置。该属性可读写    
- RegExp.prototype.source：返回正则表达式的字符串形式，该属性只读  

3.实例方法  
- RegExp.prototype.test() 返回一个布尔值，表示当前模式是否能匹配参数字符串  
```
//如果正则模式是一个空字符串，则匹配所有字符串  
new RegExp('').test('abc')  //true
```
- RegExp.prototype.exec() 返回匹配结果  
> 正则表达式包含圆括号（“组匹配”），返回的数组会包括匹配成功的结果和匹配成功的组    

4.字符串的实例方法  
- String.prototype.match() 返回一个数组，成员是所有匹配度字符串  
- String.prototype.search() 按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置  
- String.prototype.replace() 按照给定的正则表达式进行替换，返回替换后的字符串  
> replace方法的第二个参数可以是美元符号$或函数（其返回值作为匹配内容）   
> $&：匹配的子字符串；$`：匹配结果前面的文本；$'：匹配结果后面的文本；$n：匹配成功的第n组内容，n是从1开始的自然数；$$：指代美元符号$  
- String.prototype.split() 按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员  

5.匹配规则  
①字面量字符和元字符  
- 点字符（.）匹配除回车（\r）、换行(\n) 、行分隔符（\u2028）和段分隔符（\u2029）以外的所有字符  
- 位置字符用来提示字符所处的位置，主要有两个字符：^ 表示字符串的开始位置和$ 表示字符串的结束位置  
- 竖线符号（|）在正则表达式中表示“或关系”（OR）  
②转义符  
正则表达式中那些有特殊含义的元字符，如果要匹配它们本身，就需要在它们前面要加上反斜杠。  
③特殊字符  
④字符类
- 脱字符[^] 除了字符类之中的字符，其他字符都可以匹配  
- 连字符（-）某些情况下，对于连续序列的字符，连字符（-）用来提供简写形式，表示字符的连续范围  
⑤预定义模式  
⑥重复类
模式的精确匹配次数，使用大括号（{}）表示。{n}表示恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次  
⑦量词符  
量词符用来设定某个模式出现的次数  
- ? 问号表示某个模式出现0次或1次，等同于{0, 1}  
- * 星号表示某个模式出现0次或多次，等同于{0,}  
- + 加号表示某个模式出现1次或多次，等同于{1,}  
⑧贪婪模式  
量词符默认情况下都是最大可能匹配，即匹配直到下一个字符不满足匹配规则为止，这被称为贪婪模式   
⑨组匹配  
正则表达式的括号表示分组匹配，括号中的模式可以用来匹配分组的内容   
## JSON对象
1.JSON格式(JavaScript Object Notation)是一种用于数据交换的文本格式  
2.JSON对值的类型和格式有严格的规定  
- 符合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象  
- 原始类型的值只有四种：字符串、数值（十进制表示）、布尔值和null  
- 字符串必须使用双引号表示，不能使用单引号  
- 对象的键名必须放在双引号里面  
- 数组或对象最后一个成员的后面，不能加逗号  
3.JSON.stringify()静态方法
- 基本方法：用于将一个值转为JSON字符串  
> 如果对象属性是undefined、函数或XML对象，该属性会被JSON.stringify过滤  
> 如果数组的成员是undefined、函数或XML对象，则这些值被转成null  
- JSON.stringify可以接受一个数组/函数作为第二个参数，指定需要转成字符串的属性  
- JSON.stringify可以接受第三个参数，如果是数字可在每个属性前加空格/如果是字符串，则字符串会添加在每行前面  
- 参数对象有自定义的toJSON方法，JSON.stringify会使用这个方法的返回值作为参数，忽略对象的其他属性  
```
//Date对象有自身的toJSON方法
var date=new Date();
date.toJSON()
JSON.toStringify(date)
```
```
// 设置 toJSON 方法时
RegExp.prototype.toJSON = RegExp.prototype.toString;
JSON.stringify(/foo/) // ""/foo/""
```
4.JSON.parse()
- 将JSON字符串转换成对应的值  
- 接受函数作为第二个参数
