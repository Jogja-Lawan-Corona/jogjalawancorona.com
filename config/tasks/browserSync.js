import gulp from 'gulp'
import browserSync from 'browser-sync'
import runSequence from 'run-sequence'

import config from '../config'

gulp.task('bundling', cb => {
  runSequence(
    'images',
    'fonts',
    'sass',
    'scripts',
    'pug',
    cb
  )
})


gulp.task('browserSync', ['bundling'], () => {
  browserSync.init(config.browserSync)
})
