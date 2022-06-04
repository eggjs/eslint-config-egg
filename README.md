# eslint-config-egg

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-egg.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-egg
[ci-image]: https://github.com/eggjs/eslint-config-egg/actions/workflows/nodejs.yml/badge.svg
[ci-url]: https://github.com/eggjs/eslint-config-egg/actions/workflows/nodejs.yml
[codecov-image]: https://codecov.io/gh/eggjs/eslint-config-egg/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/eggjs/eslint-config-egg
[snyk-image]: https://snyk.io/test/npm/eslint-config-egg/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/eslint-config-egg
[download-image]: https://img.shields.io/npm/dm/eslint-config-egg.svg?style=flat-square
[download-url]: https://npmjs.org/package/eslint-config-egg

Node.js Style Guide for Egg.

## Install

```bash
npm i eslint eslint-config-egg --save-dev
```

## Usage

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-egg": "12",
    "eslint": "8"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-egg',
};
```

### Use with TypeScript project

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-egg": "12",
    "typescript": "^4.5.2"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-egg/typescript',
  parserOptions: {
    // recommend to use another config file like tsconfig.eslint.json and extends tsconfig.json in it.
    // because you may be need to lint test/**/*.test.ts but no need to emit to js.
    // @see https://github.com/typescript-eslint/typescript-eslint/issues/890
    project: './tsconfig.json'
  }
};
```

- `scripts`

```json
{
  "lint": "eslint . --ext .ts"
}
```

- `settings.json` in vscode

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
  ]
}
```

### Use with Experimental Features

If you want to use eslint-config-egg with experimental features such as `async function`, you should use `@babel/eslint-parser` parser:

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-egg": "12",
    "eslint": "8",
    "@babel/core": "7",
    "@babel/eslint-parser": "7"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-egg',
  // for experimental features support
  parser: '@babel/eslint-parser',
  rules: {
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  }
};
```

### Use with React in Front-End

If you want to use eslint-config-egg with react, jsx and es6 modules:

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-egg": "12",
    "eslint": "8",
    "@babel/core": "7",
    "@babel/eslint-parser": "7",
    "eslint-plugin-react": "7"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-egg',
  // for experimental features support
  parser: '@babel/eslint-parser',
  parserOptions: {
    // for es6 module
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // for variables in jsx
    'react/jsx-uses-vars': 'error',
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  },
};
```

## License

[MIT](LICENSE)

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/360661?v=4" width="100px;"/><br/><sub><b>popomore</b></sub>](https://github.com/popomore)<br/>|[<img src="https://avatars.githubusercontent.com/u/156269?v=4" width="100px;"/><br/><sub><b>fengmk2</b></sub>](https://github.com/fengmk2)<br/>|[<img src="https://avatars.githubusercontent.com/u/5856440?v=4" width="100px;"/><br/><sub><b>whxaxes</b></sub>](https://github.com/whxaxes)<br/>|[<img src="https://avatars.githubusercontent.com/u/227713?v=4" width="100px;"/><br/><sub><b>atian25</b></sub>](https://github.com/atian25)<br/>|[<img src="https://avatars.githubusercontent.com/u/3580607?v=4" width="100px;"/><br/><sub><b>benjycui</b></sub>](https://github.com/benjycui)<br/>|[<img src="https://avatars.githubusercontent.com/u/3274850?v=4" width="100px;"/><br/><sub><b>geekdada</b></sub>](https://github.com/geekdada)<br/>|
| :---: | :---: | :---: | :---: | :---: | :---: |
|[<img src="https://avatars.githubusercontent.com/u/985607?v=4" width="100px;"/><br/><sub><b>dead-horse</b></sub>](https://github.com/dead-horse)<br/>|[<img src="https://avatars.githubusercontent.com/u/2039144?v=4" width="100px;"/><br/><sub><b>sang4lv</b></sub>](https://github.com/sang4lv)<br/>|[<img src="https://avatars.githubusercontent.com/u/2972143?v=4" width="100px;"/><br/><sub><b>nightink</b></sub>](https://github.com/nightink)<br/>|[<img src="https://avatars.githubusercontent.com/u/2724034?v=4" width="100px;"/><br/><sub><b>missjing</b></sub>](https://github.com/missjing)<br/>|[<img src="https://avatars.githubusercontent.com/u/9857273?v=4" width="100px;"/><br/><sub><b>ShadyZOZ</b></sub>](https://github.com/ShadyZOZ)<br/>|[<img src="https://avatars.githubusercontent.com/u/15117664?v=4" width="100px;"/><br/><sub><b>zhaoxingyue</b></sub>](https://github.com/zhaoxingyue)<br/>|
[<img src="https://avatars.githubusercontent.com/u/10082151?v=4" width="100px;"/><br/><sub><b>bowei-jbw</b></sub>](https://github.com/bowei-jbw)<br/>|[<img src="https://avatars.githubusercontent.com/u/13050025?v=4" width="100px;"/><br/><sub><b>aladdin-add</b></sub>](https://github.com/aladdin-add)<br/>|[<img src="https://avatars.githubusercontent.com/u/143572?v=4" width="100px;"/><br/><sub><b>hotoo</b></sub>](https://github.com/hotoo)<br/>

This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Thu Jun 02 2022 15:10:46 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->
