const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const DIST_DIR = path.resolve(__dirname, 'dist')
const SRC_DIR  = path.resolve(__dirname, 'src')

const config = {
 entry: ['whatwg-fetch', SRC_DIR + '/index'],
 output: {
  path: DIST_DIR + '/app',
  filename: 'bundle.js',
  publicPath: process.env.PUBLIC_URL
 },
 devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      "process.env": {
        REACT_APP_API_URL: JSON.stringify(process.env.REACT_APP_API_URL),
      },
    }),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      cache: true,
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
 module: {
  loaders: [{
   test: /\.(js?|jsx?)$/,
   include: SRC_DIR,
   loader: 'babel-loader',
   query: {
    presets: ['es2015', 'react', 'stage-2']
   }
  },
  {
   test: /\.less?/,
   include: SRC_DIR,
   loaders: ['style-loader', 'css-loader', 'less-loader']
  },
  {
   test: /\.css?/,
   include: [SRC_DIR, /node_modules/],
   loaders: ['style-loader', 'css-loader', 'less-loader']
  },
    {
      test: /\.(woff|woff2|eot|ttf|otf|png|jpeg|jpg|gif|webp|vwebp|svg)$/,
      loaders: [
        'file-loader', 
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            webp: {
              quality: 75
            }
          }
        }
      ]
    }]
 },
  resolve: {
    extensions: ['*', '.js', '.jsx', './HOCs/*.jsx']
  }
}
module.exports = config
