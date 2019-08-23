/**
 * common.js
 * Webpack common configs
 */

// Node Modules
const path = require('path');

// Constants
const APP = path.resolve(__dirname, '../../src');
const BUILD = path.resolve(__dirname, '../../public/js');

module.exports = {
  plugins: [],
  entry: [APP],
  output: {
    path: BUILD,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // Creates style nodes from js strings
          },
          {
            loader: 'css-loader', // Translates css into commonjs
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: () =>
                // post css plugins
                [require('precss'), require('autoprefixer')],
            },
          },
          {
            loader: 'less-loader', // Compiles less code to css
          },
        ],
      },
    ],
  },
};
