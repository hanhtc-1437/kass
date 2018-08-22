// above code is unstable
var watch = require('gulp-watch');
// Uses the Gulp build system
var gulp = require('gulp')
// Transforms sass files into .css
var sass = require('gulp-sass');
// Transforms .pug files into .html
var pug = require('gulp-pug')
// Creates browser-sync server with the name of the directory
var bs = require('browser-sync').create(__dirname.split('/').pop())

var src = {
	html: './*.html',
	pug: './*.pug',
	js: './!(main)*.js',
	mainjs: './js/main.js',
	server: './'
}

var app = {
	html: './*.html',
	htmlDir: './',
	cssDir: './css/',
	js: './js/**/!(main)*.js',
	mainjs: './js/main.js',
	jsDir: './js/',
	server: './'
}

var handleError = function (e) {
	console.error(e.stack)
	this.emit('end')
}

gulp.task('default', ['pug', 'js'], () => {
	bs.init({
		server: app.server,
		https: true
	})
	gulp.watch(src.pug, ['pug'])
	gulp.watch(src.js, ['js', () => { bs.reload() }])
	gulp.watch("./scss/*.scss", ['sass']);
	gulp.watch(src.scss, ['scss', () => { bs.reload() }])
	bs.watch(app.html).on('change', bs.reload)
})

gulp.task('pug', () => {
	return gulp.src(src.pug)
	.pipe(pug({pretty: true}))
	.on('error', handleError)
	.pipe(gulp.dest(app.htmlDir))
})

gulp.task('sass', () => {
	return gulp.src("./scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("./css"))
	.pipe(bs.stream());
})

gulp.task('js', () => {
	return gulp.src(src.js)
	.pipe(gulp.dest(app.jsDir))
})



