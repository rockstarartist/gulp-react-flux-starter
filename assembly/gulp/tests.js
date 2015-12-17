/* 
 * This GULP task file contains all Javascript test scripts.
 */

var gulp = require('gulp'),
        gutil = require('gulp-util'),
        browserify = require('browserify'),
        source = require('vinyl-source-stream'),
        buffer = require('vinyl-buffer'),
        babelify = require('babelify'),
        jshint = require('gulp-jshint'),
        mochaPhantomJS = require('gulp-mocha-phantomjs'),
        package = require('../../package.json');

gulp.task('tests', function () {
    return gulp
            .src('tests/runner.html')
            .pipe(mochaPhantomJS({reporter: 'spec', dump: 'test.log'}));
});

/**
 * JSLint/JSHint validation
 */
gulp.task('lint-test', function () {
    return gulp.src(package.paths.jstest)
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .on('error', gutil.log);
});

gulp.task('browserify-test', ['lint-test'], function () {
    return gulp.src(package.paths.jstest)
            .pipe(browserify(
                    {
                        entries: [package.paths.app], // Only need initial file, browserify finds the deps
                        transform: [babelify], // We want to convert JSX to normal javascript
                        extensions: "jsx",
                        debug: true, // Gives us sourcemapping
                        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
                    }
            ))
            .pipe(rename('application-test.js'))
            .pipe(gulp.dest('build'));
});

gulp.task('test', ['lint-test', 'browserify-test'], function () {
    return gulp.src('test/client/index.html')
            .pipe(mochaPhantomjs())
            .on('error', gutil.log);
});