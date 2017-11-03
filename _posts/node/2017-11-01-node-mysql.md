---
layout: post
title:  "nodeJS链接本地mysql数据库，实现数据查找功能"
date:   2017-11-01 10:12:19 +0800
categories: node
sort: 0606
---

nodeJs链接本地mysql数据库，方法如下：

- 安装mysql依赖包：`cnpm install mysql`

- 新建myslq.js，如下代码：

  ```js
  var mysql = require('mysql');  
    
  //创建连接，确保本地存在mysql数据库
  var client = mysql.createConnection({  
      host: '127.0.0.1',  //如果需要ip方法，请详见mysql下面的ip链接相关文章。
      user: 'root',
      password: 'root',
      database:'mysql',
      port: 3306 
  });  

  client.connect();

  var sql =  'SELECT * FROM monitor_page_list where id ="1509067438755";';
  client.query(  
      sql, 
      function selectCb(err, results, fields) {  
          if (err) {  
              throw err;  
          }  
          if(results){
              for(var i = 0; i < results.length; i++){
                  console.log("%d\t%s\t%s", results[i].id, results[i].name, results[i].url);
              }
          }    
          client.end();  //该方法是关闭数据库链接。
      }  
  ); 
  ```

- 终端执行：node mysql.js

- 效果如下：

  ![效果图](/assets/node/0601.png)

> 详见【[demo](/widget/nodejs/mysql/mysql.js)】

