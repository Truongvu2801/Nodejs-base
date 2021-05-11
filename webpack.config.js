const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        server: "./index.js"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [webpackNodeExternals()],
    module: {
        rules: [
            {
                // dich tu ES6 sang ES5
                test: /\.js$/, // chi lay file js
                exclude: /node_modules/, // loai js node_module
                use: {
                    loader: "babel-loader" // dung babel-loader de dich thanh 1 file js duy nhat
                }
            }
        ]
    }
}