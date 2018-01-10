/**
 * huanghui 输入出都为两个文件
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        a : "./src/a.js",
        b : "./src/b.js",
    },
    output: {
        path: __dirname + "/build/",
        filename: "js/[name]-[hash:8].js"
    }
};
