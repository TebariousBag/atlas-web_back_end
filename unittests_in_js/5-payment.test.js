const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi func', function() {
	let spy;
    // create a spy for our calcNum
	beforeEach(function() {
		// checking the log of console
		spy = sinon.spy(console, 'log');
	});
    // and after testing we restore the spy
	afterEach(function() {
		spy.restore();
	})

  // make sure it is true and only called once
  it('log The total is: 120 and called once', function() {
    // function
    sendPaymentRequestToApi(100, 20);
    // spy for calcnum
    expect(spy.calledWith('The total is: 120')).to.be.true;
	expect(spy.calledOnce).to.be.true
  });

    // make sure it is true and only called once
  it('log The total is: 120 and called once', function() {
    // function
    sendPaymentRequestToApi(10, 10);
    // spy for calcnum
    expect(spy.calledWith('The total is: 20')).to.be.true;
	expect(spy.calledOnce).to.be.true
  });

});
