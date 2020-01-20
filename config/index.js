require('dotenv').config();

const development = require('./env/development.config');
const env = process.env.NODE_ENV || 'development';

const config = {
    development,
    test: development // TODO add test config
};

module.exports = config[env];
