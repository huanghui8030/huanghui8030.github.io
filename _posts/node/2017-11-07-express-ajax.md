---
layout: post
title:  "NodeJs中通过express框架ajax获取参数的方法"
date:   2017-11-07 14:30:10 +0800
categories: node
sort: 0613
---

NodeJs中通过express框架ajax获取参数的方法有两种：

- post请求，通过`req.body.name`来获取提交过来的参数；

  ```js
  router.route("/pmfz/add").post(function(req,res){ 
      var bodyData = {
          name : req.body.name,
          defaultflag : req.body.defaultflag
      }
      Pmfz.addData(req,res,bodyData);
  });
  ```

  ​

- get请求，请过`req.query.name`来获取参数

  ```js
  router.route("/pmfz/list").get(function(req,res){ 
      if(!req.session.user){              
          req.session.error = "请先登录"
          res.redirect('/login');    
      }else{
          var bodyData = {
              name : req.query.name,  //get请求获取参数方法与post不同。
              username : req.session.user.username
          }
          console.log(bodyData.name);
          Pmfz.getListData(req,res,bodyData);
      }
        
  })
  ```

  ​