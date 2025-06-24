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

  
  // the first header row is firstName,lastname,age,field
  // that will be included in count, so we need to - 1
  const totalStudents = splitData.length - 1;
  console.log(`Number of students: ${totalStudents}`);

  const studInField = {};
  // loop through all split data, start at one to skip header
  for (let i = 1; i < splitData.length; i++) {
    // split at , and assign and trim data for each respectively
    const column = splitData[i].split(',');
    const firstName = column[0].trim();
    const field = column[3].trim();

    // if there is no field, then leave it blank
    if (!studInField[field]) {
      studInField[field] = [];
    }
    // push the name of student to the field
    studInField[field].push(firstName);
  }
  // respond with the message
  for (const field in studInField) {
    const students = studInField[field];
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
}

// remember to export the function
module.exports = countStudents;
