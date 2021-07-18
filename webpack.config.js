const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Css plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let publicDir = './public';

module.exports = {
    mode: 'development',
    entry: {
        index: './frontend/src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: publicDir,
        host: '0.0.0.0',
        hot: true,
        allowedHosts: [
            '192.168.2.101'
        ]
    },

    // Optimization
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }

        }
    },
    module: {
        rules: [
            // SCSS rule
            {
                test: /\.scss$|.css$/,
                use: [

                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }

        ]
    },
    cache: {
        type: 'filesystem'
    },

    // Performance
    performance: {
        hints: false
    },

    // Stats
    stats: {
        // chunkModules: false,
        assets: false
    },

    // Output
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, publicDir),
        chunkFilename: '[name].js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './frontend/src/index.html'
        })
    ]
};
