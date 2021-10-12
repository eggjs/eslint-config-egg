'use strict';

const builtin = [
  './lib/legacy',
  './lib/rules/es6',
  './lib/rules/es2020',
  './lib/rules/redos',
].map(require.resolve);

module.exports = {
  extends: builtin.concat([
    'plugin:eggache/recommended',
  ]),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
};
