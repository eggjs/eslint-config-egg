const path = require('path');
const assert = require('assert');
const CLIEngine = require('eslint').CLIEngine;
const cli = new CLIEngine({
  configFile: path.resolve(__dirname, './.eslintrc'),
});
const config = cli.getConfigForFile('./index.js');

describe('react config', () => {

  it('should work', () => {
    assert(config.parserOptions.ecmaFeatures.jsx, true);
    assert(config.parserOptions.sourceType, 'module');
    assert(config.parserOptions.ecmaVersion, 6);
  });

});
