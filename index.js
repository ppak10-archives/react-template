/**
 * index.js
 * Entry file for express server
 */

// Node Modules
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Config
import APP from './config/app.json';
import {development} from './config/webpack/development';

const app = express();
const compiler = webpack(development);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: development.output.publicPath,
  }),
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static('public'));
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, './public/index.html')),
);

app.listen(APP.DEVELOPMENT.PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Production running on port ${APP.DEVELOPMENT.PORT}`),
);
