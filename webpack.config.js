const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: __dirname + '/public/build',
    publicPath: '',
    filename: 'bundle.js'
  },
  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 300
  },
  devtool: NODE_ENV === 'development' ? 'eval-source-map' : 'eval',
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader',
      },
      {
        test: /\.(png|jpg|jpeg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=[1].[ext]&regExp=node_modules/(.*)?[hash]',
        include: __dirname + '/node_modules'
      },
      {
        test: /\.(png|jpg|jpeg|svg|ttf|eot|woff|woff2)$/,
        loader: 'url-loader?name=[path][name].[ext]?[hash]?limit=2048',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  devServer: {
    compress: true,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true
  }
};

if (NODE_ENV === 'production')
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );