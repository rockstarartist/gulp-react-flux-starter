/**
 * Less & CSS compilation
 */

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    source = require('vinyl-source-stream'),
    package = require('../../package.json');
    
gulp.task('less', function() {
  return gulp.src(package.paths.less)
  .pipe(less())
  .pipe(concat(package.dest.style))
  .pipe(gulp.dest(package.dest.dist))
  .on('error', gutil.log);
})

.task('less:min', function() {
  return gulp.src(package.paths.less)
  .pipe(less())
  .pipe(concat(package.dest.style))
  .pipe(cssmin())
  .pipe(gulp.dest(package.dest.dist))
  .on('error', gutil.log);
});

//.task('minifyCss', ['sass'], function() {
//  return gulp.src(config.cssSrc)
//    .pipe(minifyCSS({keepBreaks:true}))
//    .pipe(gulp.dest(config.dest))
//    .pipe(size());
//});