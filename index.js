'use strict';

module.exports = {
  extends: [
    './lib/legacy',
    './lib/rules/es6',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  },
};
