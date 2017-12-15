/**
 * (3)webpack基本配置，less/css/html等都url图片相关资源。
 * huanghui 20171215
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
module.exports = {
    entry: {
        a : "./static/js/url.js"
    },
    output: {
        path: __dirname + "/dist/build-url",
        filename: "[name]-[hash:8].js"
    },
    devtool: 'eval-source-map',//开发是使用
    module: {
        rules: [
            {   
                test: /\.css$/,
                use: [
                    {loader: "style-loader"}, 
                    {loader: "css-loader",
                        options: {
                            modules: true,
                            noIeCompat: true
                        }
                    },
                    {loader: "postcss-loader"}  //厂商前缀
                ]
            },
            {
                test: /\.less$/, 
                use: [
                    {loader: "style-loader" }, 
                    {loader: "css-loader" }, 
                    {loader: "less-loader", 
                        options: {
                            strictMath: true,
                            noIeCompat: true
                        }
                    },
                    {loader: "postcss-loader"} //厂商前缀
                ] 
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('压缩单成a.js'),//压缩文件，注释
        new HtmlWebpackPlugin({
            template: __dirname + "/static/html/url.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new CleanWebpackPlugin('./dist/build-url/*.*', {//清除dist目录
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
};
