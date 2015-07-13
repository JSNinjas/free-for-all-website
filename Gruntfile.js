// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/scss/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'app/css/main.css': 'app/scss/main.scss'
                },
                options: {
                    interrupt: false,
                    lineNumbers: true
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        },

        sprite:{
          all: {
            src: 'app/images/sprite/*.png',
            dest: 'app/images/sprite.png',
            destCss: 'app/scss/base/_sprite.scss',
            cssFormat   : 'scss',
            padding     : 10
          }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-spritesmith');

    // define default task
    grunt.registerTask('default', ['sprite','browserSync', 'watch']);
};