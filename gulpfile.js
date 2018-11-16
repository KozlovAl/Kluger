var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');




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

// concat js

// gulp.task('scripts', function() {
//   return gulp.src([
//         'app/js/jquery-3.3.1.min.js',
//         'app/js/slick.min.js',
//         'app/js/main.js'
//         ])
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('app/js/'));
// });


gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass'], browserSync.reload);
   
});