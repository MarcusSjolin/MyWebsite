var gulp = require("gulp");
var gutil = require("gulp-util");
var application = require("./src/Application")

gulp.task("start", function(callback) {
    application.applyPlugins()
})

//require("./src/Gulp/Main.js")