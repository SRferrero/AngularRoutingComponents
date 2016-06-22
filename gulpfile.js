var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserSync = require('browser-sync').create();

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('dev', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("js/*.js", ['js-watch']);
});

