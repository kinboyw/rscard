const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname,'./'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test:/\.(jpe?g|png|gif)$/,
        loader:'url-loader'
      }
    ]
  }
};
