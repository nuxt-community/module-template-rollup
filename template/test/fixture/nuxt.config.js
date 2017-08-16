module.exports = {
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    ['~/../..', {
      test: 123
    }]
  ]
}
