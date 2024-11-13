
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        clean: true,
        globalObject: 'this', // необходимо для корректной работы UMD-бандла в различных окружениях
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            react: path.resolve(process.cwd(), '../node_modules/react')
        }
    },
    externals: {
        react: 'react',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-preset-env')({
                                        stage: 0, // Включает все возможности CSS
                                    }),
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                          implementation: require('sass'), // Подключение новой версии dart-sass
                        },
                      },
                ],
                exclude: /node_modules/,
            },
        ],
    },
};
