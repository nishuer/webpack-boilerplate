import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
    entry: {
        app: path.resolve(__dirname, 'src/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
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
                loader: process.env.NODE_ENV === 'production'
                    ? ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap")
                    : "style-loader!css-loader!sass-loader?sourceMap"
            },
            {
                test: /\.(png|jpg|woff|eot|ttf|svg)$/,
				loader: 'url-loader?limit=10000'
            }
        ]
    },
    resolve: {
    	extensions: ['', '.js']
  	}
};

export default config;