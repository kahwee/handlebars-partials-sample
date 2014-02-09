module.exports = function(grunt) {
	var path = require('path');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		handlebars: {
			compile: {
				options: {
					namespace: "hbs",
					processName: function(filePath) {
						return path.basename(filePath, '.hbs').toLowerCase()
					}
				},
				files: {
					"js/hbs-templates.js": "hbs/*.hbs"
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	// Default task(s).
	grunt.registerTask('default', ['handlebars']);

};