/**
 * SASS & CSS compilation
 */

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    source = require('vinyl-source-stream'),
    package = require('../../package.json');
    
gulp.task('styles', function() {
  return gulp.src(package.paths.less)
  .pipe(sass())
  .pipe(concat(package.dest.style))
  .pipe(gulp.dest(package.dest.dist))
  .on('error', gutil.log);
})

.task('styles:min', function() {
  return gulp.src(package.paths.less)
  .pipe(sass())
  .pipe(concat(package.dest.style))
  .pipe(cssmin())
  .pipe(gulp.dest(package.dest.dist))
  .on('error', gutil.log);
});
