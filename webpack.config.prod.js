import path from 'path';
// import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
  // target: 'electron-renderer',

  entry: [
    path.join(__dirname, 'app/index.jsx')
  ],

  output: {
    path: path.join(__dirname, 'app/dist'),
    publicPath: '../dist/',
    filename: 'bundle.js'
  },

  module: {
    rules: [{
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
      use: ExtractTextPlugin.extract({
        use: 'css-loader',
        fallback: 'style-loader',
      }
      )
    },
    {
      test: /^((?!\.global).)*\.css$/,
      use: ExtractTextPlugin.extract({
        use: {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]__[hash:base64:5]',
          }
        }
      }),
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
