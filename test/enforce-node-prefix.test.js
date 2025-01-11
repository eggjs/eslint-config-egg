const path = require('node:path');
const coffee = require('coffee');

describe('test/enforce-node-prefix.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/enforce-node-prefix');
  const cwdJS = path.join(__dirname, 'fixtures/enforce-node-prefix-js');

  describe('normal', () => {
    it('should works without error', async () => {
      await coffee.spawn('eslint', [ 'correct.ts' ], { cwd })
        .debug()
        .expect('code', 0)
        .end();
      await coffee.spawn('eslint', [ 'correct.js' ], { cwd: cwdJS })
        .debug()
        .expect('code', 0)
        .end();
    });

    it('should throw with not correct lint', async () => {
      await coffee.spawn('eslint', [ 'not-correct.ts' ], { cwd })
        // .debug()
        .expect('stdout', /error {2}'assert' import is restricted from being used {2}no-restricted-imports/)
        .expect('code', 1)
        .end();
      await coffee.spawn('eslint', [ 'not-correct.js' ], { cwd: cwdJS })
        // .debug()
        .expect('stdout', /error {2}'assert' module is restricted from being used {2}no-restricted-modules/)
        .expect('code', 1)
        .end();
    });
  });
});
