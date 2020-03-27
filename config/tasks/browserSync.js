import gulp from 'gulp'
import browserSync from 'browser-sync'
import runSequence from 'gulp4-run-sequence'

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


gulp.task('browserSync', gulp.series('bundling', () => {
  browserSync.init(config.browserSync)
}))
