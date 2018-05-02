---
layout: post
title:  "Sublime text3中运行Nodejs"
date:   2018-01-23 12:30:10 +0800
categories: tools
sort: 1110
---

在Sublime text3中直接运行nodejs，不用在终端执行nodejs文件，便于测试代码。很方便使用！！

## 添加build system

- 确保本机已安装了nodejs；

- 在sublime text中依次打开Tools -> Build System -> New Build System，粘贴以下代码后，新建文件名改成`Automatic` 

  ```json
  { 
      "cmd": ["node", "--use-strict", "--harmony", "$file"], 
      "selector": "source.js"
  }
  ```

## 测试

- 新建a.js文件；

- 代码：

  ```js
  for (let i = 0; i < 3; i++) {
      console.log('i:', i);
  }
  ```

- 在sublime text 中执行快捷键 `command + b`；

- 效果如下：

  ![效果图](/assets/node/1801.png)

