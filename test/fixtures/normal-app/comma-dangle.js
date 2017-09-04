'use strict';

let foo = {
  bar: 'baz',
  qux: 'quux',
};

foo = { bar: 'baz', qux: 'quux' };

foo = [
  1,
  2,
];

foo = [ 1, 2 ];

console.log(foo);

function bar(a, b) {
  console.log(a, b);
}
bar(1, 2);
