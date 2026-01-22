const { organizeDirectory } = require('./organizer');
const { parseArgs } = require('./utils/parseArgs');
const { showHelp } = require('./utils/help');
const { getAvailableTypes } = require('./rules/byType');

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

  console.log('\n| Scanned directory |');
  console.log("-".repeat(currentDir.length + 2));
  console.log('|' + currentDir + '|');
  console.log("-".repeat(currentDir.length + 2));

  if (options.dryRun) {
    console.log('\nDry-run mode enabled\n');
  }

  organizeDirectory(currentDir, options);

  console.log('\nOrganization completed\n');
}

main();
