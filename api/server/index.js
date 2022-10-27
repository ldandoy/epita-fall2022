require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(morgan('combined'));
app.use(helmet());

app.get('/', (request, response) => {
    response.status(200).send('Hello Loïc !');
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server Running on http://localhost:${process.env.APP_PORT}`);
});