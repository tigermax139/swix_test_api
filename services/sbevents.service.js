// Sb events service
const http = require('http'); // Use build-in Node.js libraries for easier way to receive stream from response
const https = require('https');

const debug = require('debug');

const config = require('../config');
const constants = require('../config/constants');

class SBEventsClient {
    constructor() {
        this.filterTypes = Object.values(constants.filterTypes);
        this.debug = debug('sbevents:client');
        this.request = config.SBEVENTS_API.startsWith('https') ? https : http;
    }

    getUrl({onlyEn, filtering, keywords}) {
        if (filtering === undefined) {
            filtering = [];
        }
        this.debug('getUrl', {onlyEn, filtering});
        const baseUrl = onlyEn ? config.SBEVENTS_API : config.SBEVENTS_API + 'en';
        const queryString =
            '?key=' + config.SBEVENTS_API_KEY +
            '&keywords=' + keywords +
            '&' + filtering
                .filter(i => this.filterTypes.includes(i))
                .map(i => (i + '=true'))
                .join('&');

        return baseUrl + queryString;
    }

    requestEvents(params) {
        this.debug('requestEvents:start', {params});
        const url = this.getUrl(params);
        this.debug('requestEvents url', url);
        return new Promise((resolve, reject) => {
            this.request
                .get(url, resolve)
                .on('error', reject)
        });
    }
}

exports.SBEventsClient = SBEventsClient;

class SBEventsService {
    constructor({Client, Parser}) {
        this.client = new Client();
        this.parser = new Parser();
        this.debug = debug('sbevents:service');
    }

    async getEventsJson(params) {
        this.debug = debug('getEventsJson');
        const xmlStream = await this.client.requestEvents(params);
        this.debug = debug('getEventsJson length', xmlStream.length);
        return xmlStream.pipe(this.parser.getStream()); // return stream
    }

}

exports.SBEventsService = SBEventsService;