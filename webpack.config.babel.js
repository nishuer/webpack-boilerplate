import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
    entry: path.resolve(__dirname, 'src/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
			title: 'index',
		    template: path.resolve(__dirname, 'src/tpl/index.html'),
		    filename: 'index.html',
		    inject: 'body'
		})
    ],
    devtool: '#eval-source-map'
};

export default config;