'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/eggache.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/eggache');

  it('should fail when got newbie issue', () => {
    return coffee.spawn('eslint', [ '.' ], { cwd })
      // .debug()
      .expect('stdout', /eggache\/no-override-exports/)
      .expect('stdout', /eggache\/no-unexpected-plugin-keys/)
      .expect('code', 1)
      .end();
  });
});
