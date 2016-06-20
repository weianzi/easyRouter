var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
    devServer: {
        outputPath: './',
        port: 8999
    },
    entry: {
        index: ['./js/index']
    },
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: 'js/[hash:8].[name].js',
    },
    //devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, 
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('css!less')
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/[contenthash:8].[name].css', {
            //allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            chunks: ['index'],
            filename: 'index.html',
            template: 'index.html',
        }),
    ]
}

module.exports = webpackConfig;
