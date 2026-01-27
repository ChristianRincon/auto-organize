import { showHelp } from '../utils/helpMenu.js';
import { validateFlags, validateTypes, validateFlagsAndTypes } from '../utils/validators.js';
import { renderBanners } from './renderBanners.js';

function cliActions(cliFlags, availableTypes) {
  validateFlags(cliFlags);
  validateTypes(availableTypes);
  validateFlagsAndTypes(cliFlags, availableTypes);

  if (cliFlags.help) {
    showHelp(availableTypes);
    return { exit: true, code: 0 };
  }

  renderBanners(cliFlags);

  return { exit: false };
}

export { cliActions };
