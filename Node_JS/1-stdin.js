#!/usr/bin/node

// output question, Atlas instead of Holberton
process.stdout.write('Welcome to Atlas School, what is your name?\n');
// ask for input, of name
process.stdin.on('data', (data) => {
  // need to convert data to string format
  const name = data.toString();
  // output message
  process.stdout.write(`Your name is: ${name}`);
  // console.log to stdout with newline
  console.log('This important software is now closing');
  process.exit();
});
