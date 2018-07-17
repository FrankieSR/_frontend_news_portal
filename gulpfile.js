var syntax = "scss";

var gulp = require("gulp"),
    gutil = require("gulp-util"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    cleancss = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    autoprefixer = require("gulp-autoprefixer"),
    notify = require("gulp-notify");

gulp.task("browser-sync", () => {
    browserSync({
        server: {
            baseDir: "app"
        },
        notify: false
    });
});

gulp.task("styles", () => {
    return gulp
        .src("app/" + syntax + "/**/*." + syntax + "")
        .pipe(sass({ outputStyle: "expand" }).on("error", notify.onError()))
        .pipe(rename({ suffix: ".min", prefix: "" }))
        .pipe(autoprefixer(["last 15 versions"]))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task("js", () => {
    return gulp
        .src(["app/js/lib/require.js"])
        .pipe(concat("scripts.min.js"))
        .pipe(gulp.dest("app/js"))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", ["styles", "js", "browser-sync"], () => {});

gulp.task("default", ["watch"]);
