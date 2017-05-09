'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/index.test.js', () => {

  it('should support', () => {
    const cwd = path.join(__dirname, 'fixtures/es8');
    return coffee.spawn('eslint', [ 'index.js' ], { cwd })
      .debug()
      .expect('code', 0)
      .end();
  });
});
