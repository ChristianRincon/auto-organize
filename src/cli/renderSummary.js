import chalk from 'chalk';

function renderFoldersSummary(summary) {
  const { foldersByExtensionType, folderWasCreated, previewMode } = summary;
  
  Object.entries(foldersByExtensionType).forEach(([folder, files]) => {
    console.log(`\n${chalk.green('o ')}${folder}/`);
    
    files.forEach(file => {
      const FILE_TAB = 4;
      const line = `${' '.repeat(FILE_TAB)}• ${file}`;
      
      if (previewMode) {
        console.log(chalk.blueBright(line));
      } else {
        console.log(chalk.greenBright(line));
      }
    });
  });

  if (folderWasCreated && !previewMode) {
    const foldersCreatedTab = 1;
    console.log(`\n${' '.repeat(foldersCreatedTab)} ${Object.keys(foldersByExtensionType).length} Folder(s) created`);
  }
}

export { renderFoldersSummary };
