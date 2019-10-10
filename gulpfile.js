var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("compile", () => {
  return gulp.src("./public_html/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest((file) => {
      return file.base;
    }));
});

gulp.task("watch", () => {
  return gulp.watch("./public_html/**/*.scss", gulp.series('compile'));
});

gulp.task("default", gulp.series('compile'));
