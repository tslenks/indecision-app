const path = require('path');

// basic congfigurations
module.exports = {
    mode: 'development',
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module:{
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000
    }
};