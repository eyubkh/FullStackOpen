const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const babelConfig = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
  presets: [ 
      [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }          
    ]
 ]
  }
}

const cssConfig = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const pluginHtml = new HtmlWebpackPlugin({ template: './src/index.html'})



const config = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'
  const pluginDefine = new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(mode)
  })

  return {
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction 
        ? '[name].[contenthash].js'
        : 'main.js',
    },
    devtool: 'source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'build')
      },
      compress: true,
      port: 3000,
      open: true,
      client: {
        overlay: true
      }
    },
    module: {
      rules: [ babelConfig, cssConfig]
    },
    plugins: [ pluginHtml, pluginDefine ]
  }
}

module.exports = config
