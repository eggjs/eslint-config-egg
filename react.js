'use strict';

module.exports = {
  extends: [
    './index',
    './lib/rules/import',
    './lib/rules/react',
    './lib/rules/react-a11y',
  ].map(require.resolve),
  rules: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
};
