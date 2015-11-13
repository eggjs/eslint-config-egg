'use strict';

const assert = require('assert');
const eslintrc = require('../index');

describe('eslint', function() {

  it('should get rules', function() {
    assert.ok(eslintrc);
    assert.deepEqual(eslintrc.parser, 'espree');
    assert.deepEqual(eslintrc.ecmaFeatures, {
      jsx: true,
    });
  });
});
