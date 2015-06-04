/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          require: true,
          should: true,
          it: true,
          describe: true,
          module: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
    },
    qunit: {
      files: ['test/**/*.html']
    },
    coffee: {
      glob: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.coffee'],
        dest: 'lib',
        ext: '.js',
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['lib/**/*.js']
      }
    },
    watch: {
      coffee: {
        files: '**/*.coffee',
        tasks: ['coffee:glob']
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      jsHint: {
        files: 'lib/**/*.js'
      },
      test: {
        files: 'lib/test/**/*.js',
        tasks: ['mochaTest']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit']);

};
