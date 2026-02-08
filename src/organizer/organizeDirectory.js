import path from 'path';
import { getFilesFromDirectory, ensureDirectoryExists, fileExists, moveFile } from '../utils/fsHelpers.js';
import { getFolderNameByExtensionType } from '../rules/byType.js';
import { shouldSkipFile } from '../utils/filesFilters.js';
import chalk from 'chalk';

function organizeDirectory(baseDir, cliFlags = {}) {
  
  let validFilesFound = false;

  try{
    const files = getFilesFromDirectory(baseDir);
    const noFilesFound = files.length === 0;

    if(noFilesFound){
      return{
        isEmpty: true
      }
    }

    const outputFoldersSummary = {};
    let folderByExtensionTypeCreated = false;

    files.forEach(file => {
      const fileExtension = path.extname(file.name);
      const folderNameByExtensionType = getFolderNameByExtensionType(fileExtension);

      if (!folderNameByExtensionType) return;

      if (shouldSkipFile(folderNameByExtensionType, cliFlags)) return;

      validFilesFound = true;

      if (!outputFoldersSummary[folderNameByExtensionType]) {
        outputFoldersSummary[folderNameByExtensionType] = [];
      }

      outputFoldersSummary[folderNameByExtensionType].push(file.name);

      if (cliFlags.preview) return;

      const folderPathByExtensionType = path.join(baseDir, folderNameByExtensionType);
      const filePathByExtension = path.join(folderPathByExtensionType, file.name);
      const folderByExtensionTypeWasCreated = ensureDirectoryExists(folderPathByExtensionType);

      if (folderByExtensionTypeWasCreated) folderByExtensionTypeCreated = true;

      if (fileExists(filePathByExtension)){
        throw new Error(`File collision detected: "${chalk.red(file.name)}" already exists in "${chalk.blueBright(folderNameByExtensionType)}/"`);
      }

      moveFile(file.path, filePathByExtension);

    });

    return{
      foldersByExtensionType: outputFoldersSummary,
      folderWasCreated: folderByExtensionTypeCreated,
      previewMode: cliFlags.preview,
      isEmpty: !validFilesFound
    };
  } 
  catch(error){
    throw new Error(`Error organizing directory: ${error.message}`);
  }
}

export { organizeDirectory };
