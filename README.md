# Module Template for Nuxt.js With Rollup

> Starter template for Nuxt.js Modules

If you don't need rollup transpiling it is recommended using simpler variant [module-template](https://github.com/nuxt-community/module-template).

## Features

- Using [Nuxt Module Builder](https://github.com/nuxt/module-builder), You can use latest ECMAScript features, including **async/await**
- ESLint
- Ready tests using [Jest](https://facebook.github.io/jest)
- Code coverage
- Circle CI
- Standard Version

## Create a Nuxt Module

This is a template for [vue-cli](https://github.com/vuejs/vue-cli).
Make sure to use a version of vue-cli >= 2.1 (vue -V) is installed.
If you don't already have it, just install it.

```bash
vue init nuxt-community/module-template-rollup <module-name>
cd <module-name>
yarn install # or npm install
```

## Development
For easier development you can use [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/) or [npm link](https://docs.npmjs.com/cli/link)
to link to your project. Then start build using `npm run dev`. To version & publish module:

```bash
npm run release
```

## Licenses

- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)