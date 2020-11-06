'use strict';

const dns = require('dns');
const fs = require('fs');

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
