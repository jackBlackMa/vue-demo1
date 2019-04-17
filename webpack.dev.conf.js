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
        // port: '10000',
        historyApiFallback: true,
        setup: function (app, server) {
            app.get('/login', function (req, res) {
                console.log('get')
                let user = req.query['user'];
                let pass = req.query['pass'];
                if (!USER[user]) {
                    res.send({ 'status': false, 'msg': "用户不存在" })
                } else {
                    if (USER[user] !== pass) {
                        res.send({ 'staus': false, "msg": "密码不正确" })
                    } else {
                        res.send({ 'status': true })
                    }
                }

                res.end()
            });
        }
    },
    devtool: 'source-map',

})