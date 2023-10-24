// se actualizan añadiendo watch, parallel y src
const { series, src, dest, watch, parallel } = require('gulp');
// Tasca 1 SASS
const scss = require('gulp-sass')(require('sass'));
// TASCA 2 CSS MINIFY 
const limpiarCSS = require('gulp-clean-css');
// TASCA 4 JS MINIFY
const limpiarJS = require('gulp-uglify');
// TASCA 5 CONCATCSS
const concat = require('gulp-concat'); 


// TASCA 1 SASS
function compilarSCSS(){
  return src('sass/*.scss')
    .pipe(scss()).pipe(dest('css/'));
}

// TASCA 2 SASS:WATCH
function watcher() {
  watch('sass/*.scss', compilarSCSS);
  watch('sass/partials/*.scss', compilarSCSS);
}

// TASCA 3 CSS MINIFY
function minifyCSS() {
  return src('css/*.css')
    .pipe(limpiarCSS()).pipe(dest('dist/css/'));
}

// TASCA 4 JS MINIFY
function minifyJS() {
  return src('js/*.js')
    .pipe(limpiarJS()).pipe(dest('dist/js/'));
}


// TASCA 5 CONCATCSS
function concatCSS() {
  return src('dist/css/*.css')
    .pipe(concat('all.css'))
    .pipe(dest('dist/css/'));
}


// TASCA 6 CONCATJS
function concatJS() {
  return src('dist/js/*.js')
    .pipe(concat('all.js'))
    .pipe(dest('dist/js/'));
}

function clean(cb) {
  // body omitted
  cb();
}


function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.default = series(clean, build);

// EXPORTS de TAREAS

exports.compilarSCSS = compilarSCSS;
exports.watcher = watcher;
// exportamos las tareas para minificar CSS y JS
exports.minifyCSS = minifyCSS;
exports.minifyJS = minifyJS;
// exportamos las tareas para concatenar CSS y JS
exports.concatCSS = concatCSS;
exports.concatJS = concatJS;

// y la tarea kittens servira para ejecutar todas las tareas en serie
exports.kittens = series(compilarSCSS, parallel(
    series(minifyCSS, concatCSS),
    series(minifyJS, concatJS)
  )
);
