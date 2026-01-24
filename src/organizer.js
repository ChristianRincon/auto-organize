import path from 'path';
import { getFilesFromDirectory, ensureDirectoryExists, moveFile } from './utils/fsHelpers.js';
import { getFolderNameByExtension } from './rules/byType.js';
import chalk from 'chalk';

function organizeDirectory(baseDir, cliFlags = {}) {
  const { preview, only, exclude } = cliFlags;

  const files = getFilesFromDirectory(baseDir);

  const filesSummary = {};
  let createdFolder = false;

  files.forEach(file => {
    const extension = path.extname(file.name);
    const folderByExtension = getFolderNameByExtension(extension);
    const folderLower = folderByExtension.toLowerCase();

    if (only && folderLower !== only) return;
    if (exclude && folderLower === exclude) return;
    
    if (!filesSummary[folderByExtension]) {
      filesSummary[folderByExtension] = [];
    }

    filesSummary[folderByExtension].push(file.name);
    
    if (preview) return;
    
    const targetFolderPath = path.join(baseDir, folderByExtension);
    const targetFilePath = path.join(targetFolderPath, file.name);
    createdFolder = ensureDirectoryExists(targetFolderPath);

    moveFile(file.path, targetFilePath);
  });
  
  if (createdFolder) {
    console.log(`\nFolder(s) created`);
  }

  Object.entries(filesSummary).forEach(([folder, files]) => {
    console.log(`\n${folder}/`);

    files.forEach(file => {
      const FILE_TAB = 2;
      const fileName = `${" ".repeat(FILE_TAB)}${file}`;
      if(preview){
        console.log(chalk.blueBright(fileName));
      }else{
        console.log(chalk.green(fileName));
      }
    });


  });
}

export { organizeDirectory };
