/* const gulp = require ('gulp');
const sass = require ('gulp-sass')(require("sass"));

const entryPath = 'BestShopMobile';

gulp.task('compileSass', function () {
    return gulp.src(entryPath + "/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(entryPath + "/css"));
});


gulp.task("default", gulp.series("compileSass")) */

/* const gulp = require('gulp');
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
gulp.task('default', gulp.series('build')); */






/* const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css'); // Optional: For minifying CSS
const del = require('del');

const entryPath = 'BestShopMobile';
const outputPath = 'dist';

// Clean the dist directory before building
gulp.task('clean', function () {
    return del([outputPath]);
});

// Compile SASS to CSS, optionally minify, and output to dist
gulp.task('compileSass', function () {
    return gulp.src(entryPath + '/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS()) // Optional: Remove if you don't want to minify CSS
        .pipe(gulp.dest(outputPath + '/css'));
});

// Copy HTML files to dist
gulp.task('copy-html', function () {
    return gulp.src(entryPath + '/*.html')
        .pipe(gulp.dest(outputPath));
});

// Build task
gulp.task('build', gulp.series('clean', 'compileSass', 'copy-html'));

// Default task
gulp.task('default', gulp.series('build')); */



const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

// Set paths
const entryPath = 'BestShopMobile';
const outputPath = 'dist';

// Clean the dist directory before building
gulp.task('clean', async function () {
    const del = await import('del');
    return del.deleteAsync([outputPath]); // Use del.deleteAsync() for the async function in ES module version
});

// Compile SASS to CSS, optionally minify, and output to dist
gulp.task('compileSass', function () {
    return gulp.src(entryPath + '/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS()) // Optional: Remove if you don't want to minify CSS
        .pipe(gulp.dest(outputPath + '/css'));
});

// Copy HTML files to dist
gulp.task('copy-html', function () {
    return gulp.src(entryPath + '/*.html')
        .pipe(gulp.dest(outputPath));
});

// Build task
gulp.task('build', gulp.series('clean', 'compileSass', 'copy-html'));

// Default task
gulp.task('default', gulp.series('build'));


