//一个常见的Webpack配置文件
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');//默认情况下会生成自己的index.html文件
var CleanWebpackPlugin = require('clean-webpack-plugin');//清楚dist目录
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将css单独提取出来，放一个文件里面。
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//css去重
module.exports = {
  entry: __dirname + "/src/js/main.js",
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true, 
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    //加载器配置 
    loaders: [
        //.css 文件使用 style-loader 和 css-loader 来处理
        {   test: /\.css$/, 
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader",'postcss-loader']})
        },
        //.less
         { test: /\.less$/, 
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader","less-loader",'postcss-loader']
            })
         },
        //图片文件使用 url-loader 来处理，小于8192的直接转为base64
        { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=[name].[ext]&outputPath=images/'}
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: '测试，生成index.html页面'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new ExtractTextPlugin("custom.css"),//合并css
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),//去掉重复的css
    /*new webpack.LoaderOptionsPlugin({  
        options: {  
            postcss: function(){  
                return [  
                    require("autoprefixer")({
                        browsers: ['Android 2.3','Android >= 4','iOS >= 6',
                          'Explorer >= 6','Chrome >= 20','Firefox >= 24','Opera >= 12'], //ie6以上,和gulp配置一样
                         cascade: false
                    })  
                ]  
            }  
        }  
    }) 
       */
  ]
}
