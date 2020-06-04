var gulp = require('gulp');
var sass = require('gulp-sass');
//var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    // .pipe(browserSync.reload({
    //     stream: true
    // }))
}); 

gulp.task('watch', function(){
    gulp.watch('./scss/**/*.scss', gulp.parallel('sass'));
})

// gulp.task('browserSync', function(){
//     browserSync.init({
//         server: {
//             baseDir: 'project'
//         },
//     })
// })

