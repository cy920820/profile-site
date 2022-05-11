const { series, parallel, src, dest } = require('gulp')
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-html-minifier-terser')
const gulpClean = require('gulp-clean')
const gulpCopy = require('gulp-copy')

function clean() {
  return src('dist').pipe(gulpClean())
}

function html() {
  return src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'))
}

function css() {
  // body omitted
  return src('*.css').pipe(cleanCSS()).pipe(dest('dist'))
}

function copySomeNecessaryAssets() {
  return src('public/**/*').pipe(gulpCopy('dist', { prefix: 1 }))
}

exports.default = series(clean, parallel(html, css), copySomeNecessaryAssets)
