const base = require('./webpack.base.conf');
const webpackMerge = require('webpack-merge');


module.exports = webpackMerge(base, {
    entry: './src/main',
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader?sourceMap",
                        options: {
                            config: 'postcss.conf.js'
                        }
                    },
                    'scss-loader?sourceMap'
                ]
            }
        ]
    },
    devServer: {
        open: true,
        hot: true,
        port: '10000',
    },
    devtool: 'source-map',

})