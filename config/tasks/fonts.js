import gulp from 'gulp'
import plumber from 'gulp-plumber'
import changed from 'gulp-changed'
import browserSync from 'browser-sync'

import config from '../config'

gulp.task('fonts', () => gulp.src(config.fonts.src)
  .pipe(plumber({
    errorHandler(err) {
      console.log(err)
      this.emit('end')
    }
  }))
  .pipe(gulp.dest(config.fonts.dist))
  .pipe(browserSync.reload({stream:true}))
)
