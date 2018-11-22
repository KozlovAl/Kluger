var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var concat      = require('gulp-concat');




gulp.task('sass', function(){
    return gulp.src('app/sass/main.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false 
    });
});

// concat сss

gulp.task('css', function() {
  return gulp.src([
        'app/css/libs/slick-theme.css',
        'app/css/libs/slick.css',
        ])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('app/css/'));
});

// concat js

gulp.task('scripts', function() {
  return gulp.src([
        'app/js/libs/jquery-3.3.1.min.js',
        'app/js/libs/slick.min.js',
        'app/js/libs/main.js'
        ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/js/'));
});


gulp.task('watch', ['browser-sync', 'css', 'scripts', 'sass'], function() {
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/sass/**/*.scss', ['sass'], browserSync.reload);
    gulp.watch('app/css/**/*.css', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
   
});