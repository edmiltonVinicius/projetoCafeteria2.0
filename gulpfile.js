const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const rename = require('gulp-rename')

const minCss = (db) => {
    const arquivos = ['style', 'contato', 'cardapio', 'sobre-nos']
    const min = arquivos.map((arquivo) => {
        gulp.src(`src/css/${arquivo}.css`)
            .pipe(uglifycss({
                "maxLineLen": 80,
                "uglyComments": true
            }))
            .pipe(rename(`${arquivo}.min.css`))
            .pipe(gulp.dest('static/dest-css/'));
    })
    db()
}

const minJs = () => {
    return gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('static/dest-js/'))
}

const minImg = () => {
    return gulp.src('src/img/*') 
    .pipe(imagemin()) 
    .pipe(gulp.dest('static/dest-img/'))
}

const watch = () => {
    gulp.watch(['src/js/*.js', 'src/css/*.css'], gulp.parallel(minJs, minCss))
}


module.exports.default = gulp.series(minJs, minImg, minCss, watch)
