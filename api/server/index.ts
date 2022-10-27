require('dotenv').config();
// const express = require('express');
import express, {Request, Response} from 'express'
import authRouter from './routes/auth'

const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(express.json());

app.get('/', (request: Request, response: Response): void => {
    response.status(200).send('Hello Loïc !');
});

app.use('/auth', authRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server Running on http://localhost:${process.env.APP_PORT}`);
});