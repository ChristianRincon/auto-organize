const { organizeDirectory } = require('./organizer');

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');

  const currentDir = process.cwd();

  console.log('\n|Directorio analizado|');
  console.log("-".repeat(currentDir.length + 2));
  console.log('|' + currentDir + '|');
  console.log("-".repeat(currentDir.length + 2));


  if (dryRun) {
    console.log('\nModo simulación activado (dry-run)\n');
  } else {
    console.log(currentDir);
  }

  organizeDirectory(currentDir, { dryRun });

  if (!dryRun) {
    console.log('\nOrganización finalizada\n');
  }
}

main();
