const { SBEventsClient, SBEventsService } = require('../services/sbevents.service');
const xml2JSParser = require('../services/xmlParser.service');

module.exports = () => new SBEventsService({
    Client: SBEventsClient,
    Parser: xml2JSParser
});