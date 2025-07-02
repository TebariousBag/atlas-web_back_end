# Queueing System in JS

A comprehensive Node.js project demonstrating Redis operations, queue management with Kue, and building Express applications with Redis integration.

## Learning Objectives

At the end of this project, you will be able to explain to anyone, without the help of Google:

- **How to run a Redis server on your machine**
- **How to run simple operations with the Redis client**
- **How to use a Redis client with Node JS for basic operations**
- **How to store hash values in Redis**
- **How to deal with async operations with Redis**
- **How to use Kue as a queue system**
- **How to build a basic Express app interacting with a Redis server**
- **How to build a basic Express app interacting with a Redis server and queue**

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 12.x or higher)
- **Redis** (version 5.0.7 or higher)
- **npm** (Node Package Manager)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd queuing_system_in_js
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start Redis server:**
   ```bash
   redis-server
   ```

### Running Individual Scripts

Each script can be run using the npm dev script:

```bash
npm run dev <filename>
```

For example:
```bash
npm run dev 0-redis_client.js
```

### Redis Operations

#### Basic Redis Client (0-redis_client.js)
Demonstrates basic Redis client connection and error handling.

#### Simple Operations (1-redis_op.js)
Shows basic Redis operations like SET, GET, and DEL.

#### Async Operations (2-redis_op_async.js)
Demonstrates asynchronous Redis operations using promises.

#### Advanced Operations (4-redis_advanced_op.js)
Covers advanced Redis operations including hash operations.

### Pub/Sub System

#### Publisher (5-publisher.js)
Creates a Redis publisher that sends messages to a channel.

#### Subscriber (5-subscriber.js)
Creates a Redis subscriber that listens to messages from a channel.

To test pub/sub:
1. Start the subscriber: `npm run dev 5-subscriber.js`
2. In another terminal, start the publisher: `npm run dev 5-publisher.js`

### Queue System with Kue

#### Basic Job System (6-job_creator.js & 6-job_processor.js)
Demonstrates basic job creation and processing with Kue.

To test:
1. Start the processor: `npm run dev 6-job_processor.js`
2. In another terminal, start the creator: `npm run dev 6-job_creator.js`

#### Advanced Job System (7-job_creator.js & 7-job_processor.js)
Shows advanced job processing with blacklist functionality.

To test:
1. Start the processor: `npm run dev 7-job_processor.js`
2. In another terminal, start the creator: `npm run dev 7-job_creator.js`

#### Modular Job System (8-job.js & 8-job-main.js)
Demonstrates modular job creation with proper error handling.

To test:
```bash
npm run dev 8-job-main.js
```

## Key Concepts Covered

### Redis Operations
- **Connection Management**: Establishing and managing Redis client connections
- **Basic Commands**: SET, GET, DEL, EXISTS
- **Hash Operations**: HSET, HGET, HGETALL
- **Async Handling**: Working with Redis operations asynchronously
- **Error Handling**: Proper error handling for Redis operations

### Pub/Sub Pattern
- **Publishers**: Creating and sending messages to Redis channels
- **Subscribers**: Listening and responding to messages from channels
- **Real-time Communication**: Building real-time communication systems

### Queue Management with Kue
- **Job Creation**: Creating jobs with data and metadata
- **Job Processing**: Processing jobs with concurrency control
- **Event Handling**: Listening to job events (complete, failed, progress)
- **Error Handling**: Managing job failures and retries
- **Blacklisting**: Implementing job filtering and blacklisting

### Express Integration
- **Redis Integration**: Using Redis with Express applications
- **Queue Integration**: Integrating Kue queues with Express
- **Modular Design**: Building reusable job creation functions

## Development

### Scripts
- `npm run dev <filename>`: Run a specific file with nodemon and babel
- `npm start`: Start the application (if configured)

### Dependencies
- **kue**: Queue management system
- **redis**: Redis client for Node.js
- **@babel/core**: Babel core for ES6+ support
- **@babel/node**: Babel Node.js runner
- **@babel/preset-env**: Babel preset for environment
- **nodemon**: Development server with auto-restart

## Troubleshooting

### Common Issues

1. **Redis Connection Error**
   - Ensure Redis server is running: `redis-server`
   - Check Redis port (default: 6379)

2. **Module Not Found Errors**
   - Run `npm install` to install dependencies
   - Check file paths and import statements

3. **Babel Configuration Issues**
   - Ensure `.babelrc` is properly configured
   - Check babel dependencies are installed

### Debug Mode
To run in debug mode, add console.log statements or use Node.js debugger:

```bash
node --inspect-brk -r @babel/register <filename>
```
