'use strict';

const dns = require('node:dns');
const fs = require('node:fs');

() => {
  fs.readFile('./.eslintrc', 'utf8', (error, content) => {
    console.log(error, content);
  });
};

hostname => {
  dns.lookup(hostname, (error, address, family) => {
    console.log(error, address, family);
  });
};
