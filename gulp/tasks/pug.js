module.exports = function() {
	// Таск для сборки pug
	$.gulp.task('pug', function () {
		return $.gulp.src('dev/pug/*.pug')
		.pipe($.gp.pug({
			pretty:true
		}))
		.pipe($.gulp.dest('build'))
		.on('end',$.bs.reload);
	});
}
