#!/usr/bin/node
// get filesystem functions
const fs = require('fs');

function countStudents(path) {
  // read sycnchnously
  // save to variable so we can log it
  const data = fs.readFileSync(path);
  console.log(data);
}

// remember to export the function
module.exports = countStudents
