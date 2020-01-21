const express = require('express');
const sbEventsRoute = require('./sbevents.route');

const v1Routes = express();

v1Routes.use('/', sbEventsRoute);

module.exports = v1Routes;