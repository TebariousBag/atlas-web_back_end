const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi func', function() {
	let stub;
    // create a spy for our calcNum
	beforeEach(function() {
		stub = sinon.stub(Utils, 'calculateNumber');
	});
    // and after testing we restore the spy
	afterEach(function() {
		stub.restore();
	})

  it('Utils.calculateNumber to always return the same number 10', function() {
    // function
    sendPaymentRequestToApi(100, 20);
    // spy for calcnum
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  });

});
