# Node Express

A comprehensive Node.js project demonstrating Express.js web development, HTTP servers, routing, ES6 features, and modern development tools including Babel, Nodemon, Jest, and ESLint.

## Learning Objectives

At the end of this project, you will be able to explain to anyone, without the help of Google:

- **Run javascript using NodeJS**
- **Use NodeJS modules**
- **Use specific Node JS module to read files**
- **Use process to access command line arguments and the environment**
- **Create a small HTTP server using Node JS**
- **Create a small HTTP server using Express JS**
- **Create advanced routes with Express JS**
- **Use ES6 with Node JS with Babel-node**
- **Use Nodemon to develop faster**

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 12.x.x)
- **npm** (Node Package Manager)
- **Git** (for version control)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd node_express
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   node --version  # Should show v12.x.x
   npm --version   # Should show latest npm version
   ```

## Usage

### Running Scripts

#### Run with Node.js:
```bash
node 0-calculator.js
```

#### Run with Babel (ES6 support):
```bash
npx babel-node 0-calculator.js
```

#### Run with Nodemon (development):
```bash
npm run dev 0-calculator.js
```

### Testing

#### Run all tests:
```bash
npm run test
```

#### Run specific test file:
```bash
npm test 0-calculator.test.js
```

#### Run tests with coverage:
```bash
npm run test:coverage
```

#### Run tests in watch mode:
```bash
npm run test:watch
```

### Linting

#### Run ESLint:
```bash
npm run lint
```

#### Fix ESLint issues automatically:
```bash
npm run lint:fix
```

#### Run full test suite (tests + lint):
```bash
npm run full-test
```

### Development Server

#### Start HTTP server:
```bash
node 4-http_basic.js
```

#### Start Express server:
```bash
node 6-http_express.js
```

## Key Concepts Covered

### Node.js Fundamentals

#### Running JavaScript with Node.js
```javascript
// 0-calculator.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
```

#### Using Node.js Modules
```javascript
// Using built-in modules
const fs = require('fs');
const path = require('path');
const http = require('http');

// Using custom modules
const calculator = require('./0-calculator');
```

#### File System Operations
```javascript
const fs = require('fs');

// Synchronous file reading
const data = fs.readFileSync('file.txt', 'utf8');

// Asynchronous file reading
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Using promises
const fsPromises = require('fs').promises;
const data = await fsPromises.readFile('file.txt', 'utf8');
```

#### Process and Environment
```javascript
// Access command line arguments
const args = process.argv.slice(2);

// Access environment variables
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';

// Exit process
process.exit(0);
```

### HTTP Servers

#### Basic HTTP Server with Node.js
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

#### Express.js Server
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000/');
});
```

### Advanced Express Routing

#### Basic Routes
```javascript
app.get('/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/users', (req, res) => {
  res.status(201).json({ message: 'User created' });
});

app.put('/users/:id', (req, res) => {
  res.json({ message: 'User updated' });
});

app.delete('/users/:id', (req, res) => {
  res.json({ message: 'User deleted' });
});
```

#### Route Parameters
```javascript
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId });
});
```

#### Query Parameters
```javascript
app.get('/search', (req, res) => {
  const query = req.query.q;
  const page = req.query.page || 1;
  res.json({ query, page });
});
```

#### Middleware
```javascript
// Custom middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

### ES6 Features with Babel

#### Arrow Functions
```javascript
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
```

#### Destructuring
```javascript
const { add, subtract } = require('./calculator');
const [first, second] = [1, 2];
```

#### Template Literals
```javascript
const name = 'World';
const greeting = `Hello, ${name}!`;
```

#### Async/Await
```javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

#### Classes
```javascript
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}

module.exports = Calculator;
```

## Development Tools

### Nodemon
Automatically restarts the server when files change.

```json
{
  "scripts": {
    "dev": "nodemon --exec babel-node"
  }
}
```

### Babel Configuration
```json
{
  "presets": ["@babel/preset-env"]
}
```

### Jest Testing
```javascript
// 0-calculator.test.js
const { add, subtract } = require('./0-calculator');

describe('Calculator', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
```

### ESLint Configuration
```javascript
// .eslintrc.js
module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
};
```

## API Examples

### RESTful API
```javascript
// 7-api.js
const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// GET /users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users
app.post('/users', (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.status(201).json(user);
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});
```

## Development

### Scripts
- `npm run dev <filename>`: Run file with nodemon and babel-node
- `npm test`: Run Jest tests
- `npm run test:coverage`: Run tests with coverage
- `npm run test:watch`: Run tests in watch mode
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Fix ESLint issues automatically
- `npm run full-test`: Run tests and lint

### Dependencies
- **express**: Web framework for Node.js
- **@babel/core**: Babel core for ES6+ support
- **@babel/node**: Babel Node.js runner
- **@babel/preset-env**: Babel preset for environment
- **nodemon**: Development server with auto-restart
- **jest**: JavaScript testing framework
- **eslint**: Code linting

### Configuration Files
- **.eslintrc.js**: ESLint configuration
- **.babelrc**: Babel configuration
- **jest.config.js**: Jest configuration
- **package.json**: Project dependencies and scripts

## Best Practices

### Code Organization
- Use descriptive function and variable names
- Follow the single responsibility principle
- Organize code into modules
- Use proper error handling

### Testing
- Write tests for all functions
- Use descriptive test names
- Test both positive and negative cases
- Maintain good test coverage

### Error Handling
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
```

### Security
- Validate input data
- Use HTTPS in production
- Implement proper authentication
- Sanitize user inputs

## Troubleshooting

### Common Issues

1. **Module Not Found**
   - Check file paths and require statements
   - Ensure all dependencies are installed
   - Verify module.exports format

2. **Babel Configuration Issues**
   - Check .babelrc configuration
   - Ensure babel dependencies are installed
   - Verify preset configuration

3. **ESLint Errors**
   - Run `npm run lint:fix` to auto-fix issues
   - Check ESLint configuration
   - Ensure code follows style guidelines

4. **Test Failures**
   - Check test file naming (.test.js suffix)
   - Verify Jest configuration
   - Ensure all functions are properly exported

### Debug Mode
To debug Node.js applications:

```bash
node --inspect-brk app.js
```