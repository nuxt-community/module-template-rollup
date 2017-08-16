import { resolve } from 'path'

export default async function myModule (moduleOptions) {
  const options = Object.assign({}, moduleOptions)

  this.nuxt.__module_test_value__ = options.test

  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    options
  })
}
