const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi func', function() {
	let spy;
    // create a spy for our calcNum
	beforeEach(function() {
		spy = sinon.spy(Utils, 'calculateNumber');
	});
    // and after testing we restore the spy
	afterEach(function() {
		spy.restore();
	})

  it('sendPaymentRequestToApi and Utils.calculateNumber should be the same', function() {
    // function
    sendPaymentRequestToApi(100, 20);
    // spy for calcnum
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });

});
