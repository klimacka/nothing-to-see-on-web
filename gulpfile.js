const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const watchify = require("watchify");
const fancy_log = require("fancy-log");

const PATHS = {
  pages: ["src/*.html"],
};
const DIST_PATH = "dist";

const watchedBrowserify = watchify(
  browserify({
    basedir: ".",
    debug: true,
    entries: ["src/main.entry.ts"],
    cache: {},
    packageCache: {}
  }).plugin(tsify)
);

gulp.task("copy-html", function() {
  return gulp.src(PATHS.pages).pipe(gulp.dest(DIST_PATH));
});

function bundle() {
  return watchedBrowserify
    .bundle()
    .on("error", fancy_log)
    .pipe(source("bundle.js"))
    .pipe(gulp.dest(DIST_PATH));
}

gulp.task("default", gulp.series(gulp.parallel("copy-html"), bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", fancy_log);
