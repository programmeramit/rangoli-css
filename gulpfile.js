const {src, dest, watch, series} = require('gulp');

const saaas = require('gulp-sass')(require('sass'))


function  buildStyles () {
    return src('./sass/**/*.scss')
    .pipe(saaas())
    .pipe(dest('./css'))
}

function watchTask () {
    watch('./sass/**/*.scss', buildStyles)
}

exports.default = series(buildStyles, watchTask)