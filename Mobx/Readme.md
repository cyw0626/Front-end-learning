# Mobx  
## 新入职公司采用ts+mobx的形式进行状态管理，今天看了一天大概了解了一些   
### store  
#### 在react用来保存状态。单独创建一个组件用来保存，里面的state要用observable进行监控；可以定义一些action方法，用来改变state；（这点就可以取消setState方法）可以用computed同样用来监听状态。（这点类似VUE）   
> 因为装饰器decorate只能装饰类和类方法，所以store的定义必须使用类组件。  
### index.tsx   
#### 在index页面中要将store注入到定义的类中，同时页面定义的类要用@observable监听     
