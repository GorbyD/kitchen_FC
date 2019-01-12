module.exports = function() {
	// Таск для сборки CSS файла
	$.gulp.task('less', function () {
		return $.gulp.src('dev/static/less/main.less')
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.less({
			'include css':true
		}))
		.pipe($.gp.autoprefixer({ //автоматически ставит необходимые префиксы
			browsers: ['last 10 versions'],
			cascade:false
		}))
		.on("error", $.gp.notify.onError({ //проверка на ошибки
			// message: "Error: <%= error.message %>",
			title: "Error running something (LESS)"
		}))
		.pipe($.gp.csso({
			// restructure: false
		})) //оптимизирует код (объединяет свойства по одному селектору), минифицирует при неоходимости
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest('build/static/css'))
		.pipe($.bs.reload({
			stream: true
		}));
	});
}
