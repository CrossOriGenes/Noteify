const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const notesRouter = require('./routes/notes');
// const mysql = require("mysql");

const app = express();

const PORT = 8080;

dotenv.config({ path: './.env' });

app.use(bodyparser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.use('/notes', notesRouter);

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong.';
    res.status(status).json({ message: message });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});