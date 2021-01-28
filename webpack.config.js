const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, 'client', 'src')
const OUT_DIR = path.join(__dirname, 'client')

module.exports = {
  mode: 'development',
  entry: SRC_DIR,
  output: {
    path: path.join(OUT_DIR, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      },
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

// externals: {
//   'styled-components': {
//     commonjs: 'styled-components',
//     commonjs2: 'styled-components',
//     amd: 'styled-components',
//   },
// },
