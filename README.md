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

Node.js Style Guide for EggJS

## Install

```bash
npm i eslint eslint-config-egg --save-dev
```

## Usage

### Use with JavaScript project

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-egg": "14",
    "eslint": "8"
  }
}
```

- `.eslintrc`

```json
{
  "extends": [
    "eslint-config-egg"
  ]
}
```

### Use with TypeScript project

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-egg": "13",
    "typescript": "5"
  }
}
```

- `.eslintrc`

```json
{
  "extends": [
    "eslint-config-egg/typescript"
  ]
}
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
    }
  ]
}
```

## License

[MIT](LICENSE)

## Contributors

[![Contributors](https://contrib.rocks/image?repo=eggjs/eslint-config-egg)](https://github.com/eggjs/eslint-config-egg/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).
