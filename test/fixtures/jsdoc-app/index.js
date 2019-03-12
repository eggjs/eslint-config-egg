'use strict';

/**
 * @return {Number} value
 */
exports.myFn = function myFn(abc) {
  return abc;
};

/**
 */
exports.myFn2 = function myFn2() {
  return 123;
};

/**
 * @return {Number}
 */
exports.myFn3 = function myFn3() {
  return 123;
};

// support complex type

class MyTest {
  test() {}
}

exports.MyTest = MyTest;

/** @type {(this: MyTest)=>number} */
exports.myFn4 = function myFn4() {
  this.test();
  return 123;
};

/**
 * @param {Number} a
 * @param {Number} b
 */
exports.myFn5 = function myFn5(a, b) {
  return a + b;
};
