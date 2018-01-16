---
layout: post
title:  "五、webpack学习之entry&output"
date:   2017-12-14 08:42:19 +0800
categories: webpack
sort: 0806
---

webpack 的配置中主要的两个配置 key 是，entry 和 output。单一入口、多文件入口、多个打包目标文件、output参数说明等。

实例：

```javascript
{
    entry: [String | Array | Object], // 入口模块
    output: {
        path: String,      // 输出路径
        filename: String   // 输出名称或名称 
        publicPath: String // 指定静态资源的位置
        ...                // 其他配置
    }
}
```

#### （1）单一入口

如果只有一个入口文件，可以有如下几种配置方式：

```javascript
// 第一种 String 
{
  	entry: __dirname +'/static/js/a.js',
    output: {
        filename:  './dist/js/bundle.js'
    }
}

// 第二种 Array 
{
    entry: [__dirname +'/static/js/a.js',__dirname +'/static/js/b.js'],
    output: {
        path:__dirname +'/dist/js/',
        filename: 'bundle.js'
    }
}

// 第三种 Object
{
  entry: {
    ajs: './src/.a.js',
    bjs:'./src/b.js'
  },
  output: {
    path: './dist/',
    filename: 'index.js'
  }
}
```

#### （2）多文件入口

当存在多个入口时 ，可以使用 Array 的方式，比如依赖第三方库 bootstrap ，最终 bootstrap 会被追加到打包好的 index.js 中，数组中的最后一个会被 export。

```javascript
{
  entry: ['./src/index.js', './vendor/bootstrap.min.js'],
  output: {
    path: './dist',
    filename: "index.js"
  }
}
```

#### （3）多个打包目标文件

上面的例子中都是打包出一个 index.js 文件，如果项目有多个页面，那么需要打包出多个文件，webpack 可以用对象的方式配置多个打包文件

```javascript
{
  entry: {
    index: './src/index.js',
    a: './src/a.js'
  },
  output: {
    path: './dist/',
    filename: '[name].js' 
  }
}
```

最终会打包出：

```javascript
.
├── a.js
└── index.js
```



#### （4） output参数说明

- 文件名称 filename
  - [name] entry 对应的名称
  - [hash] webpack 命令执行结果显示的 Hash 值
  - [chunkhash] chunk 的 hash，为了让编译的结果名称是唯一的，可以利用 hash 。
- 常用参数：
  - output.filename 生成的文件名模板，比如 "[name].bundle.js"
  - output.path 生成的文件目录，绝对路径
  - output.publicPath 线上静态资源目录
  - output.chunkFilename 代码块文件名模板
  - output.sourceMapFilename source-map文件名模板。默认是[file].map
  - output.jsonpFunction JSONP异步加载代码块（chunk）时JSONP函数名，默认是webpackJsonp 
  - output.hotUpdateFunction JSONP异步热更新代码块时JSONP函数名，默认是webpackHotUpdate
  - output.pathinfo 是否以注释形式在require中增加模块path信息
  - output.library bundle作为库输出，值为库名
  - output.libraryTarget 输出库的格式。比如可选amd，umd，commonjs等