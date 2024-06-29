const builtin = [
  './lib/legacy',
  './lib/rules/enforce-node-prefix',
  './lib/rules/es6',
  './lib/rules/es2022',
].map(require.resolve);

module.exports = {
  extends: builtin.concat([
    'plugin:eggache/recommended',
  ]),
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'script',
  },
};
