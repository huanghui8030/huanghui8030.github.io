---
layout: post
title:  "Nodejs服务器挂掉后自动重启方法"
date:   2018-02-08 21:30:10 +0800
categories: node
sort: 0620
---

在使用nodejs启动服务器后经常会遇到一个问题，那就是服务器挂掉后需要**手动**执行一遍node的方法来启动服务器。这里提供两种方法，来自动重启node服务器。

## 有错误时，重启进程

- 新建start.js

  ```js
  //start.js
  test();
  function test() {
      console.log("服务进行中。。。");
   
      setTimeout(function () {
          console('模拟各种异步业务逻辑。。。');//这里是一行错误代码，作为测试使用
          //业务正常执行完成，系统退出。
          process.exit(0);
      },1000);
  }
  ```

- 新建auto.js

  ```js
  //auto.js 自动重启
  let process = require('child_process');
  let fs = require('fs-extra');
  let ChildProcess  = process.fork('./start.js');
   
  ChildProcess.on('exit',function (code) {
      console.log('process exits + '+code);
      fs.appendFileSync('./log.txt','线程退出');
      if(code !== 0){
          process.fork('./auto.js');
      }
  });
  ```

- 终端执行：`node auto.js`

  ![效果图](/assets/node/2001.png)

- 结果，可以看到服务器自动重启，并指出错误的地方。

- 修改了代码后，可看到node服务执行正常。

  ![效果图](/assets/node/2002.png)

> 详见[demo](https://github.com/huanghui8030/Node/tree/master/test/reload)

## Nodejs中的Express方法中重启服务器方法

- 全局安装[node-dev](https://www.npmjs.com/package/nodedev)：npm i -g node-dev

- 将package.json中的 `node ./bin/www`改成 `node-dev ./bin/www`

- 启动方法`cnpm start`还是不变

  ![效果图](/assets/node/2003.png)

- 如果js中有错误的时候会报错，直到错误修改后，会自动重启服务器，是一个很好的方法。

  ​



