/* 
 * This GULP task file contains all Javascript processing scripts.
 */

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('babelify'),
    //reactify = require('reactify'), this was working
    //reactify = require('gulp-react');
    package = require('../../package.json');
    
/**
 * JSLint/JSHint validation
 */
gulp.task('lint', function() {
  return gulp.src(package.paths.js)
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .on('error', gutil.log);
})

/** JavaScript compilation */
.task('js', function() {
  return browserify(
        {
            entries: [package.paths.app], // Only need initial file, browserify finds the deps
            transform: [reactify], // We want to convert JSX to normal javascript
            extensions: "jsx",
            debug: true, // Gives us sourcemapping
            cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
        }
       )
//  return browserify(package.paths.app)
//  .transform(reactify)
  .bundle()
  .pipe(source(package.dest.app))
  .pipe(gulp.dest(package.dest.dist))
  .on('error', gutil.log);
})

.task('js:min', function() {
  return browserify(package.paths.app)
  .transform(reactify)
  .bundle()
  .pipe(source(package.dest.app))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest(package.dest.dist))
  .on('error', gutil.log);
});

