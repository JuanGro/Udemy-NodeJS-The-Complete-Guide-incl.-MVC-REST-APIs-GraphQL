const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Add Product Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);