const path = require('node:path');
const coffee = require('coffee');

describe('test/es2020.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/es2020');

  it('should support bigint', () => {
    return coffee.spawn('eslint', [ 'bigint.js' ], { cwd })
      .debug()
      .expect('code', 0)
      .end();
  });
});
