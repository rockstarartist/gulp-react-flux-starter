/**
 * SASS & CSS compilation
 */

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    source = require('vinyl-source-stream'),
    package = require('../../package.json'),
    scsslint = require('gulp-scss-lint');

    
gulp.task('styles', function() {
  return gulp.src(package.paths.scss)
  .pipe(sass())
  .pipe(concat(package.dest.style))
  .pipe(gulp.dest(package.dest.dist))
  .on('error', gutil.log);
})

.task('styles:min', function() {
  return gulp.src(package.paths.scss)
  .pipe(sass())
  .pipe(concat(package.dest.style))
  .pipe(cssmin())
  .pipe(gulp.dest(package.dest.dist))
  .on('error', gutil.log);
})

/**
 * Lint SCSS files
 * `gem install scss-lint` needed
 */
.task('scsslint', function() {
  return gulp.src(package.paths.scss)
    .pipe(scsslint())
	.on('error', gutil.log);
});
