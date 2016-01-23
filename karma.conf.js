// Karma configuration
module.exports = function(config) {
	config.set({
		basePath: '.',

		frameworks: ['jasmine'],//, 'requirejs'],

		files: [
			"app/js/**/*.js",
			"tests/**/*.js",
		],

		exclude: [
		],

		preprocessors: {
		},

		reporters: ['progress'],

		port: 9876,

		colors: true,

		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		autoWatch: true,

		browsers: ['Chrome'],

		singleRun: false,

		concurrency: Infinity
	})
}
