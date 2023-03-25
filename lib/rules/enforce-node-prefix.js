const nodeStdlibs = [
  'assert', 'assert/strict',
  'async_hooks',
  'buffer',
  'child_process',
  'cluster',
  'console',
  'constants',
  'crypto',
  'dgram',
  'diagnostics_channel',
  'dns',
  'domain',
  'events',
  'fs', 'fs/promises',
  'http', 'http2', 'https',
  'inspector',
  'module',
  'net',
  'os',
  'path',
  'perf_hooks',
  'process',
  'punycode',
  'querystring',
  'readline', 'readline/promises',
  'repl',
  'stream', 'stream/web',
  'string_decoder',
  'sys',
  'test',
  'timers', 'timers/promises',
  'tls',
  'trace_events',
  'tty',
  'url',
  'util',
  'v8',
  'vm',
  'wasi',
  'worker_threads',
  'zlib',
];

module.exports = {
  rules: {
    /**
     * Enforce `node:` prefix:, module names from https://github.com/nodejs/node/tree/main/lib
     * @see https://eslint.org/docs/latest/rules/no-restricted-imports
     */
    'no-restricted-imports': [
      'error',
      ...nodeStdlibs,
    ],
    /**
     * @see https://eslint.org/docs/latest/rules/no-restricted-modules
     */
    'no-restricted-modules': [
      'error',
      ...nodeStdlibs,
    ],
  },
};
