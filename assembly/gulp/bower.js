/* 
 * This Gulp Task file contains all the bower specific tasks that prep bower
 * components for development and production.
 */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    run = require('gulp-run'),
    cssmin = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    buffer = require('vinyl-buffer'),
    package = require('../../package.json'),
    mainBowerFiles = require('main-bower-files');

/**
 * Running Bower
 */
gulp.task('bower', function() {
  run('bower install').exec();
})

/**
 * Create Bower dependency files for Development
 * 
 */
var jsoptions = {

      // Set the base path for your bower components
      base: './bower_components',
      
      debugger: true,

      // Only return the JavaScript files
      filter: /.*\.js$/i
    };
gulp.task('mainBowerJSFiles-dev', function() {
  return gulp.src(mainBowerFiles(jsoptions))
    .pipe(concat(package.dest.vendorlibs))
    .pipe(gulp.dest(package.dest.dist))
    .on('error', gutil.log);
})

/**
 * Create Bower dependency files for Production
 * 
 */
gulp.task('mainBowerJSFiles-production', function() {
  return gulp.src(mainBowerFiles(jsoptions))
    .pipe(concat(package.dest.vendorlibs))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(package.dest.dist))
    .on('error', gutil.log);
})

/**
 * Create Bower dependency css files for development
 * 
 */
var cssoptions = {

      // Set the base path for your bower components
      base: './bower_components',
      
      debugger: true,

      // Only return the css files
      filter: /.*\.css$/i
    };
gulp.task('mainBowerCSSFiles-dev', function() {
  return gulp.src(mainBowerFiles(cssoptions))
    .pipe(concat(package.dest.vendorcss))
    .pipe(gulp.dest(package.dest.dist))
    .on('error', gutil.log);
})

/**
 * Create Bower dependency css files for production
 * 
 */
gulp.task('mainBowerCSSFiles-production', function() {
  return gulp.src(mainBowerFiles(cssoptions))
    .pipe(concat(package.dest.vendorcss))
    .pipe(cssmin())
    .pipe(gulp.dest(package.dest.dist))
    .on('error', gutil.log);
})

/**
 * Aggregate Bower dependency font files for development & production
 * 
 */
var fontoptions = {

      // Set the base path for your bower components
      base: './bower_components',
      
      debugger: true,

      // Only return the font files
      filter: /.*\.eot$|.*\.otf$|.*\.svg$|.*\.ttf$|.*\.woff$|.*\.woff2$/i
    };
gulp.task('mainBowerFontFiles', function() {
  return gulp.src(mainBowerFiles(fontoptions))
    .pipe(gulp.dest(package.dest.fontdist))
    .on('error', gutil.log);
})

