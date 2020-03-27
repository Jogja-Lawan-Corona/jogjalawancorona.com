const config = {
  sass: {
    src: ['./src/sass/**/*.scss'],
    dist: './dist/css'
  },
  pug: {
    src: './src/templates/**/*.pug',
    dist: './dist'
  },
  browserSync: {
    server: {
      baseDir: './dist'
    }
  },
  scripts: {
    src: './src/js/**/*.js',
    dist: './dist/js'
  },
  images: {
    src: './src/img/**/*',
    dist: './dist/img'
  },
  fonts: {
    src: './src/fonts/**/*',
    dist: './dist/fonts'
  }
}

export default config
