var gulp=require('gulp');
var sass=require('gulp-sass');
var mincss=require('gulp-clean-css');
var server=require('gulp-webserver');
var fs=require('fs');
var path=require('path');
var url=require('url');
    
    gulp.task('devCss',function(){
          return gulp.src('./src/sass/*.scss')
                 .pipe(sass())
                 .pipe(mincss())
                 .pipe(gulp.dest('./src/css'))
    })
    gulp.task('watch',function(){
         return gulp.watch('./src/sass/*.scss',gulp.series('devCss'))
    })
    gulp.task('devServer',function(){
          return gulp.src('./src')
                 .pipe(server({
                     port:9090,
                     middleware:function(req,res,next){
                         res.end()
                     }
                 }))
    })
    gulp.task('default',gulp.series('devCss','devServer','watch'))