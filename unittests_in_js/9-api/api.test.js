const request = require('request');
const assert = require('assert');
const { expect } = require('chai');
// port url
const url = 'http://localhost:7865';


describe('suite for index page', function() {
  // when function is done, send request and make sure we get 200
  it('should return status code 200', function(done) {
    // callback receives these args
    request.get(url, (error, response, body) => {
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });

  // when function is done, send request and make sure we get welcome message
  it('should return the welcome message', function(done) {
    // callback receives these args
    request.get(url, (error, response, body) => {
      assert.strictEqual(body, 'Welcome to the payment system');
      done();
    });
  });

  // if the route we are accessing doesn'exist
  it('404 on route that doesnt exist', function(done) {
    request.get('http://localhost:7865/notHere', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
  // check a cart route is not a number, res 404
  it('check if id is not a number', (done) => {
      request('http://localhost:7865/cart/abc', (error, response, body) => {
          assert.strictEqual(response.statusCode, 404);
          // always remember to use done()
          done();
    });
  });
  // check a cart route is number, res with message
  it('check if id is a number', (done) => {
      request('http://localhost:7865/cart/456', (error, response, body) => {
          assert.strictEqual(body, 'Payment methods for cart 456');
          // always remember to use done()
          done();
    });
  });

});
