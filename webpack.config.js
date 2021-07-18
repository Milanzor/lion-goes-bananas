const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Css plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
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
            chunks: 'all',
            name: false,
            cacheGroups: {
                vendors: false,
                default: false,
                modules: {
                    name: 'modules',
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 1,
                    reuseExistingChunk: true
                },
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
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },

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
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        })
    ]
};
