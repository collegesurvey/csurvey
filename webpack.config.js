const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname, 'assets'),
        sourceMapFilename: "./app.js.map",
        pathinfo: true,
        filename: 'app.js',
        publicPath: "/assets/"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts"]
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        },
        {
            test: /\.css$/,
             use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ["css-loader"]
            })
        },
        { 
            test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=100000' 
        }]
    },
    devServer: {
      contentBase: path.join(__dirname, "assets"),
      compress: false,
      port: 9090,
      watchContentBase: true,
      watchOptions: {
        ignored: /node_modules/
      },
      hot: true
    },
    context: path.join(__dirname, 'src'),
    plugins: [
        new webpack.optimize.UglifyJsPlugin(
            {sourceMap: true}
        ),
        new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([
            { from: 'public/html' }
        ])
    ]
};
