#!/usr/bin/node
// import express module
const express = require('express');
// create our server as app
const app = express();
// when accessing url "/"
// req responds with  a message
app.get('/', (req, res) => {
  res.send('Hello Atlas School!');
});
// our listening port
app.listen(1245);
// always export
module.exports = app;
