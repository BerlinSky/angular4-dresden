module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie 11'],
      cascade: false,
      grid: true
    })
  ]
}