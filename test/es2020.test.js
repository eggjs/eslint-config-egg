'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/es2020.test.js', () => {

  it('should support bigint', () => {
    const cwd = path.join(__dirname, 'fixtures/es2020');
    return coffee.spawn('eslint', [ 'bigint.js' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });
});
