import gulp from 'gulp'
import plumber from 'gulp-plumber'
import changed from 'gulp-changed'
import concat from 'gulp-concat'
import browserSync from 'browser-sync'

import config from '../config'

gulp.task('scripts', () => gulp.src(config.scripts.src)
  .pipe(plumber({
    errorHandler(err) {
      console.log(err)
      this.emit('end')
    }
  }))
  .pipe(changed(config.scripts.dist, { extension: '.js' }))
  // .pipe(concat('app.js'))
  .pipe(gulp.dest(config.scripts.dist))
  .pipe(browserSync.reload({stream:true}))
)
