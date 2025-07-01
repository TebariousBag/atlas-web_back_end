// need to import library
import { createClient, print } from 'redis';
// import promisify
import { promisify } from 'util';
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

async function displaySchoolValue(schoolName) {
  // this only works if i check for err
  // redis is always err, reply
  // when promisify it loses its connection to object, so we need to bind the client
  const get_client = promisify(client.get).bind(client);
  try {
	const promisified = await get_client(schoolName);
	console.log(promisified);
  } catch (err) {
	  console.log('Error:', err);
  }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
