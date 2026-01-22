const { organizeDirectory } = require('./organizer');
const { parseArgs } = require('./utils/parseArgs');
const { showHelp } = require('./utils/help');
const { getAvailableTypes } = require('./rules/byType');

function main() {
  const args = process.argv.slice(2);
  const options = parseArgs(args);

  if (options.help) {
    showHelp(getAvailableTypes());
    return;
  }

  const currentDir = process.cwd();

  console.log('\n| Directorio analizado |');
  console.log("-".repeat(currentDir.length + 2));
  console.log('|' + currentDir + '|');
  console.log("-".repeat(currentDir.length + 2));

  if (options.dryRun) {
    console.log('\nModo simulación activado (dry-run)\n');
  }

  organizeDirectory(currentDir, options);

  if (!options.dryRun) {
    console.log('\nOrganización finalizada\n');
  }
}

main();
