"use strict";

var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var del = require("del");
var gulp = require("gulp");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var svgstore = require("gulp-svgstore");
var webp = require("gulp-webp");
var include = require("posthtml-include");
var run = require("run-sequence");
var htmlmin = require("gulp-htmlmin");

gulp.task("clean", function(){
  return del("build");
});

gulp.task("copy", function(){
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**/*.{jpg,png,svg}",
    "js/**/*.js"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

gulp.task("html", function() {
  return gulp.src("*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("build"));
});

gulp.task("images", function() {
  return gulp.src("img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("img"));
});

gulp.task("webp", function() {
  return gulp.src("img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("img"));
});

gulp.task("sprite", function() {
  return gulp.src("img/**/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream())
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html", ["html"]);
});

gulp.task("build", function(done) {
  run(
    "clean",
    "copy",
    "style",
    "sprite",
    "html",
    done);
});
