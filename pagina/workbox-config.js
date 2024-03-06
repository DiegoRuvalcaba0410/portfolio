module.exports = {
	globDirectory: 'pagina/',
	globPatterns: [
		'**/*.{html,json}'
	],
	swDest: 'pagina/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};