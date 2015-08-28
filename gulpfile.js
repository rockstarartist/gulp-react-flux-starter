/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in assembly/gulp. Any files in that directory get
  automatically required below.
  To add a new task, simply add a new task file that directory.
  This file specifies the default set of tasks to run
  when you run `gulp serve` or `gulp serve:production`.
*/

var requireDir = require('require-dir');
var gulp = require('gulp');
var package = require('./package.json');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Require all tasks in assembly/gulp, including subfolders.
requireDir('./assembly/gulp', { recurse: true });

/**
 * Compiling resources and serving application.
 */
gulp.task('serve', ['bower', 'clean', 'lint', 'scsslint', 'styles', 'js', 'server', 'mainBowerJSFiles-dev', 'mainBowerCSSFiles-dev', 'mainBowerFontFiles'], function() {
  return gulp.watch([
    package.paths.js, package.paths.jsx, package.paths.html, package.paths.less
  ], [
   'lint', 'styles', 'js', browserSync.reload
  ]);
})

/**
 * Compiling resources and serving application for production.
 */
.task('serve:production', ['bower', 'clean', 'lint', 'scsslint', 'styles:min', 'js:min', 'server', 'mainBowerJSFiles-production', 'mainBowerCSSFiles-production', 'mainBowerFontFiles'], function() {
  return gulp.watch([
    package.paths.js, package.paths.jsx, package.paths.html, package.paths.less
  ], [
   'lint', 'styles:min', 'js:min', browserSync.reload
  ]);
});