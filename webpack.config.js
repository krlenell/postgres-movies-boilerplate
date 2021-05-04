
require('dotenv/config');
const path = require('path');

const srcPath = path.join(__dirname, 'src/');
const distPath = path.join(__dirname, 'dist/');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: srcPath,
  output: {
    path: distPath
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: distPath,
    port: process.env.DEV_SERVER_PORT,
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`
    },
    historyApiFallback: true,
    host: '0.0.0.0',
    stats: 'minimal',
    watchContentBase: true
  }
};
