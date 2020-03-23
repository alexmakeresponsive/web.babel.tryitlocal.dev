var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV || 'development';


module.exports ={
    mode: NODE_ENV,

    devtool: NODE_ENV == 'development' ? 'source-map' : null,

    context: __dirname + '/es2015',
    entry: {
        index: './index.js'
    },
    output: {
        path: __dirname + '/es2014/bundles',
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['env'] }
                    }
                ]
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: 9010,
        contentBase: __dirname + '/es2014/',
        publicPath: '/bundles/',
        watchContentBase: true
    }



};