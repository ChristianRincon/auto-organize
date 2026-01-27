import chalk from 'chalk';

function renderEmptyFolderText() {
  const emptyDirectoryText = 'NO FILES TO ORGANIZE';
  const emptyDirectoryTextMargin = 10;

  console.log("\n" + " ".repeat(emptyDirectoryTextMargin) + chalk.bgRed(" ".repeat(emptyDirectoryText.length + 2)));
  console.log(" ".repeat(emptyDirectoryTextMargin) + chalk.bgRed.whiteBright(" " +emptyDirectoryText+ " "));
  console.log(" ".repeat(emptyDirectoryTextMargin) + chalk.bgRed(" ".repeat(emptyDirectoryText.length + 2)) + "\n");
}

export { renderEmptyFolderText };