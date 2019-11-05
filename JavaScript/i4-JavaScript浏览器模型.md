# 浏览器模型  
## IndexedDB API  
### 概述  
IndexedDB就是浏览器提供的本地数据库，它可以被网页脚本创建和操作。IndexedDB允许储存大量数据，提供查找接口，还能建立索引。接近NoSQL数据库。  
- 键值对存储  
- 异步   
- 支持事务：一系列操作步骤之中，只要有一步失败，整个事务就都取消，滚回到实物发生之前的状态  
- 同源限制  
- 储存空间大  
- 支持二进制储存  
### 基本概念  
- 数据库：数据库是一系列相关数据的容器。每个域名都可以新建任意多个数据库。  
- 对象仓库：它类似于关系型数据库的表格  
- 数据记录：对象仓库保存的数据记录，每条记录类似于关系型数据库的行。包括不同的主键和数据体。  
- 索引：可以在对象仓库里面，为不同的属性建立索引  
- 事务：数据记录的读写和删改，都要通过事务完成  
### 操作流程  
- 打开数据库  
```
var db;
var request=window.indexedDB.open(databaseName,version);
request.onsuccess=function(event){
  db=request.result;
  console.log('数据库打开成功');
```
- 新建数据库  
新建数据库以后，新建对象仓库(新建表)  
```
request.onupgradneeded=function(event){
  db=event.target.result;
  var objectStore;
  if(!db.objectStoreNames.contains('chartName')){
    objectStore=db.createObjectStore('chartName',{key:'id'}); //主键是默认建立索引的属性
    objectStore.createIndex('name','name',{unique:false});
  }
}
```
- 新增数据  
新增数据指的是向对象仓库写入数据记录，需要通过事务完成  
```
function add(){
   var request=db.transaction(['person'],'readwrite')
      .objectStore('person')
      .add({id:1,name:'lemon',age:23,email:'lemon@qq.com'});
   request.consuccess=function(event){
    console.log('数据写入成功');
   };
   request.onerror=function(event){
    console.log('数据写入失败');
   }
}
add();
```
- 读取数据  
objectStore.get()方法用于读取数据，参数是主键的值  
```
function read() {
   var transaction = db.transaction(['person']);
   var objectStore = transaction.objectStore('person');
   var request = objectStore.get(1);

   request.onerror = function(event) {
     console.log('事务失败');
   };

   request.onsuccess = function( event) {
      if (request.result) {
        console.log('Name: ' + request.result.name);
        console.log('Age: ' + request.result.age);
        console.log('Email: ' + request.result.email);
      } else {
        console.log('未获得数据记录');
      }
   };
}

read();
```
- 遍历数据  
遍历数据表格的所有记录，要使用指针对象IDBCursor。  
```
function readAll() {
  var objectStore = db.transaction('person').objectStore('person');

   objectStore.openCursor().onsuccess = function (event) {
     var cursor = event.target.result;

     if (cursor) {
       console.log('Id: ' + cursor.key);
       console.log('Name: ' + cursor.value.name);
       console.log('Age: ' + cursor.value.age);
       console.log('Email: ' + cursor.value.email);
       cursor.continue();
    } else {
      console.log('没有更多数据了！');
    }
  };
}

readAll();
```
- 更新数据  
更新数据使用IDBObject.put()的方法  
```
function update() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' });

  request.onsuccess = function (event) {
    console.log('数据更新成功');
  };

  request.onerror = function (event) {
    console.log('数据更新失败');
  }
}

update();
```
- 删除数据  
IDBObjectStore.delete()方法用于删除记录  
```
function remove() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .delete(1);

  request.onsuccess = function (event) {
    console.log('数据删除成功');
  };
}

remove();
```
- 使用索引  
```
var transaction=db.transaction(['person'],readonly);
var store=transaction.objectStore('person');
var index=store.index('name');
var request=index.get('lemon');
request.onsuccess=function(e){
  var result=e.target.result;
  if(result){}
  else{}
}
```
### indexedDB对象  
- indexedDB.open()方法用于打开数据库。这是一个异步操作，但是会立刻返回一个 IDBOpenDBRequest 对象  
- indexedDB.deleteDatabase()方法用于删除一个数据库，参数为数据库的名字。它会立刻返回一个IDBOpenDBRequest对象，然后对数据库执行异步删除  
- indexedDB.cmp()方法比较两个值是否为 indexedDB 的相同的主键。它返回一个整数，表示比较的结果  
### IDBRequest对象  
### IDBDatabase对象  
- name/version/objectStoreNames/onabort/onclose/onerror/onversionchange  
- IDBDatabase.close()：关闭数据库连接，实际会等所有事务完成后再关闭。  
- IDBDatabase.createObjectStore()：创建存放数据的对象仓库，类似于传统关系型数据库的表格，返回一个 IDBObjectStore 对象。该方法只能在versionchange事件监听函数中调用。  
- IDBDatabase.deleteObjectStore()：删除指定的对象仓库。该方法只能在versionchange事件监听函数中调用。  
- IDBDatabase.transaction()：返回一个 IDBTransaction 事务对象.  
### IDBObjectStore对象  
```
db.transaction(['test'],'readonly')
  .objectStore('test')
  .get(num)
  .onsuccess=function(e){}
```
- IDBObjectStore.add()用于向对象仓库添加数据  
- IDBObjectStore.put()方法用于更新某个主键对应的数据记录，如果对应的键值不存在，则插入一条新的记录  
- IDBObjectStore.clear()删除当前对象仓库的所有记录  
- IDBObjectStore.delete()方法用于删除指定主键的记录
- IDBObjectStore.count()方法用于计算记录的数量  
- IDBObjectStore.getKey()用于获取主键  
- IDBObjectStore.get()用于获取主键对应的数据记录  
- IDBObjectStore.getAll()用于获取对象仓库的记录  
- IDBObjectStore.getAllKeys()用于获取所有符合条件的主键  
- IDBObjectStore.index()方法返回指定名称的索引对象 IDBIndex  
- IDBObjectStore.createIndex()方法用于新建当前数据库的一个索引。该方法只能在VersionChange监听函数里面调用  
- IDBObjectStore.deleteIndex()方法用于删除指定的索引。该方法只能在VersionChange监听函数里面调用  
- IDBObjectStore.openCursor()用于获取一个指针对象  
- IDBObjectStore.openKeyCursor()用于获取一个主键指针对象  
### IDBTransaction对象  
### IDBIndex对象  
### IDBCursor对象  
### IDBKeyRange对象  
- IDBKeyRange.lowerBound()：指定下限  
- IDBKeyRange.upperBound()：指定上限  
- IDBKeyRange.bound()：同时指定上下限  
- IDBKeyRange.only()：指定只包含一个值  
```
var t = db.transaction(['people'], 'readonly');
var store = t.objectStore('people');
var index = store.index('name');

var range = IDBKeyRange.bound('B', 'D');

index.openCursor(range).onsuccess = function (e) {
  var cursor = e.target.result;
  if (cursor) {
    console.log(cursor.key + ':');

    for (var field in cursor.value) {
      console.log(cursor.value[field]);
    }
    cursor.continue();
  }
}
```
## Web Worker  
### 概述  
Web Work的作用，就是为JavaScript创造多线程环境，允许主线程创建Worker线程，将一些任务分配给后者运行  
- 同源限制  
- DOM限制  
- 全局对象限制  
- 通信联系  
- 脚本限制  
- 文件限制
### 基本用法  
#### 主线程 
```
var worker=new Worker('work.js');
work.postMessage({method:'echo',args:['work']});
work.onmessage=function(event){
  doSomething(event.data);
}
worker.terminate();
```
#### Worker线程  
```
self.addEventListener('message',function(e){
  self.postMessage(e.data);
},false);
//self=this
```
#### Worker加载脚本
```
importScripts('scripts1.js','scripts2.js');
```
#### 错误处理  
#### 关闭WorKer  
```
//主线程
work.terminate();
//worker线程  
self.close();
```
### 数据通信  
这种通信是拷贝关系，是传值而不是传址  
```
//主线程
var uInt8Array=new Uint8Array(new ArrayBuffer(10));
for(var i=0;i<uInt8Array.length;i++){
  uInt8Array[i]=i*2;
}
work.postMessage(uInt8Array);

//Worker线性  
self.onmessage=funvtion(e){
  var uInt8Array=e.data;
  postMessabe('Inside worker.js: uInt8Array.toString() = ' + uInt8Array.toString());
  postMessage('Inside worker.js: uInt8Array.byteLength = ' + uInt8Array.byteLength);
}
```
### 同页面的Web Worker  
```
//html代码
<!DOCTYPE html>
  <body>
    <script id="worker" type="app/worker">
      addEventListener('message', function () {
        postMessage('some message');
      }, false);
    </script>
  </body>
</html>
//js代码
var blob = new Blob([document.querySelector('#worker').textContent]);
var url = window.URL.createObjectURL(blob);
var worker = new Worker(url);

worker.onmessage = function (e) {
  // e.data === 'some message'
};
```
### 实例：Worker线程完成轮询  
浏览器需要轮询服务器状态，以便第一时间得知状态改变  
```
function createWorker(f){
  var blob=new Blob(['{'+f.toString()+')']);
  var url=window.URL.createObjectURL(blob);
  var worker=new Worker(url);
  return worker;
}

var pollingWorker=createWorker(function(e){
  var cache;
  function compare(new ,old){//...};
  
  setInterval(function(){
    fetch('/my-api').then(
    function(res){
    var data=res.json();
    if(!compare(data,cache)){
      cache=data;
      self.postMessage(data);
    }
    }),1000)
  });
  pollingWorker.onmessage=function(){
  //render data
  }
  pollingWorker.postMessage('init');
  ```
### Worker新建Worker  
```
//主线程
var worker = new Worker('worker.js');
worker.onmessage = function (event) {
  document.getElementById('result').textContent = event.data;
};
//worker.js
// settings
var num_workers = 10;
var items_per_worker = 1000000;

// start the workers
var result = 0;
var pending_workers = num_workers;
for (var i = 0; i < num_workers; i += 1) {
  var worker = new Worker('core.js');
  worker.postMessage(i * items_per_worker);
  worker.postMessage((i + 1) * items_per_worker);
  worker.onmessage = storeResult;
}

// handle the results
function storeResult(event) {
  result += event.data;
  pending_workers -= 1;
  if (pending_workers <= 0)
    postMessage(result); // finished!
}
//core.js
var start;
onmessage = getStart;
function getStart(event) {
  start = event.data;
  onmessage = getEnd;
}

var end;
function getEnd(event) {
  end = event.data;
  onmessage = null;
  work();
}

function work() {
  var result = 0;
  for (var i = start; i < end; i += 1) {
    // perform some complex calculation here
    result += 1;
  }
  postMessage(result);
  close();
}
```
### API  





   
