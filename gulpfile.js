var gulp = require('gulp')
var webserver = require('gulp-webserver')
var sass = require('gulp-sass')
var copy = require('gulp-file-copy')

var publicPath = '_dist/public/'
var frontendPath = 'src/frontend/'

var config = {
  fonts: {
    origin: frontendPath + 'fonts/*.ttf',
    watch: frontendPath + 'fonts/*.ttf',
    copy: publicPath + 'fonts'
  },
  html: {
    origin: frontendPath + '*.html',
    watch: frontendPath + '*.html',
    copy: publicPath + ''
  },
  scss: {
    main: frontendPath + 'scss/bundle.scss',
    watch: frontendPath + 'scss/*.scss',
    bundle: publicPath + 'css'
  },
  js: {
    main: frontendPath + 'js/bundle.js',
    watch: frontendPath + 'js/*.js',
    bundle: publicPath + 'js'
  }
}

gulp.task('copy-fonts', function () {
  gulp.src(config.fonts.origin)
    .pipe(gulp.dest(config.fonts.copy))
})

gulp.task('copy-html', function () {
  gulp.src(config.html.origin)
    .pipe(gulp.dest(config.html.copy))
})

gulp.task('build-css', function () {
  gulp.src(config.scss.main)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.scss.bundle))
})

gulp.task('build-js', function () {
  gulp.src(config.js.main)
  console.log('build-js')
})

gulp.task('build-frontend', [
  'copy-fonts', 
  'copy-html', 
  'build-css',
  'build-js'
])

gulp.task('watch', function () {
  gulp.watch(config.fonts.watch, ['copy-fonts'])
  gulp.watch(config.html.watch, ['copy-html'])
  gulp.watch(config.scss.watch, ['build-css'])
  gulp.watch(config.js.watch, ['build-js'])
})

gulp.task('server', function () {
  gulp.src(publicPath)
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      livereload: true
    }))
})

gulp.task('default', [
  'copy-fonts', 
  'copy-html', 
  'build-css',
  'build-js',
  'watch',
  'server'
])

