# JavaScript语法专题
## 数据类型转换
### 强制转换
- Number()将任意类型的值转化为数值  
> parseInt逐个解析字符，Number函数整体转换字符串的类型  
> Number方法参数是对象时，返回NaN，除非是包含单个数值的数组
```
Number([5])   //5
```
- String()函数将任意类型的值转化为字符串
- Boolean()函数将任意类型的值转化为布尔值
```
Boolean(undefined||null||0||NaN||'')    //false
```
> 所有对象的布尔值都是true
### 自动转换
