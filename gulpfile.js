var gulp=require('gulp');
var sass=require('gulp-sass');
var mincss=require('gulp-clean-css');
var server=require('gulp-webserver');
var fs=require('fs');
var path=require('path');
var url=require('url');
    //编译scss，并压缩css
    gulp.task('devCss',function(){
          return gulp.src('./src/sass/*.scss')
                 .pipe(sass())
                 .pipe(mincss())
                 .pipe(gulp.dest('./src/css'))
    })
    //监听scss
    gulp.task('watch',function(){
         return gulp.watch('./src/sass/*.scss',gulp.series('devCss'))
    })
    //起服务
    gulp.task('devServer',function(){
          return gulp.src('./src')
                 .pipe(server({
                     port:9090,
                     middleware:function(req,res,next){
                         if(req.url==='/favicon.ico'){
                             return res.end();
                         }
                         var pathname=url.parse(req.url).pathname;
                         pathname=pathname==='/'?'index.html':pathname;
                         res.end(fs.readFileSync(path.join(__dirname,'src',pathname)))
                     }
                 }))
    })
    //开发环境
    gulp.task('default',gulp.series('devCss','devServer','watch'))