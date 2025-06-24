#!/usr/bin/node
// import express tools and file system tools
const express = require('express');
const fs = require('fs');
// our port
const port = 1245;
// and create our app
const app = express();

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello Atlas School');
});

const studs = fs.readFileSync('database.csv', 'utf-8');
app.get('/students', (req, res) => {
  res.send(`This is the list of our students\n ${studs}`);
});
