[代码来源](https://segmentfault.com/a/1190000004384515)<br/>
实现Vue中监听机制，模块也与Vue源码类似。其中在$watch中创建Waiter时，利用data属性的get添加回调函数。
