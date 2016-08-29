var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		browserSync  = require('browser-sync'),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglifyjs'),
		cssnano      = require('gulp-cssnano'),
		rename       = require('gulp-rename'),
		del          = require('del'),
		git          = require('git'),
		jade         = require('gulp-jade'),
		// imagemin     = require('gulp-imagemin'),
		// pngquant     = require('imagemin-pngquant'),
		cache        = require('gulp-cache'),
		autoprefixer = require('gulp-autoprefixer'),
		promise      = require('es6-promise').Promise; //Не работал cssnano

gulp.task('templates', function () {
	var YOUR_LOCALS = {};

	return gulp.src('jade/*.jade')
						 .pipe(jade({
						 	locals: YOUR_LOCALS 
						 }))
						 .pipe(gulp.dest('app/'))
						 .pipe(browserSync.reload({stream:true}));
});
gulp.task('sass', function () {
	return gulp.src('sass/**/*.sass')
						 .pipe(sass())
						 .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
						 .pipe(gulp.dest('app/css'))
						 .pipe(browserSync.reload({stream:true}));
});
gulp.task('css-libs', ['sass'], function () {
	return gulp.src('app/css/libs.css')
						 .pipe(cssnano())
						 .pipe(rename({suffix: '.min'}))
						 .pipe(gulp.dest('app/css/'));
});
gulp.task('scripts-libs', function () {
	return gulp.src([
									'app/libs/jquery/dist/jquery.min.js',
									'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
									])
						 .pipe(concat('libs.min.js'))
						 .pipe(uglify())
						 .pipe(gulp.dest('app/js'));
});
gulp.task('scripts', ['scripts-libs'], function () {
	return gulp.src('app/js/src/*.js')
						 .pipe(concat('common.min.js'))
						 .pipe(uglify())
						 .pipe(gulp.dest('app/js'))
						 .pipe(browserSync.reload({stream:true}));
});
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});
gulp.task('watch', ['browser-sync', 'templates', 'css-libs', 'scripts'], function () {
	gulp.watch('sass/*.sass', ['sass']);
	gulp.watch('jade/*.jade', ['templates']);
	gulp.watch('app/js/src/*.js', ['scripts']);
});
gulp.task('clean', function () {
	return del.sync('dist');
});
gulp.task('clear', function() {
	return cache.clearAll();
})
// git.task('img', function () {
// 	return gulp.src('app/img/**/*')
// 						 .pipe(cache(imagemin({
// 						 	interlaced: true,
// 						 	progressive: true,
// 						 	svgoPlugins: [{ remove: false }],
// 						 	use: [pngquant()]
// 						 })))
// 						 .pipe(gulp.dest('dest/img'));
// });
gulp.task('build', ['clean', 'templates','sass', 'scripts'], function () {
	
	var buildCss = gulp.src([
													'app/css/main.css',
													'app/css/libs.css',
													'app/css/fonts.css'
													])
										 .pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*') 
    								 	 .pipe(gulp.dest('dist/fonts'))

  var buildJs = gulp.src([
  												'app/js/common.min.js',
  												'app/js/libs.min.js'
  											]) 
    								.pipe(gulp.dest('dist/js'))

  var buildHtml = gulp.src('app/*.html')
    								 	.pipe(gulp.dest('dist'));

  var buildMedia = gulp.src('app/img/**/*')
    								 	.pipe(gulp.dest('dist/img'));
});
gulp.task('default', ['watch']);