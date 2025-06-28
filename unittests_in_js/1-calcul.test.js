const assert = require('assert');
const calculateNumber = require('./1-calcul');
// set up calculator, and seperate function testing for each operatpr
describe('calculateNumber', function() {
  // SUM testing
	describe('SUM', function() {
		it('should add 2 values', function() {
			assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
		})
	});
  // SUBTRACT testing
	describe('SUBTRACT', function() {
		it('should subtract 2 values', function() {
			assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
		})
	});
  // DIVISION TESTING
	describe('DIVIDE', function() {
		it('should subtract 2 values', function() {
			assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
		})

    it('should return error when 2nd value is 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });

	});

});
