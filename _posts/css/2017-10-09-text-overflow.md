---
layout: post
title:  "文本省略显示"
date:   2017-10-09 16:12:19  +0800
description: 单行和多行文本省略显示方法
categories: css
sort: 7
---

文本省略显示分两种：单行和多行。
单行所有浏览器都兼容，多行目前仅支持webkit浏览器。

### 1、单行文本框省略显示，全兼容

```
/* 块级元素中加入以下样式 */
.div-block1{
    width: 400px; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

### 2、多行文本框省略显示，目前仅支持webkit浏览器

```
.div-block2{
    width: 400px; 
    display: -webkit-box;
    -webkit-line-clamp: 3;    
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```


- webkit-line-clamp 用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。 注意：这是一个`不规范`的属性，它没有出现在 CSS 规范草案中。`目前仅支持webkit浏览器`

- display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。

- -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

- text-overflow: ellipsis; ，可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。

