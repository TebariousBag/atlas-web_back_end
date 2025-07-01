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

// had to import print from redis
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
}

function displaySchoolValue(schoolName) {
  // this only works if i check for err
  // redis is always err, reply
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.log('Error:', err);
      return;
    }
    console.log(reply); // This logs the value when it's available
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
