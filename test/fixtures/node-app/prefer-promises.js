'use strict';

const { promises: dns } = require('node:dns');
const { promises: fs } = require('node:fs');

const readFile = async filePath => {
  const content = await fs.readFile(filePath, 'utf8');
  console.log(content);
};
readFile();

const lookup = async hostname => {
  const { address, family } = await dns.lookup(hostname);
  console.log(address, family);
};
lookup();
