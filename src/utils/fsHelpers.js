import fs from 'fs';
import path from 'path';

function getFilesFromDirectory(dirPath) {
  const dirPathList = fs.readdirSync(dirPath);

  return dirPathList
    .map(dirPathItemName => {
      const fullPath = path.join(dirPath, dirPathItemName);
      const stats = fs.statSync(fullPath);

      return {
        name: dirPathItemName,
        path: fullPath,
        isFile: stats.isFile()
      };
    })
    .filter(dirPathItemName => dirPathItemName.isFile);
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    return true;
  }
  return false;
}

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function moveFile(sourcePath, targetPath) {
  fs.renameSync(sourcePath, targetPath);
}

export { getFilesFromDirectory, ensureDirectoryExists, fileExists, moveFile };