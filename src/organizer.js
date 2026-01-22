const path = require('path');
const { getFilesFromDirectory, ensureDirectoryExists, moveFile } = require('./utils/fsHelpers');
const { getFolderByExtension } = require('./rules/byType');

function organizeDirectory(baseDir, options = {}) {
  const { dryRun, only, exclude } = options;

  const files = getFilesFromDirectory(baseDir);

  files.forEach(file => {
    const extension = path.extname(file.name);
    const folderByExtension = getFolderByExtension(extension);
    const folderLower = folderByExtension.toLowerCase();

    if (only && folderLower !== only) return;
    if (exclude && folderLower === exclude) return;

    const targetFolderPath = path.join(baseDir, folderByExtension);
    const targetFilePath = path.join(targetFolderPath, file.name);

    if (dryRun) {
      console.log(`${file.name} -> ${folderByExtension}/`);
      return;
    }

    const createdFolder = ensureDirectoryExists(targetFolderPath);
    if (createdFolder) console.log(`\nFolder created: ${folderByExtension}/`);

    moveFile(file.path, targetFilePath);
    console.log(`${file.name} -> ${folderByExtension}/`);
  });
}

module.exports = { organizeDirectory };
