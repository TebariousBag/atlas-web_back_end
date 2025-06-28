// now we are using { expect }
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');
// set up calculator, and seperate function testing for each operatpr
describe('calculateNumber', function() {
  // SUM testing
	describe('SUM', function() {
		it('should add 2 values', function() {
			expect(calculateNumber('SUM', 1, 3)).to.equal(4);
		})
	});
  // SUBTRACT testing
	describe('SUBTRACT', function() {
		it('should subtract 2 values', function() {
			expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
		})
	});
  // DIVISION TESTING
	describe('DIVIDE', function() {
		it('should subtract 2 values', function() {
			expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
		})

    it('should return error when 2nd value is 0', function() {
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });

	});

});
