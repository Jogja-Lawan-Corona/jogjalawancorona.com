import gulp from 'gulp'
import plumber from 'gulp-plumber'
import changed from 'gulp-changed'
import pug from 'gulp-pug'
import prettify from 'gulp-prettify'
import browserSync from 'browser-sync'

import config from '../config'

gulp.task('pug', () => gulp.src(config.pug.src)
  .pipe(plumber({
    errorHandler(err) {
      console.log(err)
      this.emit('end')
    }
  }))
  // .pipe(changed(config.pug.dist, { extension: '.html' }))
  .pipe(pug())
  .pipe(prettify({
    preserve_newlines: true,
    max_preserve_newlines: 5,
    indent_inner_html: false
  }))
  .pipe(gulp.dest(config.pug.dist))
  .pipe(browserSync.reload({
    stream:true
  }))
)
