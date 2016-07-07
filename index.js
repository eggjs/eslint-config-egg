'use strict';

module.exports = {
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'modules',
    ecmaFeatures: {
      jsx: true,
    },
  },
  'extends': [
    './rules/es6',
    './legacy',
  ].map(require.resolve),
};
