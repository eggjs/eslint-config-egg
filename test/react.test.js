'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/react.test.js', () => {

  it('should support jsx', () => {
    const cwd = path.join(__dirname, 'fixtures/react-app');
    return coffee.spawn('eslint', [ 'jsx.jsx' ], { cwd })
      .debug()
      .expect('code', 0)
      .end();
  });

  it('should disable forbid-prop-types', () => {
    const cwd = path.join(__dirname, 'fixtures/react-app');
    return coffee.spawn('eslint', [ 'forbid-prop-types.jsx' ], { cwd })
      .debug()
      .expect('code', 0)
      .end();
  });
});
