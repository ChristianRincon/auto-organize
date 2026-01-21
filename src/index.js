const { organizeDirectory } = require('./organizer');

function main() {
  const currentDir = process.cwd();

  console.log('\nDirectorio analizado:\n');
  console.log(currentDir);

  organizeDirectory(currentDir);

  console.log('\nOrganización finalizada\n');
}

main();
