const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, "client", "src")
const OUT_DIR = path.join(__dirname, "client")

module.exports = {
  mode: "development",
  entry: SRC_DIR,
  output: {
    path: path.join(OUT_DIR, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }]
    },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

