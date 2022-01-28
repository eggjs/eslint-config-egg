'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/es2018.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/es2018');

  it('should support object spread', () => {
    return coffee.spawn('eslint', [ 'index.js' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });


  it('should fail when use return await syntax', () => {
    return coffee.spawn('eslint', [ 'no-return-await.js' ], { cwd })
      // .debug()
      .expect('stdout', /Redundant use of `await` on a return value/)
      .expect('code', 1)
      .end();
  });
});
