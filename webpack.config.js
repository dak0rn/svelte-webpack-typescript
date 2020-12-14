const path = require('path');
const webpack = require('webpack');
const preprocess = require('svelte-preprocess');

const extensions = ['.mjs', '.js', '.json', '.svelte', '.html', '.ts'];
const mainFields = ['svelte', 'module', 'browser', 'main'];

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
    entry: './boot.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: { extensions, mainFields },
    module: {
        rules: [
            {
                test: /\.(svelte|html)$/,
                exclude: [],
                use: {
                    loader: 'svelte-loader',
                    options: {
                        preprocess: preprocess({
                            typescript: {
                                tsconfigFile: path.resolve(__dirname, 'tsconfig.json')
                            }
                        })
                    }
                }
            }
        ]
    },
    mode,
    devtool: dev && 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        port: '9000',
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
