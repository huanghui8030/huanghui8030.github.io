---
layout: post
title:  "【插件】Browsersyns插件用法"
date:   2016-07-17 08:12:19 +0800
categories: tools
sort: 1105
---

​	[browsersyns官网](http://www.browsersync.cn/#install)

## 1、安装nodeJs

​	BrowserSync是基于Node.js的, 是一个Node模块， 如果您想要快速使用它，也许您需要先安装一下Node.js

## 2、安装BrowserSync

​	您可以选择从Node.js的包管理（NPM）[库中](https://npmjs.org/package/browser-sync) 安装BrowserSync。

​	可全局安装，告诉包管理器下载BrowserSync文件，并在全局下安装它们，在所有项目(任何目录)中使用。打开一个终端窗口，运行以下命令：

```
$ sudo npm install -g browser-sync
```

​	当然您也可以结合`gulpjs`或`gruntjs`构建工具来使用，在您需要构建的项目里运行下面的命令:

```
$ npm install --save-dev browser-sync
```

## 3、 启动 BrowserSync

​	一个基本用途是，如果您只希望在对某个`css`文件进行修改后会同步到浏览器里。那么您只需要运行命令行工具，进入到该项目（目录）下，并运行相应的命令：

#### 静态网站

如果您想要监听`.css`文件, 您需要使用*服务器模式*。 BrowserSync 将启动一个小型服务器，并提供一个URL来查看您的网站。

```
// --files 路径是相对于运行该命令的项目（目录） 
browser-sync start --server --files "css/*.css"
```

如果您需要监听多个类型的文件，您只需要用逗号隔开。例如我们再加入一个`.html`文件

```
// --files 路径是相对于运行该命令的项目（目录） 
browser-sync start --server --files "css/*.css, *.html"
// 如果你的文件层级比较深，您可以考虑使用 **（表示任意目录）匹配，任意目录下任意.css 或 .html文件。 
browser-sync start --server --files "**/*.css, **/*.html"
```

#### 动态网站

​	如果您已经有其他本地服务器环境PHP或类似的，您需要使用*代理模式*。 BrowserSync将通过代理URL(localhost:3000)来查看您的网站。

```
// 主机名可以是ip或域名
browser-sync start --proxy "主机名" "css/*.css"
```

​	在本地创建了一个PHP服务器环境，并通过绑定Browsersync.cn来访问本地服务器，使用以下命令方式，Browsersync将提供一个新的地址localhost:3000来访问Browsersync.cn，并监听其css目录下的所有css文件。

```
browser-sync start --proxy "Browsersync.cn" "css/*.css"
```

#### 一点建议

结合gulp或grunt来使用，这里有详细说明[Gulp文档](http://www.browsersync.cn/docs/gulp)、[Grunt文档](http://www.browsersync.cn/docs/grunt)。如果还没有使用gulp或grunt，那么可以通过以上方式创建Browsersync。

>  huanghui8030@qq.com 于 2016.07.27 整理，如有误请指正。



