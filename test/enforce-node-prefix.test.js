const path = require('path');
const coffee = require('coffee');

describe('test/enforce-node-prefix.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/enforce-node-prefix');

  describe('normal', () => {
    it('should works without error', () => {
      return coffee.spawn('eslint', [ 'correct.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should throw with not correct lint', () => {
      return coffee.spawn('eslint', [ 'not-correct.ts' ], { cwd })
        // .debug()
        .expect('stdout', /error {2}'assert' import is restricted from being used {2}no-restricted-imports/)
        .expect('code', 1)
        .end();
    });
  });
});
