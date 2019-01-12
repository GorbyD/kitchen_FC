module.exports = function() {
	//Watchers
	$.gulp.task('watch', function () {
		$.gulp.watch('dev/pug/**/*.pug',$.gulp.series('pug'));
		$.gulp.watch('dev/static/less/**/*.less',$.gulp.series('less'));
		$.gulp.watch('dev/static/js/main.js',$.gulp.series('script'));
		$.gulp.watch('dev/static/images/svg/*',$.gulp.series('svg'));
		$.gulp.watch('dev/static/images/**/*',$.gulp.series('image:dev'))
	});
}
