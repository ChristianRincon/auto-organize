import chalk from 'chalk';

function renderFoldersSummary(summary) {
  const { foldersByExtensionType, folderWasCreated, previewMode } = summary;
  
  Object.entries(foldersByExtensionType).forEach(([folder, files]) => {
    if (previewMode) {
      console.log(`\n${chalk.blueBright('o ')}${folder}/`);
    }else{
      console.log(`\n${chalk.green('o ')}${folder}/`);
    }
    
    files.forEach(file => {
      const FILE_TAB = 4;
      const fileName = `${' '.repeat(FILE_TAB)}• ${file}`;
      
      if (previewMode) {
        console.log(chalk.blueBright(fileName));
      } else {
        console.log(chalk.greenBright(fileName));
      }
    });
  });

  if (folderWasCreated && !previewMode) {
    const foldersCreatedTab = 1;
    console.log(`\n${' '.repeat(foldersCreatedTab)} ${Object.keys(foldersByExtensionType).length} Folder(s) created\n`);
  }
}

export { renderFoldersSummary };
