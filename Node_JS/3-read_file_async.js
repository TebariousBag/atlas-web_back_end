#!/usr/bin/node
// get filesystem functions
const fs = require('fs');

function countStudents(path) {
  // so we need to wrap in a promise
  return new Promise((resolve, reject) => {
    // we use readFile instead of readFileSync
    // if it fails we reject and return error
    fs.readFile(path, 'utf-8', (err, dataFromDb) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // from our data trim whitespace from beginning and end
      // split every time there is a newline character
      const splitData = dataFromDb.trim().split('\n');

      // the first header row is firstName,lastname,age,field
      // that will be included in count, so we need to - 1
      const totalStudents = splitData.length - 1;
      console.log(`Number of students: ${totalStudents}`);

      const studInField = {};
      // loop through all split data, start at one to skip header
      for (let i = 1; i < splitData.length; i += 1) {
        // split at , and assign and trim data for each respectively
        const column = splitData[i].split(',');
        const firstName = column[0].trim();
        const field = column[3].trim();

        if (!studInField[field]) {
          studInField[field] = [];
        }
        studInField[field].push(firstName);
      }
      // save to var so we can return in our resolve
      let result = `Number of students: ${totalStudents}`;
      // respond with the message
      for (const field in studInField) {
        if (Object.prototype.hasOwnProperty.call(studInField, field)) {
          const students = studInField[field];
          const line = `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
          console.log(line);
          result += `\n${line}`;
        }
      }

      // resolve after logging is complete
      // trim the result so i don't keep having extra lines
      resolve(result.trim());
    });
  });
}

// remember to export the function
module.exports = countStudents;
