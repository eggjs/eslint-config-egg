'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/redos.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/redos');

  it('should fail when redos', () => {
    return coffee.spawn('eslint', [ '.' ], { cwd })
      .debug()
      .expect('stdout', /3:12.*redos\/no-vulnerable/)
      .expect('stdout', /4:1.*redos\/no-vulnerable/)
      .expect('code', 1)
      .end();
  });
});
