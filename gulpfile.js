const
    gulp        = require('gulp'),
    yaml        = require('js-yaml'),
    fs          = require('fs'),
    sass        = require('gulp-sass'),
    sourceMaps  = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    config      = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf-8'));

gulp.task('compileScss', function () {
   gulp.src(config.css.sourceDir + config.css.mainFile)
       .pipe(sourceMaps.init())
       .pipe(sass().on('error', sass.logError))
       .pipe(sourceMaps.write())
       .pipe(gulp.dest(config.css.destDir))
       .pipe(browserSync.stream())

});