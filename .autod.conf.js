'ues strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'examples',
    'benchmarks',
    "docs",
  ],
  devdep: [
    'autod',
    'eslint',
    'mocha',
    'egg-ci',
  ],
};
