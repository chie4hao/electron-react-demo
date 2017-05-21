import path from 'path';
// import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
  devtool: 'source-map',
  target: 'electron-renderer',

  entry: [
    path.join(__dirname, 'app/index')
  ],

  output: {
    path: path.join(__dirname, 'app/dist'),
    publicPath: '../dist/',
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
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

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
