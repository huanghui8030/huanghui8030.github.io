---
layout: post
title:  "holidayCalendar休息日设置日历插件"
date:   2017-10-13 11:12:19 +0800
categories: jquery
sort: 0105
---

- 为了满足实际需求，自己写的休息日设置日历插件。
- 通过参数设置休息日和工作日，显示当年日历，主要是图形化展示。



## 使用方法

- 引入jquery、插件样式和脚本等，如下

  ```javascript
  <link rel="stylesheet" href="css/holidayCalendar.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/holidayCalendar.js"></script>
  ```

- 新建dom元素

  ```html
  <div id="calendar"></div>
  ```

- 调用方法：

  ```javascript
  $(function () {
      $('#calendar').holidayCalendar({
          holidayArray:[20171001,20171002,20171003,20171004,20171005], //假期列表
          workingDayArray :[20171014,20171021]
      });
  });
  ```

  ​

## 参数用法

```javascript
ifCurrYear: true, //是否只显示当年的日历，超出后不可点击，需要设置
switchMonth: true,// 是否切换月份
hoverDate: false,// hover是否显示当天信息
backToday: true,// 是否返回当天
holidayArray:[],//休息日列表默认不填写时为正常周末，格式为：20171013
workingDayArray:[]//加班列表，格式为：20171013
```



## 效果图

![效果图](/assets/jquery/0501.png)



详见【[demo](/widget/jquery/holiday-calendar/index.html)】