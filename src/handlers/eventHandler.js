const path = require('path');
const getAllFiles = require('../utils/getAllFiles.js');

module.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);

    console.log(eventFolders);
}