export const foo = {
  a: 1,
  b: 2,
};

export const bar = [
  1,
  2,
];

function foo2(
  a: string,
  b: string,
) {
  console.info(a + b);
}

import {
  fork,
  spawn,
} from 'coffee';

export {
  Rule,
} from 'coffee';

export { foo2, fork, spawn };
