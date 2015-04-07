// gulp task dependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var path = require('path');

// 
// BASE PREFIX
//

var input = './';
var output = './';


// 
// DIST PATHS
// 

var dist = {
  outfile: 'timeUtils.min.js',
  files: [
    input + 'timeUtils.js'
  ]
};

//
// DIST TASK
//

gulp.task('scripts:dist', function() {
  return gulp.src(dist.files)
    .pipe(uglify())
    .pipe(concat(dist.outfile))
    .pipe(gulp.dest(output))
    .pipe(livereload());
});



//
// WATCHER TASK
//

gulp.task('watch', function() {
  gulp.watch(dist.files, ['scripts:dist']);
});

//
// TASK ALIAS'
//

gulp.task('default', ['scripts:dist']);
gulp.task('uber', ['scripts:dist', 'watch']);
