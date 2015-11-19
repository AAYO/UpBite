const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const sassLoaders = [
  	'css',
  	'postcss',
  	'sass?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]



const config = {
  	entry: {
		app: ['./Client/Mount.js']
  	},
  	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style!css"
			},
	  	// 	{
				// test: /\.sass$/,
				// loader: ExtractTextPlugin.extract('style', sassLoaders.join('!'))
	  	// 	}
		]
  	},
	output: {
		path: __dirname,
        filename: "bundle.js"
  	},
  	plugins: [
		// new ExtractTextPlugin('[name].css'),
		new webpack.IgnorePlugin(/Server\//)
  	],
  // 	postcss: [
		// autoprefixer({
	 //  		browsers: ['last 2 versions']
		// })
  // 	],
  // 	resolve: {
		// extensions: ['', '.js', '.sass'],
		// modulesDirectories: ['src', 'node_modules']
  // 	}
}




module.exports = config