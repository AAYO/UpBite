const fs = require('fs')
const path = require('path')

const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const sassLoaders = [
  	'css',
  	'postcss',
  	'sass?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]


const client = {
  	entry: {
		app: ['Client']
  	},
  	module: {
		loaders: [
	  		{
				test: /\.sass$/,
                // TODO maybe no extract?
				loader: ExtractTextPlugin.extract('style', sassLoaders.join('!'))
	  		}
		]
  	},
	output: {
		path: __dirname + '/dist',
        filename: "client.bundle.js"
  	},
  	plugins: [
		new ExtractTextPlugin('[name].css'),
  	],
  // 	postcss: [
		// autoprefixer({
	 //  		browsers: ['last 2 versions']
		// })
  // 	],
  	resolve: {
  		root: path.resolve('./src')
		// extensions: ['', '.js', '.sass'],
		// modulesDirectories: ['src', 'node_modules']
  	},
    target: 'web'
}


var node_modules = fs.readdirSync('node_modules').filter(function(x) { return x !== '.bin' });


const server = {
    entry: {
        app: ['Server']
    },
    // externals: [/^[a-z\/\-0-9]+$/i],
    externals: node_modules,
    module: {
        loaders: [
            {
                test: /\.sass$/,
                loader: ['css/locals'].concat(sassLoaders.slice(1)).join('!')
            }
        ]
    },
    // TODO node: {} https://webpack.github.io/docs/configuration.html#node
    output: {
        libraryTarget: 'commonjs2',
        path: __dirname + '/dist',
        filename: "server.bundle.js"
    },
  //    postcss: [
        // autoprefixer({
     //         browsers: ['last 2 versions']
        // })
  //    ],
    resolve: {
        root: path.resolve('./src')
        // extensions: ['', '.js', '.sass'],
        // modulesDirectories: ['src', 'node_modules']
    },
    target: 'node',
    plugins:[
      new webpack.ProvidePlugin({
          'window': 'xmlhttprequest'
      })
    ]
}

module.exports = [client, server]
