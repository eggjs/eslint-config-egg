'use strict';

const { Buffer } = require('buffer');
Buffer.alloc(16);

const console = require('console');
console.log('hello');

const process = require('process');
process.exit(0);

const { TextDecoder } = require('util');
new TextDecoder();

const { TextEncoder } = require('util');
new TextEncoder()

const { URLSearchParams } = require('url');
new URLSearchParams();

const { URL } = require('url');
new URL();
