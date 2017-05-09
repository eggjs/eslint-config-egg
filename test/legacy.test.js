'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/legacy.test.js', () => {

  it('should fail when use es6', () => {
    const cwd = path.join(__dirname, 'fixtures/legacy-app');
    return coffee.spawn('eslint', [ 'es6-fail.js' ], { cwd })
      .debug()
      .expect('stdout', /The keyword 'const' is reserved/)
      .expect('code', 1)
      .end();
  });
});
