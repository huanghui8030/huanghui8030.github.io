---
layout: post
title:  "纯CSS美化radio/checkbox样式"
date:   2017-10-10 14:01:19  +0800
categories: css
sort: 8
---

利用伪元素::before给label添加样式，利用CSS3的伪类选择器:checked，:hover，:focus，:disabled设置不用状态的样式。

> 注意： IE8只有指定!DOCTYPE才支持Content属性。


```
input[type=radio],input[type=checkbox]  {  
    display: inline-block;  
    vertical-align: middle;  
    width: 20px;  
    height: 20px;  
    margin-left: 5px;  
    -webkit-appearance: none;  
    background-color: transparent;  
    border: 0;  
    outline: 0 !important;  
    line-height: 20px;  
    color: #d8d8d8;  
}  
input[type=radio]:after  {  
    content: "";  
    display:block;  
    width: 20px;  
    height: 20px;  
    border-radius: 50%;  
    text-align: center;  
    line-height: 14px;  
    font-size: 16px;  
    color: #fff;  
    border: 2px solid #ddd;  
    background-color: #fff;  
    box-sizing:border-box;  
}  
  
input[type=checkbox]:after  {  
    content: "";  
    display:block;  
    width: 20px;  
    height: 20px;  
    text-align: center;  
    line-height: 14px;  
    font-size: 16px;  
    color: #fff;  
    border: 2px solid #ddd;  
    background-color: #fff;  
    box-sizing:border-box;  
}  
input[type=checkbox]:checked:after  {  
    content: "\2713";  
    border-color: #37AF6E;  
    background-color: #37AF6E;
}  
  
input[type=radio]:checked:after  {  
    content: "L";  
    transform:matrix(-0.766044,-0.642788,-0.642788,0.766044,0,0);  //IE9+
    -webkit-transform:matrix(-0.766044,-0.642788,-0.642788,0.766044,0,0);  
    border-color: #37AF6E;  
    background-color: #37AF6E;  
}

```


具体见[demo](/widget/css/checkbox.html)