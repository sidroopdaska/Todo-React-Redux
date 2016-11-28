var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");

var config = require("./webpack.dev.config.js")();

new webpackDevServer(webpack(config), {
	stats: {
		colors: true,
		assets: true,
		chunks: false
	},
	hot: true
}).listen(8080, "localhost", function(err, result) {
	if (err) {
		console.log(err);
	}
	console.log("listening at localhost: 8080");
})
