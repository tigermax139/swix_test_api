require('dotenv').config();

const commonConfig = require('./env/common');
const development = require('./env/development.config');
const env = process.env.NODE_ENV || 'development';

const configMap = {
    development,
    test: development // TODO add test config
};

const config = Object.assign({},
    configMap[env],
    commonConfig,
    {
        isDev: env === 'development',
        inDebug: process.env.DEBUG !== undefined
    });

Object.entries(config).forEach( ([key, value]) => {
    if (value === undefined) {
        throw new Error(`Missed field ${key} in config for ${env} environment`);
    }
});

module.exports = config;
