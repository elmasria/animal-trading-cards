module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'dist/index.html': 'src/index.html'
				}
			}
		},
		uglify: {
			build: {
				files: [{
					expand: true,
					cwd: 'src/js',
					src: ['**/*.js'],
					dest: 'dist/js',
					ext: '.min.js'
				}]

			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		},
		clean: {
			dev: {
				src: ['dist/'],
			},
		},
		mkdir: {
			dev: {
				options: {
					create: ['dist/img']
				},
			},
		},
		copy: {
			images: {
				files: [{
					expand: true,
					cwd: 'src/img/',
					src: ['**/*.{png,jpg,svg}'],
					dest:'dist/img/'
				}]
			}
		},
		serve: {
			path: 'dist/',
			options: {
				port: 8000
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-serve');

	grunt.registerTask('default', ['clean', 'uglify', 'htmlmin', 'cssmin', 'mkdir', 'copy', 'serve']);
}