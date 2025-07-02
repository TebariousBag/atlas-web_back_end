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

function publishMessage(message, time) {
    setTimeout(() => {
        console.log(`About to send ${message}`);
        clientApp.publish('holberton school channel', message);
    }, time);
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
