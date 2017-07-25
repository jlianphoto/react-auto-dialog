var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require("clean-webpack-plugin");
var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: path.resolve(__dirname, './src/lib/wechat'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'index.js',
    library:'reactAutoDialog',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: {
      root: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=8192'
    }, {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        },{
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
                pxtorem({
                  rootValue: 100,
                  propWhiteList: [],
                })
              ],
            },
          },]
      }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'],{
      root : path.resolve(__dirname, './'),
      verbose: true
    }),
  ]
}