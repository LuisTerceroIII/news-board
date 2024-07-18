module.exports = {
	presets: ["module:@react-native/babel-preset"],
	plugins: [
		["module:react-native-dotenv"],
		[
			"module-resolver",
			{
				root: ['.'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					"@": "./",
					"@app": "./app",
					"@components": "./app/components",
					"@assets": "./app/assets",
					"@dictionary": "./app/dictionary",
					"@model": "./app/model",
					"@navigation": "./app/navigation",
					"@screens": "./app/screens",
					"@services": "./app/services",
					"@theme": "./app/theme",
					"@util": "./app/util"
				}
			}
		]
	]
};
