const express = require('express');
// create express server
const app = express();
// the port
const PORT = 7865;
// welcome message response
app.get('/', (req, res) => {
	res.send('Welcome to the payment system')
});
// cart/id endpoint, it has to be a digit, using regex for it
app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});
// send to log the port message
app.listen(PORT, () => {
    console.log('API available on localhost port 7865')
});
