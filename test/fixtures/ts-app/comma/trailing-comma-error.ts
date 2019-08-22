export const foo = {
  a: 1,
  b: 2
};

export const bar = [
  1,
  2
];

function foo2(
  a: string,
  b: string
) {
  console.info(a + b);
}

import {
  a,
  b
} from 'egg';

export {
  a,
  b
} from 'egg';
