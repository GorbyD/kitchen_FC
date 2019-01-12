module.exports = function() {
	// Таск для сборки JS файла
	$.gulp.task('script:libs', function () {

		return $.gulp.src([
			// './node_modules/jquery/dist/jquery.min.js',
			'./node_modules/slick-carousel/slick/slick.min.js'])
		.pipe($.gp.concat('libs.min.js'))
		.pipe($.gulp.dest('build/static/js/'))
		.pipe($.bs.reload({
			stream: true
		}));
	});
	
	$.gulp.task('script', function () {
		return $.gulp.src('dev/static/js/*.js')
		.pipe($.gulp.dest('build/static/js/'))
		.pipe($.bs.reload({
			stream: true
		}));
	});
}
