'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/jsdoc.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/jsdoc-app');

  it('should warnning when function params is not exist', () => {
    return coffee.spawn('eslint', [ 'index.js' ], { cwd })
      // .debug()
      .expect('stdout', /warning {2}Missing JSDoc @param "abc" declaration/)
      .expect('stdout', /warning {2}Missing JSDoc @return description/)
      .expect('stdout', /warning {2}Missing JSDoc @param "a" description/)
      .expect('stdout', /warning {2}Missing JSDoc @param "b" description/)
      .expect('code', 0)
      .end();
  });
});
