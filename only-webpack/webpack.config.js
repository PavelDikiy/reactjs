const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

module.exports = ({ mode } = { mode: 'production' }) => ({
    mode,
    devtool: 'source-map',
    stats: {
        children: false,
    },
    devServer: {
        hot: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js?ver=[chunkhash]',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    {
                        loader: 'style-loader',
                        options: {},
                    },
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {},
                    },
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                            sassOptions: {
                                // disable fiber - synchronous compilation is twice as fast as asynchronous
                                fiber: false,
                            },
                        },
                    },
                ],
            },
            {
                // upload fonts in css files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
                // upload images in css/js files
                test: /assets\/img\/.*\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        htmlPlugin,
        new CopyPlugin([{ from: './src/assets/img', to: 'img' }]),
    ],
});
