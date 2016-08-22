var path = require('path')
module.exports = {
	entry: path.resolve(__dirname,'./src/index.ts'),
	output: {
		path:'./dist',
		publicPath: '/dist',
		filename:'bundle.js'
	},
    resolve: {
        extensions: ['', '.ts', '.js']
    },
	module:{
		loaders:[
			{
				test:/\.ts$/,
				loader:'ts-loader'
			}
		]
	},
	devtool:'source-map'
}