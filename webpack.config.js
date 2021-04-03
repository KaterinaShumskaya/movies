const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {  // configuration for webpack-dev-server
    contentBase: './',  //source of static assets
    port: 7700, // port to run dev-server
  }
};