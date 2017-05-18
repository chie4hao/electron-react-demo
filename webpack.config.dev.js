/* eslint global-require: 0, import/no-dynamic-require: 0 */

import path from 'path';
import { spawn } from 'child_process';
import webpack from 'webpack';
// import fs from 'fs';
// import webpack from 'webpack';

const port = 12450;
const publicPath = `http://localhost:${port}/dist/`;

export default {
  target: 'electron-renderer',

  entry: [
    path.join(__dirname, 'app/index.jsx')
  ],

  output: {
    publicPath: `http://localhost:${port}/dist/`,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.global\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /^((?!\.global).)*\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin({

    })
  ],
  devServer: {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    contentBase: path.join(__dirname, 'dist'),
    watchOptions: {
      aggregateTimeout: 300,
      poll: 100
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    setup() {
      spawn(
          'npm', ['run', 'start-hot-renderer'], {
            shell: true,
            env: process.env,
            stdio: 'inherit'
          }
        )
        .on('close', code => process.exit(code))
        .on('error', spawnError => console.error(spawnError));
    }
  }
};
