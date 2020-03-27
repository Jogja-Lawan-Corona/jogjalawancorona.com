import gulp from 'gulp'
import plumber from 'gulp-plumber'
import changed from 'gulp-changed'
import browserSync from 'browser-sync'

import config from '../config'

gulp.task('images', () => gulp.src(config.images.src)
  .pipe(plumber({
    errorHandler(err) {
      console.log(err)
      this.emit('end')
    }
  }))
  .pipe(gulp.dest(config.images.dist))
  .pipe(browserSync.reload({stream:true}))
)
