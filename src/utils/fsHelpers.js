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
        isFile: stats.isFile()
      };
    })
    .filter(item => item.isFile);
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    return true;
  }
  return false;
}

function moveFile(sourcePath, targetPath) {
  fs.renameSync(sourcePath, targetPath);
}

module.exports = {
  getFilesFromDirectory,
  ensureDirectoryExists,
  moveFile
};
