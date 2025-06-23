#!/usr/bin/node
// get filesystem functions
const fs = require('fs');

function countStudents(path) {
  try {
  // read sycnchnously
  // save to variable so we can log it
    const data = fs.readFileSync(path, 'utf-8');
    console.log(data);

  // catching case of error,
  } catch (err) {
    // If reading fails, throw custom error
    throw new Error('Cannot load the database');
  }
}

// remember to export the function
module.exports = countStudents;
