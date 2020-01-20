const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const v1Routes = require('./routes/v1');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1', v1Routes);

module.exports = app;
/*
* TODO compression
* TODO joi // request validation
* TODO pino   //  better logger
* TODO node-fetch // server side request
* TODO xml2json parser
* TODO configure .env
*  ---
* TODO add swix service
* TODO add controller
* TODO add swagger playground?
* */
