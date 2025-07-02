// import client from redis
import { createClient } from 'redis';
// create the client
const clientApp = createClient();

// listen and response
clientApp.on('connect', () => {
	console.log('Redis client connected to the server')
});
// listen, on error res with message
clientApp.on('error', (err) => {
  console.log('Redis client not connected to the server: ERROR MESSAGE')
});
// subscribe to channel to receive messages on publish
clientApp.subscribe('holberton school channel');

clientApp.on('message', (channel, message) => {
  console.log(message);
  // if kill server, then unsubscribe to the channel and quit
  if (message === 'KILL_SERVER') {
    clientApp.unsubscribe();
    clientApp.quit();
  }
});
