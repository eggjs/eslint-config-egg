'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/es8.test.js', () => {

  it('should support async function', () => {
    const cwd = path.join(__dirname, 'fixtures/es8');
    return coffee.spawn('eslint', [ 'index.js' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });
});
