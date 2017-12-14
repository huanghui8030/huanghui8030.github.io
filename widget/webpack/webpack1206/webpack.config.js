/**
 * webpack基本配置
 * huanghui 20171213
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    entry: {
        a : "./static/js/a.js",
        b : "./static/js/b.js"
    },
    output: {
        path: __dirname + "/dist/build",
        filename: "[name]-[hash:8].js"
    },
    devtool: 'eval-source-map',//开发是使用
    devServer: {
        contentBase: "./dist/build/",//本地服务器所加载的页面所在的目录，默认8080端口
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
           /* {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },*/
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),//压缩文件，注释
        new HtmlWebpackPlugin({
            template: __dirname + "/static/html/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new CleanWebpackPlugin('./dist/build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
};
