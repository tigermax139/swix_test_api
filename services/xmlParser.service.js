// XML parser module
const parserLib = require('xml-to-json-stream');

class XML2JSParser {
    constructor() {
        this._parser = parserLib;
    }
    async parseString(xmlString) {
        return new Promise((resolve, reject) => {
            this._parser(xmlString, (err, json) => {
                if (err) {
                    return reject(err);
                }
                resolve(json);
            })
        });
    }
    getStream() {
        return this._parser().createStream();
    }
}

module.exports = XML2JSParser;

