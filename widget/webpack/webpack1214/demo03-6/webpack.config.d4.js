/**
 * huanghui 增加HtmlWebpackPlugin
 */
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/js/a.js","./src/js/b.js"], //数组则访问最后合并到一个js中
    output: {
        path: __dirname + "/build/demo04/",
        filename: "index.js?v=[hash:8]"  //[name] 默认为main.js 
        //publicPath:"https://t1.chei.com.cn/"  //静态路径替换
    },
    plugins:[
        new HtmlWebpackPlugin()  //默认加载一个index.html页面
    ]
};