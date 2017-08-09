const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'assets'),
        sourceMapFilename: "./app.js.map",
        pathinfo: true,
        filename: 'app.js',
        publicPath: "/assets/"
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
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
      contentBase: path.join(__dirname, "src"),
      compress: false,
      port: 9000,
      watchContentBase: true,
      watchOptions: {
        ignored: /node_modules/
      }
    },
    context: path.join(__dirname, 'src'),
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([
            { from: 'public/html' }
        ])
    ]
}