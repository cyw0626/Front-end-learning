# DOM  
## CSS操作
CSS与JavaScript是两个有着明确分工的领域，前者负责页面的视觉效果，后者负责与用户的行为互动  
### HTML元素的style属性  
操作CSS样式最简单的方法:getAttribute(),setAttribute(),removeAttibute()  
### CSSStyleDeclaration接口  
#### 简介  
- 元素节点的style属性(Element.style)  
- CSSStyle实例的style属性  
- window.getComputedStyle()的返回值  
#### CSSStyleDeclaration实例属性  
- CSSStyleDeclaration.cssText属性用来读写当前规则的所有样式声明文本  
- CSSStyleDeclaration.length属性返回一个整数值，表示当前规则包含多少条样式声明  
- CSSStyleDeclaration.parentRule属性返回当前规则所属的那个样式块  
#### CSSStyleDeclaration实例方法  
- CSSStyleDeclaration.getPropertyPriority()方法接受CSS样式的属性名作为参数，返回一个字符串，表示有没有设置important优先级  
- CSSStyleDeclaration.getPropertyValue()方法接受CSS样式属性名作为参数，返回一个字符串，表示该属性的属性值  
- CSSStyleDeclaration.item()方法接受一个整数值作为参数，返回该位置的CSS属性名  
- CSSStyleDeclaration.removeProperty()方法接受一个属性名作为参数，在CSS规则里面移除这个属性，返回这个属性原来的值  
- CSSStyleDeclaration.setProperty()方法设置新的CSS属性，该方法没有返回值  
### CSS模块的侦测  
判断当前浏览器是否支持某个模块，这就叫做CSS模块的侦测  
```
typeof element.style.transform === 'string';

document.body.style['maxWidth']   //""
```
### CSS对象  
- CSS.escape()用于转义CSS选择器里面的特殊字符  
- CSS.supports()方法返回一个布尔值，表示当前环境是否支持某一句CSS规则  
### window.getComputedStyle()  
window.getComputedStyle()返回浏览器计算后得到的最终规则  
### CSS伪元素  
CSS为元素是通过CSS向DOM添加的元素，主要是通过:before和:after选择器生成，然后用content属性指定伪元素的内容  
### StyleSheet接口  
#### 概述  
- StyleSheet接口代表网页的一张样式表，包括<link>元素加载的样式表和<style>元素内嵌的样式表  
- document对象的styleSheets属性，可以返回当前页面的所有StyleSheet实例（即所有样式表）。它是一个类似数组的对象  
#### 实例属性  
- StyleSheet.disabled返回一个布尔值，表示改样式表是否处于禁用状态  
- Stylesheet.href返回样式表的网址  
- StyleSheet.media属性返回一个类似数组的对象（MediaList实例），成员是表示适用媒介的字符串  
- StyleSheet.title属性返回样式表的title属性  
- StyleSheet.type属性返回样式表的type属性，通常是text/css  
- StyleSheet.parentStyleSheet属性返回包含了当前样式表的那张样式表  
- StyleSheet.ownerNode属性返回StyleSheet对象所在的 DOM 节点，通常是<link>或<style>  
- CSSStyleSheet.cssRules属性指向一个类似数组的对象（CSSRuleList实例），里面每一个成员就是当前样式表的一条 CSS 规则  
- CSSStyleSheet.ownerRule有些样式表是通过@import规则输入的，它的ownerRule属性会返回一个CSSRule实例，代表那行@import规则  
#### 实例方法  
- CSSStyleSheet.insertRule方法用于在当前样式表的插入一个新的 CSS 规则  
- CSSStyleSheet.deleteRule方法用来在样式表里面移除一条规则，它的参数是该条规则在cssRules对象中的位置  
#### 实例：添加样式表  
#### CSSRuleList接口  
#### CSSRule接口  
#### window.matchMedia()  
