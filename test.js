const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

const sum = (a, b) => a + b;
const pow = (a, b) => a ** b;
const max = (a, b) => Math.max(a, b);

const treeOne = { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } };
const treeTwo = { value: 150, left: { value: 120, left: { value: 100 } }, right: { value: 170, right: { value: 200 } } };
const treeThree = { value: 200, left: { value: 100 }, right: { value: 300 } };

describe('sumOfOther', () => {
  it('1', () => {
    const arr = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(arr, [8, 7, 6, 9]);
  });
  it('2', () => {
    const arr = sumOfOther([163, 107, 52, 159, 76, 96, 96, 104, 94, 44, 26, 26, 110, 142, 182, 142, 113, 75, 62, 57]);
    assert.deepEqual(arr, [1763, 1819, 1874, 1767, 1850, 1830, 1830, 1822, 1832, 1882, 1900, 1900, 1816, 1784, 1744, 1784, 1813, 1851, 1864, 1869]);
  });
  it('3', () => {
    const arr = sumOfOther([94, 80, 62, 11, 76, 100, 67, 58, 30, 64, 11, 28, 34, 65, 12, 28, 86, 54, 93, 23, 79, 83, 62, 85, 24, 62, 47, 89, 56, 10, 64, 44, 85, 41, 21, 84, 94, 74, 47, 80]);
    assert.deepEqual(arr, [2213, 2227, 2245, 2296, 2231, 2207, 2240, 2249, 2277, 2243, 2296, 2279, 2273, 2242, 2295, 2279, 2221, 2253, 2214, 2284, 2228, 2224, 2245, 2222, 2283, 2245, 2260, 2218, 2251, 2297, 2243, 2263, 2222, 2266, 2286, 2223, 2213, 2233, 2260, 2227]);
  });
});

describe('make', () => {
  it('1', () => {
    const rez = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(rez, 777);
  });
  it('2', () => {
    const rez = make(2)(3, 4)(3)(pow);
    assert.deepEqual(rez, 68719476736);
  });
  it('3', () => {
    const rez = make(221)(3, 42, 424)(625)(34, 424, 525, 32)(42)(max);
    assert.deepEqual(rez, 625);
  });
});

describe('recursion', () => {
  it('1', () => {
    const rez = recursion(treeOne);
    assert.deepEqual(rez, [[100], [90, 120], [70, 99, 110, 130]]);
  });
  it('2', () => {
    const rez = recursion(treeTwo);
    assert.deepEqual(rez, [[150], [120, 170], [100, 200]]);
  });
  it('3', () => {
    const rez = recursion(treeThree);
    assert.deepEqual(rez, [[200], [100, 300]]);
  });
});
