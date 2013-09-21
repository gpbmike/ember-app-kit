module.exports = {
  // These copy tasks happen before transpile or hinting. They
  // prepare the build pipeline by moving JavaScript files to
  // tmp/javascript.
  //
  "prepare": {
    files: [{
      expand: true,
      cwd: 'app/',
      src: '**/*.js',
      dest: 'tmp/javascript/app'
    },
    {
      expand: true,
      cwd: 'tests/',
      src: ['**/*.js', '!test_helper.js', '!test_loader.js', '!vendor/**/*.js'],
      dest: 'tmp/javascript/tests/'
    }]
  },
  // Stage moves files to their final destinations after the rest
  // of the build cycle has run.
  //
  "stage": {
    files: [{
      expand: true,
      cwd: 'tests/',
      src: ['index.html', 'test_helper.js', 'test_loader.js', 'vendor/**/*'],
      dest: 'tmp/public/tests/'
    },
    {
      expand: true,
      cwd: 'public/',
      src: ['**'],
      dest: 'tmp/public/'
    }]
  },
  "vendor": {
    files: [{
      src: ['vendor/**/*.{js,css,eot,svg,ttf,woff}'],
      dest: 'tmp/public/'
    },
    {
      expand: true,
      flatten: true,
      src: ['vendor/bootstrap/dist/fonts/*'],
      dest: 'tmp/public/fonts/'
    }]
  },
  "dist": {
    files: [{
      expand: true,
      cwd: 'tmp/public',
      src: ['**/*.html', 'fonts/**'],
      dest: 'dist/'
    }]
  },
};
