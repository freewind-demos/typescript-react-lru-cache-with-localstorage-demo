TypeScript Vite React LruCache with LocalStorage Demo
===========================

将LruCache与LocalStorage结合使用。

由于LruCache并没有抽象出自定义get/set的接口，所以我们只能在操作LruCache的同时将数据保存在localStorage中，
并利用LruCache的dispose回调来删除localStorage的值，不严谨的利用localStorage。

对于普通开发加速够用了

```
npm install
npm start
```

It will open page on browser automatically.
