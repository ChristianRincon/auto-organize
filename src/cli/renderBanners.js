import chalk from 'chalk';

function renderBanners(cliFlags) {
  const currentDir = process.cwd();

  const scannedDirectoryText = 'SCANNED DIRECTORY';
  const scannedTextMargin = (currentDir.length - scannedDirectoryText.length) / 2;

  console.log(chalk.yellow("\n" + " ".repeat(scannedTextMargin + 2) + scannedDirectoryText + "\n"));
  console.log(chalk.yellow("o".repeat(currentDir.length + 8)));
  console.log(chalk.yellow('|o- ') + currentDir + chalk.yellow(' -o|'));
  console.log(chalk.yellow("o".repeat(currentDir.length + 8)));

  if (cliFlags.preview) {
    const previewModeText = 'PREVIEW MODE';
    const previewTextMargin =
      (scannedDirectoryText.length - previewModeText.length) / 2;

    console.log("\n" + " ".repeat(scannedTextMargin + previewTextMargin + 1) + chalk.blueBright(previewModeText));
  }
}

export { renderBanners };
