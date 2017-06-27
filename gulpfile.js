var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');

gulp.task('sass', function() {
    gulp.src('sass/pages/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./css'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('sass/**/*.scss', ['sass']);
})