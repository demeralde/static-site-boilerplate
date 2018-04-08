const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const stylelint = require('gulp-stylelint');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');

const paths = {
  fonts: {
    src: './assets/fonts/*',
    dest: './build/fonts',
  },
  images: {
    src: './assets/img/*',
    dest: './build/img',
  },
  scripts: {
    src: './assets/js/*.js',
    dest: './build/js',
  },
  styles: {
    src: './assets/scss/*.scss',
    dest: './build/css',
  },
  templates: {
    src: './assets/templates/*.html',
    dest: './build/templates',
  },
};

const fonts = () => gulp
  .src(paths.fonts.src)
  .pipe(gulp.dest(paths.fonts.dest));

const images = () => gulp
  .src(paths.images.src)
  .pipe(gulp.dest(paths.images.dest));

const scripts = () => gulp
  .src(paths.scripts.src)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['@babel/env'],
  }))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(paths.scripts.dest));

const styles = () => gulp
  .src(paths.styles.src)
  .pipe(stylelint({
    reporters: [
      { console: true, formatter: 'string' },
    ],
  }))
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: [
      './assets/scss',
    ],
  }).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(paths.styles.dest));

const templates = () => gulp
  .src(paths.templates.src)
  .pipe(nunjucks.compile())
  .pipe(gulp.dest(paths.templates.dest));

const build = () => {
  scripts();
  styles();
  templates();
  fonts();
  images();
};

gulp.task('watch', () => {
  watch(paths.scripts.src, scripts);
  watch(paths.styles.src, styles);
  watch(paths.templates.src, templates);
  watch(paths.images.src, images);
  watch(paths.fonts.src, fonts);
});

gulp.task('build', build);
gulp.task('default', build);
