const path = require('path'),
	webpack = require('webpack'),
	paths = {
	    entry: path.resolve('client', 'index.js'),
	    build: path.resolve('public'),
	    output: 'bundle.js',
	};

module.exports = {
	devtool: 'eval-source-map', // Faster rebuild, dev env only
  entry: [
	  paths.entry
  ],
  output: {
    path:paths.build,
    filename: paths.output,
  },
  resolve: {
    root: __dirname,
    alias: {
        AliasName: 'alias-value'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader'
      },
	    {
	    	test: /\.json?$/,
		    loader: 'json-loader'
	    },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};


