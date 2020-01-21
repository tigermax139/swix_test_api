const Joi = require('joi');
const { filterTypes} = require('../../../config/constants');

exports.getEventsSchema = {
    query: {
        [filterTypes.AND]: Joi.string().valid('true').optional(),
        [filterTypes.LIVE]: Joi.string().valid('true').optional(),
        [filterTypes.STARTED]: Joi.string().valid('true').optional(),
        keywords: Joi.string().required(),
    },
    options: {
        allowUnknownQuery: false,
    },
};