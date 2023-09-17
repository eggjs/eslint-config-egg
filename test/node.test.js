const path = require('path');
const coffee = require('coffee');

describe('test/node.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/node-app');

  describe('no-new-require', () => {
    it('should success', () => {
      return coffee.spawn('eslint', [ 'no-new-require.js' ], { cwd })
        .expect('code', 0)
        .end();
    });

    it('should fail with new require', () => {
      return coffee.spawn('eslint', [ 'no-new-require-fail.js' ], { cwd })
        .expect('stdout', /no-new-require/)
        .expect('code', 1)
        .end();
    });
  });

  describe('prefer-promises', () => {
    it('should success', () => {
      return coffee.spawn('eslint', [ 'prefer-promises.js' ], { cwd })
        .expect('code', 0)
        .end();
    });

    it('should fail with unused promises', () => {
      return coffee.spawn('eslint', [ 'prefer-promises-fail.js' ], { cwd })
        .expect('stdout', /node\/prefer-promises\/fs/)
        .expect('stdout', /node\/prefer-promises\/dns/)
        .expect('code', 0)
        .end();
    });
  });

  describe('prefer-global', () => {
    it('should success', () => {
      return coffee.spawn('eslint', [ 'prefer-global.js' ], { cwd })
        .expect('code', 0)
        .end();
    });

    it('should fail with unused the global variable', () => {
      return coffee.spawn('eslint', [ 'prefer-global-fail.js' ], { cwd })
        .expect('stdout', /prefer-global\/buffer/)
        .expect('stdout', /prefer-global\/console/)
        .expect('stdout', /prefer-global\/process/)
        .expect('code', 1)
        .end();
    });
  });
});
