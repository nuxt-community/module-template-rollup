
module.exports = {
    helpers: {
      raw: options => options.fn(this)
    },
    skipInterpolation: "**/*.vue",
    prompts: {
      name: {
        'type': 'string',
        'required': true,
        'message': 'Package name'
      },
      npm: {
        'type': 'string',
        'required': true,
        'message': 'Npm package name'
      },
      github: {
        'type': 'string',
        'message': 'Github repository (like nuxt-community/test-module)'
      },
      description: {
        'type': 'string',
        'message': 'Module description',
      },
      author: {
        'type': 'string',
        'message': 'Author'
      },
    },
    completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
  };