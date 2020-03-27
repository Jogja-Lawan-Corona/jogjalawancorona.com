import gulp from 'gulp'
import plumber from 'gulp-plumber'
import changed from 'gulp-changed'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import mqpacker from 'css-mqpacker'
import browserSync from 'browser-sync'
import cleanCSS from 'gulp-clean-css'
import sourcemaps from 'gulp-sourcemaps'

import config from '../config'

gulp.task('sass', () => gulp.src(config.sass.src)
  .pipe(sourcemaps.init())
  .pipe(plumber({
    errorHandler(err) {
      console.log(err)
      this.emit('end')
    }
  }))
  // .pipe(changed(config.sass.dist, { extension: '.css' }))
  .pipe(sass({
    imagePath: '../images',
    outputStyle: 'expanded'
  }))
  .pipe(postcss([
    mqpacker({
      sort: true
    })
  ]))
  // .pipe(cleanCSS({
  //   level: {
  //     1: {
  //       specialComments: 0
  //     }
  //   }
  // }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(config.sass.dist))
  .pipe(browserSync.reload({stream:true}))
)
