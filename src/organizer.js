const path = require('path');
const {
  getFilesFromDirectory,
  ensureDirectoryExists,
  moveFile
} = require('./utils/fsHelpers');

const { getFolderByExtension } = require('./rules/byType');

function organizeDirectory(baseDir) {
  const files = getFilesFromDirectory(baseDir);

  files.forEach(file => {
    const extension = path.extname(file.name);
    const targetFolderName = getFolderByExtension(extension);
    const targetFolderPath = path.join(baseDir, targetFolderName);
    const targetFilePath = path.join(targetFolderPath, file.name);

    const createdFolder = ensureDirectoryExists(targetFolderPath);

    if (createdFolder) {
      console.log(`\nCarpeta creada: ${targetFolderName}/`);
    }

    if (file.path === targetFilePath) return;

    moveFile(file.path, targetFilePath);
    console.log(`${file.name} -> ${targetFolderName}/`);
  });
}

module.exports = { organizeDirectory };
