'use strict';

var path = require('path');
var assert = require('assert');
var CLIEngine = require('eslint').CLIEngine;
var cli = new CLIEngine({
  configFile: path.resolve(__dirname, './.eslintrc'),
});
var config = cli.getConfigForFile('./index.js');

describe('default config', function() {

  it('should work', function() {
    assert(config.parserOptions.ecmaVersion, 5);
    assert(config.parserOptions.sourceType, 'script');
  });

});
