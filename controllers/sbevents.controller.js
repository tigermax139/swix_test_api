const _ = require('lodash');
const SBServiceModule = require('../modules/sbevents.module')();

exports.getEvents = async function (req, res, next) {
    try {
        const resultStream = await SBServiceModule.getEventsJson({
            filtering: _(req.query).omit(['keywords']).keys().valueOf(),
            keywords: req.query.keywords,
            onlyEn: req.route.path.endsWith('en'),
        });
        resultStream.pipe(res);
    } catch (e) {
        next(e);
    }
};

