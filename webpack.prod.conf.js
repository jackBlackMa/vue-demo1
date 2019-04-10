const base = require('./webpack.base.conf');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack');

module.exports = webpackMerge(base, {
    entry: './src/main',
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        {
                            loader: "postcss-loader?sourceMap",
                            options: {
                                config: 'postcss.conf.js'
                            }
                        },
                        'scss-loader?sourceMap'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `[name].[hash:8].css`,
            disable: false
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
})