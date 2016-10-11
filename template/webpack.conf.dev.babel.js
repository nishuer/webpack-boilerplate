import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import baseConfig from './webpack.conf.base.babel';

const config = merge(baseConfig, {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify('development')
			}
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
});

export default config;