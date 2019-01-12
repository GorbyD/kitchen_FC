module.exports = function() {

	$.gulp.task('image:dev', function () {
		return $.gulp.src('dev/static/images/**/*.{png,jpg,jpeg,gif}')
		.pipe($.gulp.dest('build/static/images'))
	});

	$.gulp.task('image:build', function () {
		return $.gulp.src('dev/static/images/**/*.{png,jpg,jpeg,gif}')
		.pipe($.gp.tinypng('dZ8b3FkG7kbxBD8BGRVRdXCFp4LRNp6h'))
		.pipe($.gulp.dest('build/static/images'))
	});
}