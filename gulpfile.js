var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('sass/core.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

// Autoprefixer
// gulp.task('autoprefixer', function () {
//     var postcss      = require('gulp-postcss');
//     var sourcemaps   = require('gulp-sourcemaps');
//     var autoprefixer = require('autoprefixer');

//     return gulp.src('./css/*.css')
//         .pipe(sourcemaps.init())
//         .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('./css/'));
// });

// Set watch over created tasks
gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', ['styles'])
});