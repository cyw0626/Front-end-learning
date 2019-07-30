# CSS高级
## CSS对齐
- 使用margin对齐，width不为100%
```
.center{
  margin-left:auto;
  margin-right:auto;
  width:90%;
  background-color:#b0e0e6;
}
```
- 使用position对齐
```
.left{
  position:absolute;
  left:0px;
  width:500px;
  background-color:#b0e0e6;
}
```
- 使用float属性进行对齐
```
.right{
  float:right;
  width:500px;
  background-color:#b0e0e6;
}
```
## CSS尺寸属性
属性|描述
:...:|:...:
height|设置元素高度
width|设置元素宽度
max-height|设置元素最大高度
max-width|设置元素最大宽度
min-height|设置元素最小高度
min-width|设置元素最小宽度
line-height|设置行高
