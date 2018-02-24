'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/legacy.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/legacy-app');

  it('should fail when use es6', () => {
    return coffee.spawn('eslint', [ 'es6-fail.js' ], { cwd })
      // .debug()
      .expect('stdout', /The keyword 'const' is reserved/)
      .expect('code', 1)
      .end();
  });

  it('should disable browser', () => {
    return coffee.spawn('eslint', [ 'browser.js' ], { cwd })
      // .debug()
      .expect('stdout', /'name' is not defined/)
      .expect('code', 1)
      .end();
  });
});
