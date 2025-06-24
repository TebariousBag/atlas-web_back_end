#!/usr/bin/node
// get filesystem functions
const fs = require('fs');

function countStudents(path) {
  // if fails throw error
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  // read file from database.csv
  const dataFromDb = fs.readFileSync(path, 'utf-8');
  // from our data trim whitespace from beginning and end
  // split everytime there is a newline character
  const splitData = dataFromDb.trim().split('\n');

  // the first header row is firstname,lastname,age,field
  // that will be included in count, so we need to - 1
  const totalStudents = splitData.length - 1;
  console.log(`Number of students: ${totalStudents}`);
}


// remember to export the function
module.exports = countStudents;
