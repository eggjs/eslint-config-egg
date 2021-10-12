'ues strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'examples',
    'benchmarks',
    'docs',
  ],
  dep: [
    'babel-eslint',
    'eslint-plugin-import',
    'eslint-plugin-react',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-eggache',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-plugin-jsdoc',
    'eslint-plugin-node',
    'eslint-plugin-redos',
  ],
  devdep: [
    'autod',
    'eslint',
    'egg-ci',
  ],
  semver: [
    'egg-bin@1',
  ],
};
