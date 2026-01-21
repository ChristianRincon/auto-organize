const path = require('path');
const { getFilesFromDirectory } = require('./utils/fsHelpers');

function main() {
  const currentDir = process.cwd();

  console.log('\nDirectorio analizado:\n');
  console.log(currentDir);

  const files = getFilesFromDirectory(currentDir);

  if (files.length === 0) {
    console.log('\nNo se encontraron archivos para organizar.');
    return;
  }

  console.log('\nArchivos encontrados:\n');

  files.forEach(file => {
    console.log(`- ${file.name}`);
  });

  console.log(`\nTotal: ${files.length} archivo(s)\n`);
}

main();
