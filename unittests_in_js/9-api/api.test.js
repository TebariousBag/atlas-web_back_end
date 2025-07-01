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

});
