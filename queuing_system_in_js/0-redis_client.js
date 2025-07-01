// need to import library
import { createClient } from 'redis';
// create our client
const client = createClient();

// set up on, which listens, and then give a response
client.on('connect', () => {
  console.log('Redis client connected to the server');
});
// set up on, which listens, and then give a response
client.on('error', (err) => {
  console.log('Redis client not connected to the server: ', err);
});
