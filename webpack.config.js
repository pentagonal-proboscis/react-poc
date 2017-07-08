const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src/js');

module.exports = {
    entry: APP_DIR + '/components.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                include: APP_DIR,
                loader: 'babel'
            }
        ]
    }
};