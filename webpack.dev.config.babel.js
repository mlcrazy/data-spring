import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';

import baseConfig from './webpack.base.config.babel.js';


module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9001,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
