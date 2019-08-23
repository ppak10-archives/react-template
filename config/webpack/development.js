/**
 * development.js
 * Webpack development config
 */

// Node Modules
import webpack from 'webpack';

// Webpack
import config from './common';

export const development = {
  ...config,
  entry: ['webpack-hot-middleware/client', ...config.entry],
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    ...config.resolve,
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
