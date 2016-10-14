var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		index: [
			// 写在入口文件之前
		    "webpack-dev-server/client?http://0.0.0.0:3000",
		    "webpack/hot/only-dev-server",
			"./src/index"
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{ test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.css$/, loader: 'style!css' }
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}