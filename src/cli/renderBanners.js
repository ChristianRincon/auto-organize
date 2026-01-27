import chalk from 'chalk';

function renderBanners(cliFlags) {
  const currentDir = process.cwd();

  const scannedDirectoryText = 'SCANNED DIRECTORY';
  let textMargin = 0;

  if(currentDir.length > scannedDirectoryText.length){
    textMargin = (currentDir.length - scannedDirectoryText.length) / 2 + 2;
  }

  console.log(chalk.yellow("\n" + " ".repeat(textMargin) + scannedDirectoryText + "\n"));
  console.log(chalk.yellow('* ') + currentDir + chalk.yellow(' *'));

  if (cliFlags.preview) {
    const previewModeText = 'PREVIEW MODE';
    console.log("\n" + " ".repeat(textMargin) + chalk.blueBright(previewModeText));
  }
}

export { renderBanners };
