const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/game.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'assets'
        }
      }
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env',
          {
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        ],
      },
    },
  ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};