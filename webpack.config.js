var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'app/main.js'),
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                include: path.resolve('app'),
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader'],
                // fallback: 'style-loader'
                // use: ExtractTextPlugin.extract({
                // })
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                // loader: 'style!css!less'
                // fallback: 'style-loader'
                // use: ExtractTextPlugin.extract({
                // })
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
                exclude: /favicon\.png$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1,
                        name: 'images/[name].[hash:8].[ext]'
                    }
                }]
            }
        ]
    }

}