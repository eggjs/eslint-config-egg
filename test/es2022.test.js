const path = require('node:path');
const coffee = require('coffee');

// https://dev.to/jasmin/whats-new-in-es2022-1de6
// Features of ES2022
describe('test/es2022.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/es2022');

  it('should support at()', () => {
    return coffee.spawn('eslint', [ 'at.js' ], { cwd })
      .debug()
      .expect('code', 0)
      .end();
  });

  it('should support RegExp match indices', () => {
    return coffee.spawn('eslint', [ 'regex.js' ], { cwd })
      .debug()
      .expect('code', 0)
      .end();
  });

  it('should support error.cause', () => {
    return coffee.spawn('eslint', [ 'error.js' ], { cwd })
      .debug()
      .expect('code', 0)
      .end();
  });
});
