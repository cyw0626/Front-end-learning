# jQuery-six学习
## jQuery noConflict()方法
noConflict()方法会释放对$标识符的控制，其他脚本就可以使用$了。
```
var jq = $.noConflict();
jq(document).ready(function(){
  jq("button").click(function(){
    jq("p").text("jQuery 仍然在工作!");
  });
});
```
=========================================================
```
$.noConflict();
jQuery(document).ready(function($){
  $("button").click(function(){
    $("p").text("jQuery 仍然在工作!");
  });
});
```
