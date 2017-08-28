# Module Template

> Starter template for Nuxt.js Modules

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).
Make sure to use a version of vue-cli >= 2.1 (vue -V).

## Features

- Using [Nuxt Module Builder](https://github.com/nuxt/module-builder), You can use latest ECMA Script features, including async/await
- ESLint
- Test suit using jest
- Code coverage
- Circle CI

## Create a Nuxt Module

```bash
vue init nuxt-community/module-template module-name
cd <project-name>
yarn install # or npm install
```

## Development
For easier development you can use [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/) or [npm link](https://docs.npmjs.com/cli/link)
to link to your project. Yhen start build using `npm run dev`.
You can use Conventional commits for good auto change logs using `standard-version`.

## Continues integration
It is advices enabling CircleCI for your module project so tests and coverage will be automatically run on each push.

## Publish

```bash
npm run release
```

## Licenses

- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)