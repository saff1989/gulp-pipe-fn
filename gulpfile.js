const gulp = require('gulp'),
    gulpPipeFn = require('./gulp-pipe-fn.js');

gulp.task('default', () => {
    return gulp.src(['./gulp-pipe-fn.js']).pipe(gulpPipeFn((file, enc) => { console.log(file, enc) }));
});