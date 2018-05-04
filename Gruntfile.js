module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: { // Begin Sass
        dev: {
            options: {
                style: 'expanded',
                sourcemap: 'auto'
            },
            files: {
                'css/style.css' : 'sass/style.scss'
            }
        }
    },
    cssmin: { // Begin CSS Minify Plugin
        target: {
            files: [{
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            }]
        }
    },
    uglify: { // Begin JS Uglify Plugin
        build: {
            src: ['js/*.js'],
            dest: 'js/script.min.js'
        }
    },
    watch: { // Compile everything into one task with Watch Plugin
        sass: {
            files: 'sass/**/*.scss',
            tasks: ['sass:dev']
        }
    }
  });

  // Load the plugin tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['watch']);

};