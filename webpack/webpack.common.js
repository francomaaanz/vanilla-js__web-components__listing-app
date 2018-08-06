const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT = path.resolve(__dirname, '../');
const PATHS = {
	dist: `${ROOT}/dist/`,
	src: `${ROOT}/`,
	entry: [`${ROOT}/app.js`]
};

module.exports = {
	entry: {
		app: PATHS.entry
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/, /dist/],
				use: 'babel-loader',
				include: PATHS.src
			},
			{
				test: /\.scss$/,
				use: [    
					'style-loader',
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Hello World!',
			hash: true,
			minify: {
				collapseWhitespace: false
			}
		})		
	],
	output: {
		filename: '[name].bundle.js',
		path: PATHS.dist
	}
};
