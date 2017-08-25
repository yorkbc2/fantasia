var gulp = require("gulp")

var sass = require('gulp-sass')

var concat = require("gulp-concat")

gulp.task("sass", function () {
  return gulp.src("./src/sass/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(concat("loyalty.scss"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("css", function () {
  return gulp.src("./dist/loyalty.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./dist"))
})

gulp.task("sass:watch", function () {
  gulp.watch("./src/**/*.scss", ["sass","css"])
})