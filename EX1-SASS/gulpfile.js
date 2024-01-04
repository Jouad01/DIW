const { src, dest, watch, series } = require('gulp');

// const css = require('gulp-clean-css');
const scss = require('gulp-sass')(require('sass'));


function compilaSCSS(){
    return src('./src/scss/*.scss')
    .pipe(scss({}))
    .pipe(dest('dist/'))   
}

function watcher(){
    watch('./src/scss/**/*.scss', compilaSCSS);
}

exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;