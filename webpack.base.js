var webpack = require('webpack'),
    isDevelopmentEnvironment = process.env.NODE_ENV === 'dev';

module.exports = {

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        'syntax-dynamic-import',
                        'react-loadable/babel'
                    ],
                    presets: [
                        'react',
                        'stage-0',
                        'flow',
                        [
                            'env',
                            {
                                targets: {
                                    browsers: ['last 2 versions']
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    mode: isDevelopmentEnvironment ? 'development' : 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'DEBUG': JSON.stringify(process.env.DEBUG)
            }
        })
    ]
};
