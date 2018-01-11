/**
 * huanghui 输入出都为两个文件
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        a : "./src/js/a.js",
        b : "./src/js/b.js",
    },
    output: {
        path: __dirname + "/build/demo03/",
        filename: "[name]-[hash:8].js"
    }
};
