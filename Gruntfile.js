module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-aws");

    grunt.initConfig({

        aws: grunt.file.readJSON("aws-credentials.json"),

        s3: {
            options: {
                accessKeyId: "<%= aws.accessKeyId %>",
                secretAccessKey: "<%= aws.secretAccessKey %>",
                region: "<%= aws.region %>",
                bucket: "<%= aws.bucket %>",
                access: "public-read",
                enableWeb: true
            },
            build: {
                cwd: "site",
                src: "**"
            }
        }
    });

    grunt.registerTask("default", ["s3"]);
};