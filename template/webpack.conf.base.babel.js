import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
    entry: {
        app: path.resolve(__dirname, 'src/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
        filename: 'js/[name].js'
    },
    module: {
        {{#lint}}
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        }],
        {{/lint}}
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.(scss|less|css)$/,
            loader: process.env.NODE_ENV === 'production' ?
                ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap{{#if_eq preprocessor "Sass"}}!sass-loader?sourceMap{{/if_eq}}{{#if_eq preprocessor "Less"}}!less-loader?sourceMap{{/if_eq}}", {publicPath: '../'}) : "style-loader!css-loader{{#if_eq preprocessor "Sass"}}!sass-loader{{/if_eq}}{{#if_eq preprocessor "Less"}}!less-loader{{/if_eq}}?sourceMap"
        }, {
            test: /\.(woff|png|jpg|gif)(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff&name=asset/[name].[ext]"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader?name=asset/[name].[ext]"
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
};

export default config;