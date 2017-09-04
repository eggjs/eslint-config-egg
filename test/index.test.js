'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/index.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/normal-app');

  describe('comma dangle', () => {
    it('should fail when the parameter of fn has trailing comma', () => {
      return coffee.spawn('eslint', [ 'comma-dangle-fn-fail.js' ], { cwd })
        // .debug()
        .expect('stdout', /Unexpected trailing comma {2}comma-dangle/)
        .expect('code', 1)
        .end();
    });

    it('should success', () => {
      return coffee.spawn('eslint', [ 'comma-dangle.js' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });
  });
});
