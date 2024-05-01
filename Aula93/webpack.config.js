const path = require('path');//para resolver o caminho dos arquivos

module.exports = {
    mode: 'development', //production
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'public','assets','js'),//onde vai ser gerado o bundle
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/, //todos os arquivos que terminam com .js
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map',
};