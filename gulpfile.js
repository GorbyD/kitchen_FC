'use strict';

// var gulp = require('gulp'),
// 	gp = require('gulp-load-plugins')(), //плагины называются gulp-name. С помощью этой переменной можно вызывать их gp.name. Также необязательно отдельно подключать эти плагины в переменные
// 	// pug = require ('gulp-pug');
// 	browserSync = require('browser-sync').create();

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath){
	require(taskPath)();
});

//Запуск дефолтного таска по команде gulp
$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug','less','script:libs','script','image:dev','svg','fonts'),
	$.gulp.parallel('watch','serve')
));

$.gulp.task('build', $.gulp.series(
	$.gulp.parallel('pug','less','script:libs','script','image:build','svg','fonts'),
	$.gulp.parallel('watch','serve')
));