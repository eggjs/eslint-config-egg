'use strict';

module.exports = {
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    './lib/rules/es6',
    './lib/legacy',
  ].map(require.resolve),
};
