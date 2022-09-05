const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    popup: path.resolve('Extension/Popup/Popup.tsx'),
    options: path.resolve('Extension/Options/Options.tsx'),
    background: path.resolve('Extension/Background/Background.ts'),
    contentScript: path.resolve("Extension/Content/Content.ts")
  },
  module: {
    rules: [{
      use: 'ts-loader',
      //type: 'asset/resource',
      test: /\.tsx?$/,
      exclude: /node_modules/,
    },
    {
      use: ['style-loader', 'css-loader'],
      test: /\.css$/i
    },
    {
      type: 'assets/resources',
      test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
    }]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin ({
      patterns: [
        {
          from: path.resolve("Extension/Root"),
          to: path.resolve("node_distribution")
        }
      ]
    }),
    ...getHtmlPlugins([
      'popup',
      'options'
    ]),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: { "http": false, "browser": false, "https": false, 
      "stream": false, "url": false, "buffer": false, "timers": false
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve('node_distribution')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    title: 'RSS Commentary',
    filename: `${chunk}.html`,
    chunks: [chunk],
  }))
}
