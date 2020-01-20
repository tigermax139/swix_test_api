const express = require('express');
const validate = require('express-validation');

const rules = require('./validation/sbevents.validation');
const controller = require('../../controllers/sbevents.controller');

const router = new express.Router();

router.route('/')
    .get(validate(rules.getEventsSchema), controller.getEvents);

module.exports = router;