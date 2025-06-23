#!/usr/bin/node
// get http tools
const http = require('http');
// creating the server, request and respond
const app = http.createServer((req, res) => {
	// success response
	res.statusCode = 200;
	// tells it response is gonna be text
	res.setHeader('Content-Type', 'text/plain');
	// then we end response with our text
	res.end('Hello Atlas School')
});
// listen on port 1245
app.listen(1245);
// export app function
module.exports = app;
