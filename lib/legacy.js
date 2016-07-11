'use strict';

module.exports = {
  env: {
    amd: false,
    jasmine: false,
    node: true,
    mocha: true,
    browser: true,
    builtin: true,
  },
  extends: [
    './rules/best-practices',
    './rules/strict',
    './rules/variables',
    './rules/style',
    './rules/node',
    './rules/errors',
  ].map(require.resolve),
};
