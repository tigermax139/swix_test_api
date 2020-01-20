exports.getEvents = async function (req, res, next) {
    try {
        // TODO service call here
        res.json({
            'hello': 'world'
        });
        next();
    } catch (e) {
        next(e);
    }
};