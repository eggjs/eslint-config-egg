'use strict';

const { Buffer } = require('node:buffer');
Buffer.alloc(16);

const console = require('node:console');
console.log('hello');

const process = require('node:process');
process.exit(0);

const { TextDecoder } = require('node:util');
new TextDecoder();

const { TextEncoder } = require('node:util');
new TextEncoder();

const { URLSearchParams } = require('node:url');
new URLSearchParams();

const { URL } = require('node:url');
new URL();
