# eslint-config-egg

Node Style Guide for Egg.

## Install

```bash
npm i eslint eslint-config-egg --save-dev
```

## Usage

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-egg": "10",
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
    "eslint-config-egg": "8",
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
    "eslint-config-egg": "10",
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
    "eslint-config-egg": "10",
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

|[<img src="https://avatars1.githubusercontent.com/u/360661?v=4" width="100px;"/><br/><sub><b>popomore</b></sub>](https://github.com/popomore)<br/>|[<img src="https://avatars0.githubusercontent.com/u/156269?v=4" width="100px;"/><br/><sub><b>fengmk2</b></sub>](https://github.com/fengmk2)<br/>|[<img src="https://avatars2.githubusercontent.com/u/227713?v=4" width="100px;"/><br/><sub><b>atian25</b></sub>](https://github.com/atian25)<br/>|[<img src="https://avatars0.githubusercontent.com/u/3580607?v=4" width="100px;"/><br/><sub><b>benjycui</b></sub>](https://github.com/benjycui)<br/>|[<img src="https://avatars0.githubusercontent.com/u/3274850?v=4" width="100px;"/><br/><sub><b>geekdada</b></sub>](https://github.com/geekdada)<br/>|[<img src="https://avatars3.githubusercontent.com/u/985607?v=4" width="100px;"/><br/><sub><b>dead-horse</b></sub>](https://github.com/dead-horse)<br/>|
| :---: | :---: | :---: | :---: | :---: | :---: |
[<img src="https://avatars1.githubusercontent.com/u/10082151?v=4" width="100px;"/><br/><sub><b>bowei-jbw</b></sub>](https://github.com/bowei-jbw)<br/>|[<img src="https://avatars2.githubusercontent.com/u/13050025?v=4" width="100px;"/><br/><sub><b>aladdin-add</b></sub>](https://github.com/aladdin-add)<br/>|[<img src="https://avatars1.githubusercontent.com/u/143572?v=4" width="100px;"/><br/><sub><b>hotoo</b></sub>](https://github.com/hotoo)<br/>

This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Mon Mar 11 2019 15:51:28 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->
