const path = require('path');
const getAllFiles = require('../utils/getAllFiles');

module.exports = client => {
    getAllFiles(path.join(__dirname, '..', 'events'), true).forEach(eventFolder => {
        const eventFiles = getAllFiles(eventFolder).sort();
        const eventName = path.basename(eventFolder);

        client.on(eventName, arg => eventFiles.forEach(async eventFile => await require(eventFile)(client, arg)));
    });
};