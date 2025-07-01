const express = require('express');
// create express server
const app = express();
// the port
const PORT = 7865;
// need to use import json
app.use(express.json());

// welcome message response
app.get('/', (req, res) => {
	res.send('Welcome to the payment system')
});
// cart/id endpoint, it has to be a digit, using regex for it
app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});
// get available_payments path
app.get('/available_payments', (req, res) => {
    const pay = {
  payment_methods: {
    credit_cards: true,
    paypal: false
    }
    };
    // forgot to send a response
    res.json(pay)
});
// post path /login
app.post('/login', (req, res) => {
    // usernam is the value from body
    const { userName } = req.body;
    res.send(`Welcome ${userName}`);
});
// send to log the port message
app.listen(PORT, () => {
    console.log('API available on localhost port 7865')
});

module.exports = app;
