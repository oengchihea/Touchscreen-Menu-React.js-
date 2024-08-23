const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
module: {
    rules: [
    {
        test: /\.js$/,
        use: 'source-map-loader',
        enforce: 'pre',
    },
    ],
},
plugins: [
    new ReactRefreshWebpackPlugin(),
],
};
