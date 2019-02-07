import webpack from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './webpack.base.config.babel.js';


module.exports = merge(baseConfig, {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
});
