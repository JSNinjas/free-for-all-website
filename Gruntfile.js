// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'scss/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/main.css': 'scss/main.scss'
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
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },

        sprite:{
          all: {
            src: 'images/sprite/*.png',
            dest: 'images/sprite.png',
            destCss: 'scss/base/_sprite.scss',
            imgPath: '../images/sprite.png',
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