module.exports = function (wallaby) {
	return {
		files: [
			'app/js/**/*.js'
		],

		tests: [
			'tests/**/*.js'
		],

		testFramework: 'jasmine'
	};
};
