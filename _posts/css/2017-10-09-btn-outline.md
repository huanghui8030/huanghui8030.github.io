---
layout: post
title:  "去掉按钮点击后的虚线框样式"
date:   2017-10-09 11:26:19  +0800
categories: css
sort: 0303
---

button或者是input[type="button"]，点击后按钮区域会有一个蓝色的边框。

如果需要去掉，则需要加入：outline: none;

```
/* 初始化CSS中加入 */

input,button,select,textarea{
    outline:none;
}
```

