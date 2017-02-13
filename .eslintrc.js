// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: "eslint:recommended",
	rules: {
		"no-console": 0,
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		"no-alert": 0,
		"no-mixed-spaces-and-tabs": 0,
		"no-unused-vars": 1,
		"linebreak-style": 0,
		"quotes": 0,
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		"semi": [
			1,
			"always"
		]
	},
	// required to lint *.vue files
	plugins: [
		'html'
	],
	globals:{
		"Swiper":true
	}
	// add your custom rules here
}