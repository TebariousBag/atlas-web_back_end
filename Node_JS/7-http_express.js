#!/usr/bin/node
// import express tools and file system tools
const express = require('express');
const countStudents = require('./3-read_file_async');
// our port
const port = 1245;
// and create our app
const app = express();
// our db data is in index 2 of the process received
const db = process.argv[2];
// just to log in to console that server is running
// i was watching tutorial videos
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello Atlas School!');
});

studs = countStudents(db)
// get request when some visits /students
app.get('/students', (req, res) => {
  // call function from 3-readfile
  countStudents(db)
    // then wait for it to resolve and pass it to studs
    .then((studs) => {
      // they will receive plain text
      res.type('text/plain');
      // and we will send the stud data back to user
      res.send(`This is the list of our students\n${studs}`);
    })
});
