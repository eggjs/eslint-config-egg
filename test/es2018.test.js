'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/es2018.test.js', () => {

  it('should support object spread', () => {
    const cwd = path.join(__dirname, 'fixtures/es2018');
    return coffee.spawn('eslint', [ 'index.js' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });
});
