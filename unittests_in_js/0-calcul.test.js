// must use assert, so import library
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('supposed to return 4 when adding 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when adding 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('supposed to return 5 when adding 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('supposed to return 6 when adding 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('supposed to return 1 when adding 0 and .5', function() {
    assert.strictEqual(calculateNumber(0, .5), 1);
  });

  it('supposed to return -2 when adding -1 and -1.5', function() {
    assert.strictEqual(calculateNumber(-1, -1.5), -2);
  });

  
});
