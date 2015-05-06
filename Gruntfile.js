module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.initConfig({
        requirejs: {
            dev: {
                options: {
                    mainConfigFile: "./src/scripts/config.js",
                    name: './src/scripts/main.js',
                    out: 'out.js',
                    optimize: 'none'
                }
            }
        }
    });

    grunt.registerTask('dev', [
        'requirejs:dev'
    ]);
};