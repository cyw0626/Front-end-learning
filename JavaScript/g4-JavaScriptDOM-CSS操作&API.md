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
- 添加内置样式表，在文档中添加一个<style>节点
```
var style=document.createElement('style');
style.setAttribute('media','screen');
style.innerHTML='body{color:red}';
document.head.appendChild(style);
  
var style=(function(){
  var style=document.createElement('style');
  document.head.appendChild(style);
  return style;})();
style.sheet.insertRule('.foo{color:red}',0);
```
- 添加外部样式表，在文档中添加一个<link>节点，然后将href属性指向外部样式表的URL  
```
var linkElm=document.createElement('link');
linkElm.setAttribute('rel','stylesheet');
linkElm.setAttribute('type','text/css');
linkElm.setAttribute('href','reset-min.css');
document.head.appendChild(linkElm);
```
#### CSSRuleList接口   
通过StyleSheet.cssRules属性，获取CSSRuleList实例，CSSRuleList接口是一个类似数组的对象，表示一组CSS规则，成员都是CSSRule实例  
#### CSSRule接口  
##### 概述  
一条CSS规则包括两个部分：CSS选择器和样式声明  
##### CSSRule实例的属性  
- CSSRule.cssText属性返回当前规则的文本  
- CSSRule.parentStyleSheet返回当前规则所在样式表对象  
- CSSRule.parentRule属性返回包含当前规则的父规则  
- CSSRule.type属性返回一个整数值，表示当前规则的类型  
##### CSSStyleRule接口  
- CSSStyleRule.selectorText属性返回当前规则的选择器  
- CSSStyleRule.style属性返回一个对象（CSSStyleDeclaration 实例），代表当前规则的样式声明，也就是选择器后面的大括号里面的部分  
##### CSSMediaRule接口  
如果一条 CSS 规则是@media代码块，那么它除了 CSSRule 接口，还部署了 CSSMediaRule 接口  
#### window.matchMedia()  
##### 基本用法  
window.matchMedia方法用来将CSS的MediaQuery条件语句转化成一个MediaQueryList实例  
##### MediaQueryList接口的实例属性  
- MediaQueryList.meida属性返回一个字符串，表示对应的MediaQuery条件语句  
- MediaQueryList.matches属性返回一个布尔值，表示当前页面是否符合指定的 MediaQuery 条件语句  
- MediaQueryList.onchange属性用来指定change事件的监听函数  
##### MediaQueryList接口的实例方法  
MediaQueryList 实例有两个方法MediaQueryList.addListener()和MediaQueryList.removeListener()，用来为change事件添加或撤销监听函数  
## Mutation Observer API  
Mutation Abserver API用来监视DOM变动，是异步触发，DOM的变动并不会马上触发，而是要等到当前所有DOM操作结束后才触发  
- 异步触发方式  
- 把DOM变动记录封装成一个数组进行处理  
- 既可以观察DOM的所有类型变动，也可以指定只观察某一类型的变动  
### MutationObservera构造函数  
新建观察器实例，同时指定这个实例的回调函数  
```
var observer=new MutationObserver(callback);  //回调函数接受两个参数：变动数组、观察器实例  
```
### MutationObserver的实例方法  
- observer()用来启动监听，接受两个参数：索要观察的DOM节点、指定所要观察的特定变动  
- disconnect()方法用来停止观察，takeRecords()返回已检测到但尚未由观察者的回调函数处理的所有匹配DOM更改的列表，使变更队列保持为空  
### MUtationRecord对象  
DOM每次发生变化，就会1生成一条变动记录(MutationRecord实例)，该实例包含了与变动相关的所有信息  
### 应用
- 子元素变动  
- 属性的变动  
- 取代DOMContentLoad事件  
```
//使用MutationObserver对象封装一个监听DOM生成的函数  
(function(win){
  'use strict';

  var listeners = [];
  var doc = win.document;
  var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
  var observer;

  function ready(selector, fn){
    // 储存选择器和回调函数
    listeners.push({
      selector: selector,
      fn: fn
    });
    if(!observer){
      // 监听document变化
      observer = new MutationObserver(check);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true
      });
    }
    // 检查该节点是否已经在DOM中
    check();
  }

  function check(){
  // 检查是否匹配已储存的节点
    for(var i = 0; i < listeners.length; i++){
      var listener = listeners[i];
      // 检查指定节点是否有匹配
      var elements = doc.querySelectorAll(listener.selector);
      for(var j = 0; j < elements.length; j++){
        var element = elements[j];
        // 确保回调函数只会对该元素调用一次
        if(!element.ready){
          element.ready = true;
          // 对该节点调用回调函数
          listener.fn.call(element, element);
        }
      }
    }
  }

  // 对外暴露ready
  win.ready = ready;

})(this);

// 使用方法
ready('.foo', function(element){
  // ...
});
```
