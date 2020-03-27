import gulp from 'gulp'

import config from '../config'

gulp.task('default', ['browserSync'], () => {
  gulp.watch(config.sass.src, ['sass'])
  gulp.watch(config.scripts.src, ['scripts'])
  gulp.watch(config.pug.src, ['pug'])
  gulp.watch(config.images.src, ['images'])
})
