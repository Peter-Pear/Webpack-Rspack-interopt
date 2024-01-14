const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const deps = require('./package.json').dependencies;

module.exports = (argv) => {
  return {
    entry: './src/index',

    devtool: 'eval',

    output: { publicPath: 'auto' },

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },

    devServer: {
      port: 8079,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false
          }
        },
        { test: /\.json$/, type: 'json' },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          loader: require.resolve('babel-loader'),
          exclude: /node_modules/,
          options: {
            presets: [require.resolve('@babel/preset-react')],
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|wasm)$/i,
          type: 'asset/resource'
        }
      ]
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
        remotes: {
          'app_02': 'app_02@http://localhost:8080/remoteEntry.js'
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            eager: true
          },
          'react-dom': {
            singleton: true
          },
          'react-router-dom': {
            singleton: true
          }
        }
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ]
  };
};
