// need to import library
import { createClient, print } from 'redis';
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
// hset format, name, field, and then the value
client.hset('HolbertonSchools', 'Portland', '50', print);
client.hset('HolbertonSchools', 'Seattle', '80', print);
// had to look up why New York was printed with quotes
// heget does that when there is a space or special char
client.hset('HolbertonSchools', 'New York', '20', print);
client.hset('HolbertonSchools', 'Bogota', '20', print);
client.hset('HolbertonSchools', 'Cali', '40', print);
client.hset('HolbertonSchools', 'Paris', '2', print);
// hget will retrieve all the fields and values from the hash
client.hgetall('HolbertonSchools', (err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log(result);
  }
});
