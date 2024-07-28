/* const gulp = require ('gulp');
const sass = require ('gulp-sass')(require("sass"));

const entryPath = 'BestShopMobile';

gulp.task('compileSass', function () {
    return gulp.src(entryPath + "/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(entryPath + "/css"));
});


gulp.task("default", gulp.series("compileSass")) */

const gulp = require('gulp');
const sass = require('gulp-sass')(require("sass"));

const entryPath = 'BestShopMobile';

gulp.task('compileSass', function () {
    return gulp.src(entryPath + "/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(entryPath + "/css"));
});

// Define a build task
gulp.task('build', gulp.series('compileSass'));

// Set the default task to build
gulp.task('default', gulp.series('build'));
