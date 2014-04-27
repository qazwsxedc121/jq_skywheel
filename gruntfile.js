module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
            },
            build: {
                options: {
                    report: "min",
                    mangle: false, //不混淆变量名
                    preserveComments: false, //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    footer:'\n/*! <%= pkg.name %> last modified： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
                },
                files: {
                    'jq-skywheel.min.js': ['jq-skywheel.js']
                }
            }
        }
    });

    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 默认任务
    grunt.registerTask('default', ['uglify:build']);
}
