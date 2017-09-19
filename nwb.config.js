var resolve = require('path').resolve

module.exports = function (nwb) {
	return {
		type: 'react-component',
		npm: {
			cjs: true,
			esModules: false,
			umd: 'ReactHintFactory'
		},
		webpack: {
			aliases: {
				css: resolve('css'),
				src: resolve('src')
			},
			extra: {
				plugins: [
					new nwb.webpack.ProvidePlugin({
						Component: ['react', 'Component'],
						React: 'react',
						render: ['react-dom', 'render']
					})
				]
			}
		}
	}
}
