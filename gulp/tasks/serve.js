module.exports = function() {
	// Browser-Sync
	$.gulp.task('serve', function () {
		$.bs.init({
			server: {
				baseDir: "./build"
			}
		});
		// browserSync.watch('build',browserSync.reload)
	});
}
