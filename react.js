module.exports = {
  extends: [
    './index',
    './lib/rules/browser',
    './lib/rules/import',
    './lib/rules/react',
    './lib/rules/react-a11y',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  rules: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
};
