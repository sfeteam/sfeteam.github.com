var gulp = require('gulp'),
    // minifycss = require('gulp-minify-css'),
    // jshint = require('gulp-jshint'),
    // uglify = require('gulp-uglify'),
    // rename = require('gulp-rename'),
    // concat = require('gulp-concat'),
    // del = require('del'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    // cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),    
    browserSync = require('browser-sync');

// 暂时没有拼接，仅copy到新目录
gulp.task('html', function () {
	return gulp.src('src/**/*.html', {base: 'src'})
		.pipe(gulp.dest('dist/'))
		.pipe(notify({message: 'HTML done!'}));
});

gulp.task('sass', function () {
	return sass('src/**/*.scss', {base: 'src'}, {style: 'expanded'})
		.pipe(autoprefixer('last 2 version', 'ie >= 7'))
		.pipe(gulp.dest('dist/'))
		.pipe(notify({message: 'Sass done!'}));
});

gulp.task('css', function () {
	return gulp.src('src/**/*.css', {base: 'src'})
		.pipe(autoprefixer('last 2 version', 'ie >= 7'))
		.pipe(gulp.dest('dist/'))
		.pipe(notify({message: 'CSS done!'}));
});

// 暂时关闭jshint,IDE中默认使用jshint
gulp.task('js', function () {
	return gulp.src('src/**/*.js', {base: 'src'})
		// .pipe(jshint())
		// .pipe(jshint.reporter('default'))
		.pipe(gulp.dest('dist/'))
		.pipe(notify({message: 'JS done!'}));
});

gulp.task('img', function () {
	return gulp.src('src/**/images/*', {base: 'src'})
		.pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
		.pipe(gulp.dest('dist/'))
		.pipe(notify({message: 'Images done!'}))
});

// 默认生成所有文件
gulp.task('default', ['html', 'sass', 'css', 'js', 'img']);

// 监听所有文件并实时生成和预览
gulp.task('refresh', ['html', 'sass', 'css', 'js', 'img'], function () {
	var files = [
		'./**/*.html',
		'./**/*.css',
		'./**/*.js',
		'./**/images/*'
	];

	browserSync.init(files, {
		server: {
			baseDir: '.'
		}
	});

	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/**/*.css', ['css']);
	gulp.watch('src/**/*.js', ['js']);
	gulp.watch('src/**/images/*', ['img']);
});

// 监听所有文件并实时生成
gulp.task('watch', ['html', 'sass', 'css', 'js', 'img'], function () {
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/**/*.css', ['css']);
	gulp.watch('src/**/*.js', ['js']);
	gulp.watch('src/**/images/*', ['img']);
});