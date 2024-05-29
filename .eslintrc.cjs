module.exports = {
	root: true,
	env: {
		browser: true,
		node: true, // Add this line to recognize Node.js globals
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect', // Automatically detect the React version
		},
	},
	plugins: ['react-refresh'],
	rules: {
		'react/no-unknown-property': 'off',
		'react/display-name': 'off',
		'no-unused-vars': 'off',
		'react/prop-types': 'off',
		'react/jsx-no-target-blank': 'off',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
	},
};
