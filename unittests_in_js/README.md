# Unittests in JS

A comprehensive Node.js project demonstrating unit testing practices using Mocha, Chai, spies, stubs, hooks, and integration testing with a small Express server.

## Learning Objectives

At the end of this project, you will be able to explain to anyone, without the help of Google:

- **How to use Mocha to write a test suite**
- **How to use different assertion libraries (Node or Chai)**
- **How to present long test suites**
- **When and how to use spies**
- **When and how to use stubs**
- **What are hooks and when to use them**
- **Unit testing with Async functions**
- **How to write integration tests with a small node server**

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 20.x.x)
- **npm** (Node Package Manager)
- **Git** (for version control)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd unittests_in_js
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   node --version  # Should show v20.x.x
   npm --version   # Should show latest npm version
   ```

### Running Tests

#### Run all tests:
```bash
npm run test *.test.js
```

#### Run specific test file:
```bash
npm run test 0-calculator.test.js
```

#### Run tests with coverage:
```bash
npm run test:coverage
```

#### Run tests in watch mode:
```bash
npm run test:watch
```

### Test Examples

#### Basic Calculator Tests (0-calculator.test.js)
Demonstrates basic Mocha test structure and Chai assertions.

```javascript
const { expect } = require('chai');
const calculateNumber = require('./0-calculator');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber(1, 3)).to.equal(4);
    expect(calculateNumber(1, 3.7)).to.equal(5);
    expect(calculateNumber(1.2, 3.7)).to.equal(5);
  });
});
```

#### Payment Tests with Spies (1-payment.test.js)
Shows how to use spies to monitor function calls.

```javascript
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./1-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});
```

#### API Tests with Stubs (2-api.test.js)
Demonstrates using stubs to replace function implementations.

```javascript
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./2-api');

describe('sendPaymentRequestToApi', () => {
  it('should log the correct message', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
    
    stub.restore();
    spy.restore();
  });
});
```

## Key Concepts Covered

### Mocha Test Framework
- **Test Structure**: `describe` blocks for test suites, `it` blocks for test cases
- **Async Testing**: Using `done` callback or returning promises
- **Hooks**: `before`, `after`, `beforeEach`, `afterEach` for setup and teardown
- **Test Organization**: Grouping related tests and using descriptive names

### Assertion Libraries

#### Chai Assertions
```javascript
const { expect } = require('chai');

// Basic assertions
expect(value).to.equal(expected);
expect(array).to.include(item);
expect(object).to.have.property('key');
expect(function).to.throw(Error);
```

#### Node.js Assertions
```javascript
const assert = require('assert');

// Basic assertions
assert.strictEqual(actual, expected);
assert.deepStrictEqual(actual, expected);
assert.throws(() => function(), Error);
```

### Spies
Spies allow you to monitor function calls without changing their behavior.

```javascript
const sinon = require('sinon');

// Create a spy
const spy = sinon.spy(object, 'method');

// Check if spy was called
expect(spy.called).to.be.true;
expect(spy.calledWith(arg1, arg2)).to.be.true;
expect(spy.callCount).to.equal(3);

// Restore original function
spy.restore();
```

### Stubs
Stubs replace function implementations for testing.

```javascript
const sinon = require('sinon');

// Create a stub
const stub = sinon.stub(object, 'method').returns('mocked value');

// Stub with different return values
const stub = sinon.stub(object, 'method')
  .onFirstCall().returns('first')
  .onSecondCall().returns('second');

// Restore original function
stub.restore();
```

### Hooks
Hooks provide setup and teardown functionality.

```javascript
describe('Test Suite', () => {
  before(() => {
    // Runs once before all tests in this suite
  });

  after(() => {
    // Runs once after all tests in this suite
  });

  beforeEach(() => {
    // Runs before each test
  });

  afterEach(() => {
    // Runs after each test
  });
});
```

### Async Testing
Testing asynchronous functions with callbacks and promises.

```javascript
// With done callback
it('should handle async operations', (done) => {
  asyncFunction().then(result => {
    expect(result).to.equal(expected);
    done();
  }).catch(done);
});

// With promises
it('should handle async operations', () => {
  return asyncFunction().then(result => {
    expect(result).to.equal(expected);
  });
});

// With async/await
it('should handle async operations', async () => {
  const result = await asyncFunction();
  expect(result).to.equal(expected);
});
```

### Integration Testing
Testing with a real Express server.

```javascript
const request = require('request');
const expect = require('chai').expect;

describe('API Integration Tests', () => {
  it('should return correct response', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
```

## Development

### Scripts
- `npm run test *.test.js`: Run all tests
- `npm run test:coverage`: Run tests with coverage report
- `npm run test:watch`: Run tests in watch mode
- `npm run lint`: Run ESLint for code quality

### Dependencies
- **mocha**: JavaScript test framework
- **chai**: Assertion library
- **sinon**: Spies, stubs, and mocks library
- **request**: HTTP client for integration tests
- **eslint**: Code linting

### Configuration Files
- **.eslintrc.js**: ESLint configuration for code quality
- **package.json**: Project dependencies and scripts

## Best Practices

### Test Organization
- Group related tests using `describe` blocks
- Use descriptive test names that explain the expected behavior
- Keep tests independent and isolated
- Use hooks for common setup and teardown

### Assertions
- Use specific assertions that test exactly what you expect
- Avoid testing implementation details
- Test both positive and negative cases
- Use meaningful error messages

### Spies and Stubs
- Use spies to verify function calls without changing behavior
- Use stubs when you need to control function return values
- Always restore spies and stubs after tests
- Use the most specific spy/stub method for your needs

### Async Testing
- Always handle async operations properly
- Use `done` callback or return promises
- Test error conditions in async functions
- Use timeouts for long-running operations

## Troubleshooting

### Common Issues

1. **Tests Not Running**
   - Check file naming convention (`.test.js` suffix)
   - Verify Mocha is installed: `npm install mocha`
   - Check test script in package.json

2. **Spy/Stub Not Working**
   - Ensure sinon is imported: `const sinon = require('sinon')`
   - Check that you're spying/stubbing the correct object and method
   - Remember to restore spies/stubs after tests

3. **Async Test Failures**
   - Use `done` callback or return promises
   - Add proper error handling
   - Check for unhandled promise rejections

4. **Integration Test Issues**
   - Ensure the server is running before tests
   - Check server port and URL
   - Verify server response format

### Debug Mode
To debug tests, add console.log statements or use Node.js debugger:

```bash
node --inspect-brk ./node_modules/.bin/mocha test-file.test.js
```
