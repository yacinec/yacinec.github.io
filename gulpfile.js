var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', function() {
  // place code for your default task here
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
   browserSync.init({
        server: {
            baseDir: "./"
        },
        open: false

    });

    gulp.watch("*.html").on('change', browserSync.reload);
});

