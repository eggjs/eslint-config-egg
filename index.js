'use strict';

const builtin = [
  './lib/legacy',
  './lib/rules/es6',
  './lib/rules/es8',
].map(require.resolve);

module.exports = {
  extends: builtin.concat([
    'plugin:eggache/recommended',
  ]),
  parserOptions: {
    sourceType: 'script',
  },
};
