/**
 * (2)webpack基本配置，less 文件后，css内容内置，但是样式不是局部的。
 * huanghui 20171215
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
module.exports = {
    entry: {
        a : "./static/js/less.js"
    },
    output: {
        path: __dirname + "/dist/build-less",
        filename: "[name]-[hash:8].js"
    },
    devtool: 'eval-source-map',//开发是使用
    module: {
        rules: [
            {test: /\.less$/, 
               use: [
                {loader: "style-loader" }, 
                {loader: "css-loader" }, 
                {loader: "less-loader", 
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                },
                {loader: "postcss-loader"}]  //厂商前缀
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('压缩单成a.js'),//压缩文件，注释
        new HtmlWebpackPlugin({
            template: __dirname + "/static/html/less.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new CleanWebpackPlugin('./dist/build-less/*.*', {//清除dist目录
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
};
