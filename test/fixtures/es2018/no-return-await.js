'use strict';

async function run() {
  await Promise.resolve(111);

  console.log('print');

  return await Promise.resolve(222);
}

run();
