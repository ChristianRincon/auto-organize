import chalk from 'chalk';

function validateFlags(cliFlags) {
  if (!cliFlags || typeof cliFlags !== 'object') {
    throw new Error("Missing or invalid 'cliFlags'");
  }
}

function validateTypes(availableTypes) {
  if (!Array.isArray(availableTypes) || availableTypes.length === 0) {
    throw new Error("Missing or invalid 'availableTypes'");
  }
}

function validateFlagsAndTypes(cliFlags, availableTypes) {
  const { only, exclude } = cliFlags;

  if (only) {
    only.forEach(type => {
      if (!availableTypes.includes(type)) {
        throw new Error(
          `'${chalk.red(type)}' is not a valid type for ${chalk.green('--only')}\n` +
          `Valid types: ${chalk.yellow(availableTypes.join(', '))}`
        );
      }
    });
  }

  if (exclude) {
    exclude.forEach(type => {
      if (!availableTypes.includes(type)) {
        throw new Error(
          `'${chalk.red(type)}' is not a valid type for ${chalk.green('--exclude')}\n` +
          `Valid types: ${chalk.yellow(availableTypes.join(', '))}`
        );
      }
    });
  }
}

export { validateFlags, validateTypes, validateFlagsAndTypes };