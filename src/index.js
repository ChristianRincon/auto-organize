import { organizeDirectory } from './organizer.js';
import { parseArgs } from './utils/parseArgs.js';
import { showHelp } from './utils/help.js';
import { getAvailableTypes } from './rules/byType.js';
import chalk from 'chalk';

function main() {
  const cliArguments = process.argv.slice(2);
  const cliFlags = parseArgs(cliArguments);
  const availableTypes = getAvailableTypes();

  if (cliFlags.help) {
    showHelp(availableTypes);
    return;
  }

  if (cliFlags.only && !availableTypes.includes(cliFlags.only)) {
    console.error(`\n${cliFlags.only} is not a valid type for --only`);
    console.error(`\nValid types: ${availableTypes.join(', ')}`);
    process.exit(1);
  }

  if (cliFlags.exclude && !availableTypes.includes(cliFlags.exclude)) {
    console.error(`\n${cliFlags.exclude} is not a valid type for --exclude`);
    console.error(`\nValid types: ${availableTypes.join(', ')}`);
    process.exit(1);
  }

  const currentDir = process.cwd();
  
  const scannedDirectoryText = 'SCANNED DIRECTORY';
  const scannedTextMargin = (currentDir.length - scannedDirectoryText.length) / 2;
  console.log(chalk.yellow("\n" + " ".repeat(scannedTextMargin + 2) + scannedDirectoryText + "\n"));
  console.log(chalk.yellow('o ') + currentDir + chalk.yellow(' o'));

  if (cliFlags.preview) {
    const previewModeText = 'PREVIEW MODE';
    const previewTextMargin = (scannedDirectoryText.length - previewModeText.length) / 2;
    console.log("\n" + " ".repeat(scannedTextMargin + previewTextMargin + 1) + chalk.blueBright(previewModeText));
  }

  organizeDirectory(currentDir, cliFlags);

  if(!cliFlags.preview){
    console.log('\nOrganization completed\n');
  }
}

main();
