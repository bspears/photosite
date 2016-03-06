'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//plug-ins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//lint task
gulp.task('lint', function(){
	return gulp.src('public/javascripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));

});

//compile css
gulp.task('sass', function(){
	return gulp.src('sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'))
});

//compile js
gulp.task('scripts', function(){
	return gulp.src('public/javascripts/*.js')
		.pipe(concat('photosite.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(rename('photosite.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

//watch
gulp.task('watch', function(){
	gulp.watch('public/javascripts/*.js', ['lint', 'scripts']);
	gulp.watch('sass/*.scss', ['sass']);
})

gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);