import path from 'path';
import { getFilesFromDirectory, ensureDirectoryExists, moveFile } from '../utils/fsHelpers.js';
import { getFolderNameByExtensionType } from '../rules/byType.js';
import { shouldSkipFile } from '../utils/filesFilters.js';

function organizeDirectory(baseDir, cliFlags = {}) {

  const files = getFilesFromDirectory(baseDir);

  const outputFoldersSummary = {};
  let folderByExtensionTypeCreated = false;

  files.forEach(file => {
    const fileExtension = path.extname(file.name);
    const folderNameByExtensionType = getFolderNameByExtensionType(fileExtension);

    if (shouldSkipFile(folderNameByExtensionType, cliFlags)) return;

    if (!outputFoldersSummary[folderNameByExtensionType]) {
      outputFoldersSummary[folderNameByExtensionType] = [];
    }

    outputFoldersSummary[folderNameByExtensionType].push(file.name);

    if (cliFlags.preview) return;

    const folderPathByExtensionType = path.join(baseDir, folderNameByExtensionType);
    const filePathByExtension = path.join(folderPathByExtensionType, file.name);
    const folderByExtensionTypeWasCreated = ensureDirectoryExists(folderPathByExtensionType);

    if (folderByExtensionTypeWasCreated) folderByExtensionTypeCreated = true;

    moveFile(file.path, filePathByExtension);
  });

  return {
    foldersByExtensionType: outputFoldersSummary,
    folderWasCreated: folderByExtensionTypeCreated,
    previewMode: cliFlags.preview,
  };
}

export { organizeDirectory };
