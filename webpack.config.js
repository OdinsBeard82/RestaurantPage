const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    Food: path.resolve(__dirname, './src/modules/tab1.js'),
    Drinks: path.resolve(__dirname, './src/modules/tab2.js'),
    Events: path.resolve(__dirname, './src/modules/tab3.js'),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
