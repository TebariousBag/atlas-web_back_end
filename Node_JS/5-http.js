#!/usr/bin/node

const http = require('http');

const port = 1245;
// import from our file 3
const countStudents = require('./3-read_file_async');
// db must be passed as arg, index 2 is first actual arg
const db = process.argv[2];

// create our server, we want plain text
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Atlas School!');
  } else if (req.url === '/students') {
    countStudents(db)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      });
  }
});
// defined port above
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

// always export
module.exports = app;
