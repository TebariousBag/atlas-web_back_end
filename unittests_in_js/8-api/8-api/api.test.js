const request = require('request');
const { expect } = require('chai');
const url = 'http://localhost:7865';

describe('suite for index page', function() {
  request.get(url)
})
