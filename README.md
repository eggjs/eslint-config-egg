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
    "eslint-config-egg": "3",
    "eslint": "3"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-egg',
};
```

### Use with Experimental Features

If you want to use eslint-config-egg with experimental features such as `async function`, you should use `babel-eslint` parser:

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-egg": "3",
    "eslint": "3",
    "babel-eslint": "6"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-egg',
  // for experimental features support
  parser: 'babel-eslint',
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
    "eslint-config-egg": "3",
    "eslint": "3",
    "babel-eslint": "6",
    "eslint-plugin-react": "4"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-egg',
  // for experimental features support
  parser: 'babel-eslint',
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
