"use strict";
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {
	return {
		entry: {
			app: [
				'webpack-dev-server/client?http://localhost:8080',
				'webpack/hot/only-dev-server',
				path.resolve(__dirname, "../src/layout/index.tsx")
			]
		},
		output: {
			path: path.resolve(__dirname ,"dist"),
			filename: "[name]-bundle.js",
			publicPath: '/',
		},
		devtool: "source-map",
		resolve: {
			// Add '.ts' and '.tsx' as resolvable extensions.
			extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({ template: path.resolve(__dirname, "index.html"), filename: "index.html" }),
			new ExtractTextPlugin('styles.css')
		],
		module: {
			loaders: [
				{ test: /\.tsx?$/, loaders: ["react-hot-loader/webpack", "ts-loader"], include: [path.resolve(__dirname, "../src")] },
				{
					test: /\.less$/,
					loader: ExtractTextPlugin.extract(
						// activate source maps via loader query
						"css?sourceMap!" +
						"less?sourceMap"
					),
				},
			],
			preLoaders: [
				{ test: /\.js$/, loader: "source-map-loader" },
			]
		}
	}
};
