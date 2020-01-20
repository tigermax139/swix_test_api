const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const logger = require('morgan');

const v1Routes = require('../routes/v1');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

app.use('/v1', v1Routes);

module.exports = app;
/*
* TODO add swix service
* TODO add parcer module
* TODO add controller
* TODO add swagger playground?
* */
