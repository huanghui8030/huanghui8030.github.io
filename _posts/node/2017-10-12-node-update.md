---
layout: post
title:  "nodejs版本升级"
date:   2017-10-26 13:12:19 +0800
categories: node
sort: 0601
---

nodeJs大家经常会用到，但是更新太快，有些内容如果不更新会到时无法使用。例如antDesign如果使用的话，需要node版本大于0.6。更新方法，需要借助一个n这个模块，专门用来管理nodejs版本的。



方法如下：

- 如果电脑为mac，请注意所有带有`-g`的命令，请在最前面加入`sudo`，进入管理员权限。（以下示例为mac，Windows下请主动去掉`sudo`）。


-  用cnpm替代npm，国内速度快：`npm install -g cnpm --registry=https://registry.npm.taobao.org` ；

- 全局安装，命令如下：`sudo cnpm install -g n`

  ![效果图](/assets/node/0101.png)

- nodejs版本升级：

  - n stable 升级为文档版本
  - n latest 升级为官网最新版本

- 执行：`n stable`，会报错，表示没有权限：

  ```javascript
      install : node-v8.8.1
         mkdir : /usr/local/n/versions/node/8.8.1
  mkdir: /usr/local/n/versions/node/8.8.1: Permission denied

    Error: sudo required
  ```

  如图所示（无权访问）：

  ![效果图 100100](/assets/node/0102.png)

-  解决方法如下：

   -  点开Finder，进入文件管理器中输入没有权限的地址

   ![效果图](/assets/node/0103.png)

   - 找到node文件后，右键-》“显示简介”

   ![效果图](/assets/node/0104.png)

   - 最下面“共享与权限”，可以看到wheel和everyone的权限为“只读”。

   ![效果图](/assets/node/0105.png)

   - 点击右下角的小锁，设置wheel和everyone的权限为“读与写”即可

   ![效果图](/assets/node/0106.png)

-  再次执行：`n stable`，最后执行结果如下，并查询node版本为最新稳定版本：

   ![效果图](/assets/node/0107.png)