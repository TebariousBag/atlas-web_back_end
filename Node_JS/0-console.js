#!/usr/bin/node


function displayMessage(theMessage) {
	// to standard output
	// console.log is stdout with newline
	process.stdout.write(theMessage);

}

	module.exports = displayMessage;
