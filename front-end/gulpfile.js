// const - ES2015
// require() --> cargado de modulos CommonJS
const gulp = require("gulp");
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task("default", ['compress-js', 'styles-compiler'], () => {
	console.log("Gulpfile just run!!!");
});

gulp.task('styles-compiler', function () {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('compress-js', function (cb) {
  pump([
        gulp.src('./src/js/*.js'),
        uglify(),
        gulp.dest('./dist/js')
    ],
    cb
  );
});