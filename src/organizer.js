import path from 'path';
import { getFilesFromDirectory, ensureDirectoryExists, moveFile } from './utils/fsHelpers.js';
import { getFolderByExtension } from './rules/byType.js';
import chalk from 'chalk';

function organizeDirectory(baseDir, options = {}) {
  const { dryRun, only, exclude } = options;

  const files = getFilesFromDirectory(baseDir);

  const filesSummary = {};

  files.forEach(file => {
    const extension = path.extname(file.name);
    const folderByExtension = getFolderByExtension(extension);
    const folderLower = folderByExtension.toLowerCase();

    if (only && folderLower !== only) return;
    if (exclude && folderLower === exclude) return;
    
    if (!filesSummary[folderByExtension]) {
      filesSummary[folderByExtension] = [];
    }

    filesSummary[folderByExtension].push(file.name);
    
    if (dryRun) return;
    
    const targetFolderPath = path.join(baseDir, folderByExtension);
    const targetFilePath = path.join(targetFolderPath, file.name);
    const createdFolder = ensureDirectoryExists(targetFolderPath);

    if (createdFolder) {
      console.log(chalk.blue(`\nFolder created: ${folderByExtension}/`));
    }

    moveFile(file.path, targetFilePath);
  });
  
  console.log('');

  Object.entries(filesSummary).forEach(([folder, files]) => {
    console.log(`${folder}/`);

    files.forEach(file => {
      const FILE_TAB = 2;
      console.log(chalk.green(`${" ".repeat(FILE_TAB)}${file}`));
    });

    console.log('');
  });
}

export { organizeDirectory };
