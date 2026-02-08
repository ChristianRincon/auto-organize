import { organizeDirectory } from './organizer/organizeDirectory.js';
import { renderFoldersSummary } from './cli/renderSummary.js';
import { renderEmptyFolderText } from './cli/renderEmptyFolderText.js';
import { parseArgs } from './utils/parseArgs.js';
import { getAvailableTypes } from './rules/byType.js';
import { cliActions } from './cli/cliActions.js';
import { startSpinner } from './cli/spinner.js';

function main() {
  let spinner;
  
  try {
    const cliArguments = process.argv.slice(2);
    const cliFlags = parseArgs(cliArguments);
    const availableTypes = getAvailableTypes();
    const currentDir = process.cwd();

    const cliResult = cliActions(cliFlags, availableTypes);

    if (cliResult.exit) {
      process.exit(cliResult.code);
    }

    spinner = startSpinner('Organizing files...');
    const summary = organizeDirectory(currentDir, cliFlags);

    if(summary.isEmpty){
      renderEmptyFolderText();
      spinner.stop();
      return;
    } 
    
    renderFoldersSummary(summary);

    if(summary.previewMode){
      console.log("");
      spinner.succeed('Preview generated successfully!');
    }else{
      spinner.succeed('Files organized successfully!');
    }

  } catch (error) {
    if(spinner){
      spinner.fail('Error organizing files');
    }
    console.error(`\nError: ${error.message}`);
    process.exit(1);
  }
}

main();
