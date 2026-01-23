import chalk from "chalk";

function parseArgs(cliArguments) {
  const cliFlags = {
    preview: false,
    only: null,
    exclude: null,
    help: false
  };

  if (cliArguments.length === 0) {
    return cliFlags;
  }

  const allowedFlags = [
    '--preview', '-p',
    '--only', '-o',
    '--exclude', '-e',
    '--help', '-h'
  ];

  for (let i = 0; i < cliArguments.length; i++) {
    const cliArgument = cliArguments[i];

    if (!cliArgument.startsWith('-')) {
      throw new Error(`\n'${chalk.red(cliArgument)}' is invalid. Run ${chalk.green('auto-organize --help')} to see available options.`);
    }

    if (!allowedFlags.includes(cliArgument)) {
      throw new Error(`\nUnknown flag '${chalk.red(cliArgument)}'. Run ${chalk.green('auto-organize --help')} to see available flags.`);
    }

    if (cliArgument === '--preview' || cliArgument === '-p') {
      cliFlags.preview = true;
      continue;
    }

    if (cliArgument === '--help' || cliArgument === '-h') {
      cliFlags.help = true;
      continue;
    }


    if (cliArgument === '--only' || cliArgument === '-o') {
      const onlyFlagArgument = cliArguments[i + 1];

      if (!onlyFlagArgument || onlyFlagArgument.startsWith('-')) {
        throw new Error(chalk.red(`\n--only requires a valid type.`));
      }

      cliFlags.only = onlyFlagArgument.toLowerCase();
      i++;
      continue;
    }

    if (cliArgument === '--exclude' || cliArgument === '-e') {
      const excludeFlagArgument = cliArguments[i + 1];

      if (!excludeFlagArgument || excludeFlagArgument.startsWith('-')) {
        throw new Error(chalk.red(`\n--exclude requires a valid type.`));
      }

      cliFlags.exclude = excludeFlagArgument.toLowerCase();
      i++;
      continue;
    }
  }

  return cliFlags;
}

export { parseArgs };
