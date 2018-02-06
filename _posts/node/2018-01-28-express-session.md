---
layout: post
title:  "express-session resave saveUninitialized 解释"
date:   2018-01-28 21:30:10 +0800
categories: node
sort: 0619
---

使用express-session配置时，如果用官方显示的方法，页面可能会有些提示内容。具体如下：

- npm包官网地址：[express-session](https://www.npmjs.com/package/express-session)

## 原来的使用方法

并不是完整的代码内容，部分内容如下：

```js
var session = require('express-session');
//cookie设置，用于判断用户名和密码
app.use(session({ 
    secret: 'secret',
    cookie:{ 
        maxAge: 1000*60*60
    }
}));
```

设置后，启动node付后，有如下提示：

```js
express-session deprecated undefined resave option; provide resave option app.js:15:9
express-session deprecated undefined saveUninitialized option; provide saveUninitialized option app.js:15:9
```

![效果图](/assets/node/1901.png)

**原因是resave和saveUninitialized现在已经没有默认值了，必须要设置才行！**



## 修改后

```js
var session = require('express-session');
app.use(session({ 
    resave: true,  // 新增
    saveUninitialized: true,  // 新增
    secret: 'secret',
    cookie:{ 
        maxAge: 1000*60*60
    }
}));
```

启动node，则页面会出改提醒文字。

其中每个参数的意思如下：

- resave : 是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
- saveUninitialized: 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sidsecure: 应用在https。
- node express 对于session cookie 的处理很有意思，就是这两个 cookie-parser express-session 模块，依赖关系很微妙。

