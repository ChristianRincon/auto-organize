const fs = require('fs');
const path = require('path');

function getFilesFromDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);

    return items
        .map(item => {
            const fullPath = path.join(dirPath, item);
            const stats = fs.statSync(fullPath);

            return {
                name: item,
                path: fullPath,
                isFile: stats.isFile(),
                isDirectory: stats.isDirectory()
            };
        })
        .filter(item => item.isFile);
}

module.exports = { getFilesFromDirectory };
