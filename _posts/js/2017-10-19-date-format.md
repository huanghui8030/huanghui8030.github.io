---
layout: post
title:  "原生js实现Date格式转化"
date:   2017-10-18 10:12:19 +0800
categories: js
sort: 0203
---

- 通过js获取到时间的方法，但是时间经常不对，需要进行转换才行，而且每次转换时间。

  ```js
  var date = new Date();//显示结果：Wed Nov 18 2017 14:52:33 GMT+0800 (CST)
  ```

- 定义Format方法，针对时间进行格式化处理，：

  ```js
  //日期格式化
  Date.prototype.Format = function (fmt) { 
      var o = {
          "M+": this.getMonth() + 1, //月份 
          "d+": this.getDate(), //日 
          "h+": this.getHours(), //小时 
          "m+": this.getMinutes(), //分 
          "s+": this.getSeconds(), //秒 
          "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
          "S": this.getMilliseconds() //毫秒 
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
  }
  ```

- 用法：

  ```js
  new Date().Format("yyyy-MM-dd hh:mm:ss");//输出结果：2017-11-01 14:56:12
  ```

  ​


