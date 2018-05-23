 (() => {
   'use strict';

   var gulp = require('gulp'),
     uglify = require('gulp-uglify');

   var path = {
     build: {
       js: 'dist/'
     },
     src: {
       js: 'templater.js',
     }
   }

   /**
    * Build custom js
    */
   gulp.task('buildCustomJS', function () {
     return gulp.src(path.src.js)
       .pipe(uglify())
       .pipe(gulp.dest(path.build.js));
   });

 })();