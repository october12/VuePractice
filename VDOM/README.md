[代码来源](https://segmentfault.com/a/1190000007334535#articleHeader3)<br/>
在创建Vue实例时，对指定的html元素render时记录下来render使用到的data属性，
然后将该render加入此属性的更新依赖中。因此在data属性更新时，如果影响了展示
效果，则会执行render。<br/>
此方式与监听器（watcher）的工作方式都使用通过data属性的get增加监听，set通知监听者这一思想。其区别主要在于二者使用的地方不同
* 响应式的实现是在Vue构造函数中，在执行options.render时将render函数同时作为监听通知的回调函数
* 监听器是在创建Watcher对象时，增加回调函数，见../Observe