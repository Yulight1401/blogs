/**
 * Created by yul on 16-9-25.
 */
var path = require('path');
var webpack=require('webpack');
module.exports = {
    entry: "./es6/yulblogmain.js",
    output: {
        path: __dirname,
        filename: "labbundle.js"
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.sass$/, loader: 'style!css!sass?sourceMap'},
        ]
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin({
        //     compress:{
        //         warnings:false
        //     }
        // })
        ]
}