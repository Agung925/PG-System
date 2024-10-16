const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const fileInclude = require('gulp-file-include');

// Path
const path = {
    html: {
        src: 'src/pages/**/*.html',
        dest: 'dist/pages'
    },
    css: {
        src: 'src/css/**/*.css',
        dest: 'dist/css'
    },
    js: {
        src: 'src/js/**/*.js',
        dest: 'dist/js'
    },
}

// CompileHTML
function html() {
    return gulp.src(path.html.src)
    .pipe(fileInclude({
        prefix: '@@',
        basepath: 'src'
    }))
    .pipe(gulp.dest(path.html.dest));
}

function css() {
    return gulp.src(path.css.src)
    .pipe(postcss([
        tailwindcss('./tailwind.config.js'),
        autoprefixer(),
    ]))
    .pipe(gulp.dest(path.css.dest));
}

function js() {
    return gulp.src(path.js.src)
    .path(gulp.dest(path.js.dest));
}

// Watch files
function watch() {
    gulp.watch([
        path.css.src,
        './src/**/*.html'
    ], gulp.series(css, html));
    gulp.watch(path.js.src, js);
}

// Default task
gulp.task('default', gulp.series(html, css, js));

// Watch task
gulp.task('watch', watch)