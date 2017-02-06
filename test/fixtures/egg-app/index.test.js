'use strict';

const path = require('path');
const assert = require('assert');
const CLIEngine = require('eslint').CLIEngine;
const cli = new CLIEngine({
  configFile: path.resolve(__dirname, './.eslintrc'),
});
const config = cli.getConfigForFile('./index.js');

describe('default config', () => {

  it('should work', () => {
    assert(config.parserOptions.ecmaVersion, 6);
    assert(config.parserOptions.sourceType, 'script');
  });

});
