import path from 'path';
import webpack from 'webpack';
import ModernizrPlugin from 'modernizr-webpack-plugin';
// import ModernizrConfig from './modernizr.webpack';
import Package from './package.json';
import Vendor from './vendor.json';

const config = {
	cache: true,
	debug: true,
    devtool: 'cheap-module-eval-source-map',
	entry:  {
		bundle: ['./src/bundle.js'],
		vendor: Vendor
	},
	output: {
		filename: '[name].js',
		path:     path.join(__dirname, 'dist')
	},
	plugins: [
		new webpack.DefinePlugin({
            __CLIENT__:     true,
            __SERVER__:     false,
            __PRODUCTION__: false,
            __DEV__:        true,
            __VERSION__: JSON.stringify(Package.version),
            __APPNAME__: JSON.stringify(Package.name)
		}),
		// new ModernizrPlugin(ModernizrConfig),
		new webpack.ExtendedAPIPlugin(),
		new webpack.optimize.CommonsChunkPlugin("vendor","vendor.js")
	],
	module: {
		// preLoaders: [{
		// 	exclude: /node_modules/,
		// 	loader:  'eslint-loader',
		// 	test:    /\.js?$/
		// }],
		postLoaders: [{
			exclude: /node_modules/,
			loader:  'babel-loader',
			test:    /\.js?$/
		}],
		loaders: [{
			test: /jquery\.js$/,
			// loader: 'expose?jQuery!expose?$'
			loader: "babel-loader"
		},{
			test: /\.scss$/,
			loaders: [
				'isomorphic-style-loader',
				'css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]',
				'postcss-loader',
				'sass-loader'
			]
		},{
			test: /\.css$/,
			loaders: [
				'isomorphic-style-loader',
				'css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]',
				'postcss-loader'
			]
		}]
	},
	postcss: (bundler) => {
	    return [
            require('postcss-import')(),
            require('postcss-custom-properties')(),
            require('postcss-calc')(),
            require('postcss-nesting')(),
            require('postcss-flexbugs-fixes')(),
            require('autoprefixer')()
	    ];
	},
	resolve: {
		root: [
			path.resolve('./src')
		]
	}
};
process.argv.indexOf('--minimize') !== -1 && config.plugins.push(new webpack.optimize.UglifyJsPlugin({
	compress:{
		warnings: false
	}
}));

export default config;