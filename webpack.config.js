const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bundlePath = path.resolve(__dirname, 'build/');

module.exports = (_env, argv) => {
  let entryPoints = {
    Panel: {
      path: './src/panel/index.js',
      outputHtml: 'panel.html',
      build: true
    },
    Mobile: {
      path: './src/mobile/index.js',
      outputHtml: 'mobile.html',
      build: true
    },
    VideoComponent: {
      path: './src/video-component/index.js',
      outputHtml: 'video-component.html',
      build: true
    },
    VideoFullScreen: {
      path: './src/video-fullscreen/index.js',
      outputHtml: 'video-fullscreen.html',
      build: true
    },
    Configuration: {
      path: './src/configuration/index.js',
      outputHtml: 'configuration.html',
      build: true
    },
    LiveConfiguration: {
      path: './src/live-configuration/index.js',
      outputHtml: 'live-configuration.html',
      build: true
    }
  };

  let entry = {};
  let plugins = [new webpack.HotModuleReplacementPlugin()];

  for (name in entryPoints) {
    if (entryPoints[name].build) {
      entry[name] = entryPoints[name].path;
      if (argv.mode === 'production') {
        plugins.push(
          new HtmlWebpackPlugin({
            inject: true,
            chunks: [name],
            template: './src/template/index.html',
            filename: entryPoints[name].outputHtml,
            title: `Twitch Extension ${name} Page`
          })
          /* Install Jquery:
           *  1° npm install jquery
           *  2° import $ from "jquery"
           *  3° uncomment lines (44-47)
           *    new webpack.ProvidePlugin({
           *    $: 'jquery',
           *   jQuery: 'jquery'
           * })
           */
        );
      }
    }
  }

  let config = {
    //entry points for webpack- remove if not used/needed
    entry,
    optimization: {
      minimize: false // neccessary to pass Twitch's review process
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]'
          }
        }
      ]
    },
    resolve: { extensions: ['*', '.js'] },
    output: {
      filename: '[name].bundle.js',
      path: bundlePath
    },
    plugins,
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 9000
    }
  };
  return config;
};
