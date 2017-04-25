'use strict';

module.exports = {
  extends: [
    './lib/legacy',
    './lib/rules/es6',
    './lib/rules/es8',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'script',
  },
};
