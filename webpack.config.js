const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });

module.exports = {
  entry: "./src/index.js",
  output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js',
     publicPath: '/'
   },
  externals: ['React'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react',"@babel/preset-env"],
          plugins: ['@babel/proposal-class-properties']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig,new webpack.ProvidePlugin({
    "React": "react",
  })
],
}
