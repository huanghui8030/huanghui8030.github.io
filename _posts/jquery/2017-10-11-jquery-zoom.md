---
layout: post
title:  "jquery zoom 图片放大镜效果插件"
date:   2017-10-11 10:12:19 +0800
categories: jquery
sort: 0103
---

- jquery-zoom是基于jquery的插件，使用前需要引入jquery。
- 官方网址：[jQuery Zoom](http://www.jacklmoore.com/zoom/)
- 兼容性：Chrome，Firefox，Safari，Opera，IE 7+
- 基于jQuery 1.7+


## 基本用法

- 基于jquery，先引用jquery；

- 引入jquery-zoom：

  ```java
  <script src="../../js/1.8.3/jquery.min.js"></script>
  <script src="jquery.zoom.js"></script>
  ```

- 调用方法：

  - 直接方法该元素

  ```javascript
  $(function(){
    $('#ex1').zoom();//默认，鼠标移上直接放大
    $('#ex2').zoom({ on:'grab' });//按住鼠标时才放大
    $('#ex3').zoom({ on:'click' });//点击后放大了		 
    $('#ex4').zoom({ on:'toggle' });//点击后放大，再次点击缩小。
  });
  ```

  - 图片的父级进行放大：

  ```javascript
  $(function(){
    $('img')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom();
  });
  ```

- 参数设置

| 属性        | 默认值         | 描述                                       |
| --------- | ----------- | ---------------------------------------- |
| url       | false       | 要显示的大型照片的网址。如果没有提供url，zoom将使用分配给它的元素内的第一个子IMG元素的src |
| on        | 'mouseover' | 触发缩放的事件类型。选择`mouseover`，`grab`，`click`，或`toggle`。 |
| duration  | 120         | fadeIn / fadeOut的大图像速度。                  |
| target    | false       | 应该用作缩放图像的父容器的选择器或DOM元素。                  |
| touch     | true        | 通过触摸事件启用交互。                              |
| magnify   | 1           | 该值与缩放图像的全尺寸相乘。默认值为1，表示缩放图像应为其自然宽度和高度的100％。 |
| callback  | false       | 当图像加载时要调用的函数。在函数内部，`this`引用图像元素。         |
| onZoomIn  | false       | 当图像放大时要调用的函数。在函数内部，`this`引用图像元素。         |
| onZoomOut | false       | 当图像缩小时要调用的功能。在函数内部，`this`引用图像元素。         |

- 删除方法，触发`zoom.destroy`事件以从元素中移除缩放：

```javascript
$('#example').zoom(); // add zoom
$('#example').trigger('zoom.destroy'); // remove zoom
```





> 详见 [demo](/widget/jquery/jquery-zoom/demo.html)