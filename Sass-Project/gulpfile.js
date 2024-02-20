const { src, dest, watch, series } = require('gulp');

// const css = require('gulp-clean-css');
const scss = require('gulp-sass')(require('sass'));


function compilaSCSS(){
    return src('./src/scss/*.scss')
    .pipe(scss({}))
    .pipe(dest('./src/css'))   
}

function watcher(){
    watch('./src/scss/**/*.scss', compilaSCSS);
}


// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
    // body omitted
    cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
    // body omitted
    cb();
}

exports.build = build;
exports.default = series(clean, build);


exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;