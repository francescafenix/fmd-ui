'use strict';

module.exports = function(grunt) {

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	jsonlint: {
		sample: {
			src: [ 'config/*.json' ]
		}
	}
});

grunt.registerTask('default', [
	//'clean',
	//'cssmin',
	//'jshint',
	//'concat',
	//'uglify',
	'jsonlint'
]);

/*grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-copy');*/
grunt.loadNpmTasks('grunt-jsonlint');

};