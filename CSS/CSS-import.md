# CSS-one学习
## CSS基础
CSS(Cascading Style Sheets)指层叠样式表。
当同一个HTML元素不止一个样式定义时，其优先权从高到低依次为：
- 内联样式（在HTML元素内部）
- 内联样式表（位于<head>标签内部）
- 外部样式表
- 浏览器缺省设置
## CSS语法
### CSS基础语法
CSS规则由两个主要的部分构成：选择器，以及一条或多条声明。
```
selector{
  property:value;
  ...
}
```
**注意：**
- 当使用RGB百分比时，即使值为0也要写百分比符号。其他情况则不需要。
- 如果值为若干单词，则给值加引号
- 多重声明和空格增强样式定义可读性
### 选择器的分组 
被分组的选择器可以分享相同的声明，用逗号将需要分组的选择器分开。
```
h1,h2,h3,h4{
  color:green;
}
```
### 继承问题
创建针对HTML的特殊规则，摆脱父元素的规则。
## CSS选择器
### 派生选择器
派生选择器允许根据文档的上下文关系确定某个标签的样式。
```
li strong{
  front-style:italic;
  front-weight:normal;
}
======================
<li><strong>位于li元素内的strong是斜体字。</strong></li>
```
### id选择器
**id 选择器为标有特定id的HTML元素指定特定的样式，以"#"来定义。**
### 类选择器
**在CSS中，类选择器以一个点号显示。**
### 属性选择器
```
[attribute]   //用于选取带有指定属性的元素
{
  ...;
}
============
[attribute=value]   //用于选取带有指定属性和值的元素
{
  ...;
}
==================
[attribute~=value]  //用于选取属性值中包含指定词汇的元素
{
  ...;
}
```
## 插入CSS样式表
### 外部样式表
```
<head>
  <link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```
### 内部样式表
```
<head>
  <style type="text/css">
    hr {color: sienna;}
  </style>
</head>
```
### 内联样式
```
<p style="color: red;">红色段落</p>
```
