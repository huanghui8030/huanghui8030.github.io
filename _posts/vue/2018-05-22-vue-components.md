---
layout: post
title:  "vue中components配置"
date:   2018-05-22 21:31:30  +0800
categories: vue
sort: 1205
---

vue中components配置，具体代码如下：

main.js中修改：

```js
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

var myheader = {
    template:'<h1>header</h1>'
}
var myfooter = {
    template:'<div>footer</div>'
}

var layout = {
    template:'<div><my-header></my-header><my-footer></my-footer></div>',
    components:{
        'my-header':myheader,
        'my-footer':myfooter
    }
}

new Vue({
  el: '#app',
  template: '<my-layout></my-layout>',
  components: { 'my-layout':layout }
})

```



vue相关知识：

- 全局API
- 实例选项
- 实例方法和属性。
- 指令
- 内置组件