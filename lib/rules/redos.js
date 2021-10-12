'use strict';

module.exports = {
  plugins: [
    'redos',
  ],
  rules: {
    'redos/no-vulnerable': 'error',
  },
  overrides: [
    {
      files: [ '**/*.test.js', '**/*.spec.js' ],
      rules: {
        'redos/no-vulnerable': 'off',
      },
    },
  ],
};
