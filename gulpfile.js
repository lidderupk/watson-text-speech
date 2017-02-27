"use strict";

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

var filesToWatch = [
    'test/**/*.js',
    'src/**/*.js',
    'middlewares/**',
    'helpers/**',
    'controllers/**/*.js',
    '*.js',
    'src/**/*.js'
];

gulp.task('default', function() {
    gulp.watch([filesToWatch], ['mocha']);
});

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list', showStack: true, showProperties: true, fullTrace: false }))
        .on('error', gutil.log);
});