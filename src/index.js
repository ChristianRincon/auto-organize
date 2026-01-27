import { organizeDirectory } from './organizer/organizeDirectory.js';
import { renderFoldersSummary } from './cli/renderSummary.js';
import { parseArgs } from './utils/parseArgs.js';
import { getAvailableTypes } from './rules/byType.js';
import { cliActions } from './cli/cliActions.js';

function main() {
  try {
    const cliArguments = process.argv.slice(2);
    const cliFlags = parseArgs(cliArguments);
    const availableTypes = getAvailableTypes();
    const currentDir = process.cwd();

    const cliResult = cliActions(cliFlags, availableTypes);

    if (cliResult.exit) {
      process.exit(cliResult.code);
    }

    const summary = organizeDirectory(currentDir, cliFlags);
    renderFoldersSummary(summary);

  } catch (error) {
    console.error(`\nError: ${error.message}`);
    process.exit(1);
  }
}

main();
