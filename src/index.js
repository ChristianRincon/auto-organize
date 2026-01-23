import { organizeDirectory } from './organizer.js';
import { parseArgs } from './utils/parseArgs.js';
import { showHelp } from './utils/help.js';
import { getAvailableTypes } from './rules/byType.js';
import chalk from 'chalk';

function main() {
  const args = process.argv.slice(2);
  const options = parseArgs(args);
  const availableTypes = getAvailableTypes();

  if (options.help) {
    showHelp(availableTypes);
    return;
  }

  if (options.only && !availableTypes.includes(options.only)) {
    console.error(`\n${options.only} is not a valid type for --only`);
    console.error(`\nValid types: ${availableTypes.join(', ')}`);
    process.exit(1);
  }

  if (options.exclude && !availableTypes.includes(options.exclude)) {
    console.error(`\n${options.exclude} is not a valid type for --exclude`);
    console.error(`\nValid types: ${availableTypes.join(', ')}`);
    process.exit(1);
  }

  const currentDir = process.cwd();
  
  const scannedText = 'SCANNED DIRECTORY';
  const scannedTextMargin = (currentDir.length - scannedText.length) / 2;
  console.log(chalk.yellow("\n" + " ".repeat(scannedTextMargin + 2) + scannedText + "\n"));
  console.log(chalk.yellow('o ') + currentDir + chalk.yellow(' o'));

  if (options.dryRun) {
    console.log("\n" + chalk.blueBright("o DRY-RUN MODE ENABLED"));
  }

  organizeDirectory(currentDir, options);

  if(!options.dryRun){
    console.log(chalk.green('\nOrganization completed\n'));
  }
}

main();
