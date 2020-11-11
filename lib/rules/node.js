'use strict';

module.exports = {
  env: {
    node: true,
  },
  plugins: [
    'node',
  ],
  rules: {
    /**
     * disallow new operators with calls to require
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md
     */
    'node/no-new-require': 'error',

    /**
     * enforce either Buffer or require("buffer").Buffer
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
     */
    'node/prefer-global/buffer': [ 'error', 'always' ],

    /**
     * enforce either console or require("console")
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
     */
    'node/prefer-global/console': [ 'error', 'always' ],

    /**
     * enforce either process or require("process")
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
     */
    'node/prefer-global/process': [ 'error', 'always' ],

    /**
     * enforce either TextDecoder or require("util").TextDecoder
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
     */
    'node/prefer-global/text-decoder': 'off',

    /**
     * enforce either TextEncoder or require("util").TextEncoder
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
     */
    'node/prefer-global/text-encoder': 'off',

    /**
     * enforce either URLSearchParams or require("url").URLSearchParams
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
     */
    'node/prefer-global/url-search-params': 'off',

    /**
     * enforce either URL or require("url").URL
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
     */
    'node/prefer-global/url': 'off',

    /**
     * enforce require("dns").promises
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
     */
    'node/prefer-promises/dns': 'warn',

    /**
     * enforce require("fs").promises
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
     */
    'node/prefer-promises/fs': 'warn',

    /**
     * disallow import declarations which import private modules
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
     */
    'node/no-unpublished-import': 'off',

    /**
     * disallow unsupported ECMAScript built-ins on the specified version
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
     */
    'node/no-unsupported-features/es-builtins': 'off',

    /**
     * suggest correct usage of shebang
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
     */
    'node/shebang': 'off',

    /**
     * disallow unsupported ECMAScript syntax on the specified version
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
     */
    'node/no-unsupported-features/es-syntax': 'off',

    /**
     * disallow unsupported Node.js built-in APIs on the specified version
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
     */
    'node/no-unsupported-features/node-builtins': 'off',

    /**
     * make process.exit() expressions the same code path as throw
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
     */
    'node/process-exit-as-throw': 'off',

    /**
     * disallow deprecated APIs
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
     */
    'node/no-deprecated-api': 'off',

    /**
     * require error handling in callbacks
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md
     */
    'node/handle-callback-err': 'off',

    /**
     * ensure Node.js-style error-first callback pattern is followed
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md
     */
    'node/no-callback-literal': 'off',

    /**
     * disallow the assignment to exports
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
     */
    'node/no-exports-assign': 'off',

    /**
     * disallow import declarations which import extraneous modules
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
     */
    'node/no-extraneous-import': 'off',

    /**
     * disallow require() expressions which import extraneous modules
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
     */
    'node/no-extraneous-require': 'off',

    /**
     * disallow import declarations which import non-existence modules
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
     */
    'node/no-missing-import': 'off',

    /**
     * disallow require() expressions which import non-existence modules
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
     */
    'node/no-missing-require': 'off',

    /**
     * disallow string concatenation with __dirname and __filename
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
     */
    'node/no-path-concat': 'off',

    /**
     * disallow the use of process.exit()
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
     */
    'node/no-process-exit': 'off',

    /**
     * disallow bin files that npm ignores
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
     */
    'node/no-unpublished-bin': 'off',

    /**
     * disallow require() expressions which import private modules
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
     */
    'node/no-unpublished-require': 'off',

    /**
     * require return statements after callbacks
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md
     */
    'node/callback-return': 'off',

    /**
     * enforce the style of file extensions in import declarations
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
     */
    'node/file-extension-in-import': 'off',

    /**
     * equire require() calls to be placed at top-level module scope
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md
     */
    'node/global-require': 'off',

    /**
     * disallow require calls to be mixed with regular variable declarations
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md
     */
    'node/no-mixed-requires': 'off',

    /**
     * disallow the use of process.env
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md
     */
    'node/no-process-env': 'off',

    /**
     * disallow specified modules when loaded by import declarations
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-import.md
     */
    'node/no-restricted-import': 'off',

    /**
     * disallow specified modules when loaded by require
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md
     */
    'node/no-restricted-require': 'off',

    /**
     * disallow synchronous methods
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md
     */
    'node/no-sync': 'off',

    /**
     * enforce either module.exports or exports
     * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
     */
    'node/exports-style': 'off',
  },
};
