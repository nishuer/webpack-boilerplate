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
            },
            {
                test: /\.(png|jpg|woff|eot|ttf|svg)$/,
				loader: 'url-loader?limit=40000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		}),
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
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true,
        stats: { colors: true }
    },
    devtool: '#eval-source-map'
};

export default config;