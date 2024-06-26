const path = require('path');

// Html plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Favicons plugin
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// Css plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let publicDir = './docs';

module.exports = {

    mode: 'development',

    entry: {
        index: './game/index.js'
    },

    devtool: 'source-map',

    devServer: {
        contentBase: publicDir,
        host: '0.0.0.0',
        hot: true,
        port: 1337,
        writeToDisk: true,
        allowedHosts: ['192.168.2.101', 'lionoe-goes-bananas.roach.one', 'lion-goes-bananas.roach.one', 'localhost', '127.0.0.1']
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

    // Module
    module: {
        rules: [
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
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },

            // Font and img rules
            {
                test: /\.(eot|svg|ttf|woff|woff2|jpg|jpeg|png|gif|mp3|wav)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/',
                        name: '[name].[ext]'
                    }
                }
            }

        ]
    },

    // Cache
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

    // Plugins
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new FaviconsWebpackPlugin('./frontend/src/favicon.png'),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './frontend/src/index.html'
        })
    ]
};
