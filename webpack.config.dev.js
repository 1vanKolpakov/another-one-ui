const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx', // Ваша точка входа для разработки компонентов
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
                
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resourcePath) => resourcePath.endsWith('.module.scss'),
                                localIdentName: '[local]__[hash:base64:5]',
                                exportLocalsConvention: 'camelCase'
                            },
                            importLoaders: 1,
                        },
                    },
                    'sass-loader',
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css',
    }),
        new HtmlWebpackPlugin({
            template: './public/index.html', // HTML-шаблон для разработки
        }),
    ],
    devServer: {
        
        port: 3001, // Порт для разработки
        open: false, // Автоматически открыть браузер
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'), // Убедитесь, что у вас есть папка с вашим index.html
            watch: true,
        }  // Горячая перезагрузка
    },
};