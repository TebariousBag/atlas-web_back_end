#!/usr/bin/node
// get filesystem functions
const fs = require('fs');

function countStudents(path) {
  // read sycnchnously
  fs.readFileSync(path)
}
