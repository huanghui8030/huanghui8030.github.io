---
layout: post
title:  "webpack课题研究"
date:   2017-02-08 16:42:19 +0800
categories: webpack
sort: 0801
---
主要是为了学习webpack，目前前端出现的各种框架中，webpack是必不可少的，所有需要学习和研究。下面的每一篇文章都是针对webpack初学者来说的，一步一步的进行学习。

针对webpack的课题研究，根据一下内容进行编写ppt，该文章为ppt的基础，当实际PPT中会有一些删减，具体以ppt为主，该文章只是辅助作用。具体从一下几个方面进行讲解：

## 一、webpack的简介

- [webpack的简介](/webpack/ktyj.html)
  - 基本概率、与gulp的详细区别、应用场景，以及特性。


## 二、webpack基本用法

- [webpack之简单打包](webpack/01webpack-init.html)
  - 如何安装初始化等
  - 简单demo
- [webpack之css文件处理](/webpack/02init-css.html)
  - css文件简单处理
  - css相关loader介绍
- [webpack之命令行](/webpack/03command.html)
  - 常用命令行用法

##三、webpack参数配置

- [webpack配置文件](/webpack/04config.html)
  - 大致步骤
  - package.json文件配置
  - webpack.config.js配置详解


- [entry和output](/webpack/05entry&output.html)
  - entry，三种情况String、Array、Object。
  - output，可多个目标输出，也可进行资源替换。
- [loaders](/webpack/05loader.html)
  - loaders作用、安装、使用，以及功能。
  - 具体实例，样式和图片相关实例
- [plugins](/webpack/06plugins.html)
  - plugins概率，与loaders区别，分类，以及使用方法。
  - 具体实例：添加注释、html模板、单独提取css、清楚冗余文件。
- [其他配置](/webpack/07other.html)
  - resolve、devtool、devServer等配置项

##四、webpack实际应用

- [webpack之实际应用](/webpack/08apply.html)
  - webpack与vue框架配合使用
  - webpack与react框架配合使用
  - webpack与gulp自动化工具相互结合使用

## 五、参考文档

- [webpack官方网址](https://webpack.js.org/)
- [入门Webpack，看这篇就够了](http://www.jianshu.com/p/42e11515c10f)


- [彻底解决Webpack打包性能问题](https://zhuanlan.zhihu.com/p/21748318)
- [前端工程与模块化框架](https://github.com/fouber/blog/issues/4)
- [gulp+webpakc构建多页面前端项目](https://segmentfault.com/a/1190000003969465)
- [【webpack】流行的前端模块化工具webpack初探](http://www.cnblogs.com/penghuwan/p/6665140.html)

