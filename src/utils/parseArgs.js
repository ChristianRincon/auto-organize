import chalk from "chalk";

function parseArgs(args) {
  const options = {
    dryRun: false,
    only: null,
    exclude: null,
    help: false
  };

  if (args.length === 0) {
    return options;
  }

  const allowedFlags = ['--dry-run', '--only', '--exclude', '--help'];

  args.forEach((arg, index) => {
    if (!arg.startsWith('--')) {
      throw new Error(`\n'${chalk.red(arg)}' is invalid. Run ${chalk.green('auto-organize --help')} to see available options.`);
    }

    if (!allowedFlags.includes(arg)) {
      throw new Error(`\nUnknown flag '${chalk.red(arg)}'. Run ${chalk.green('auto-organize --help')} to see available flags.`);
    }

    if (arg === '--dry-run') options.dryRun = true;
    if (arg === '--help') options.help = true;

    if (arg === '--only') {
      const onlyValue = args[index + 1];
      if (!onlyValue || onlyValue.startsWith('--')) {
        throw new Error(chalk.red(`\n--only requires a valid type.`));
      }
      options.only = onlyValue.toLowerCase();
    }

    if (arg === '--exclude') {
      const excludeValue = args[index + 1];
      if (!excludeValue || excludeValue.startsWith('--')) {
        throw new Error(chalk.red(`\n--exclude requires a valid type.`));
      }
      options.exclude = excludeValue.toLowerCase();
    }
  });

  return options;
}

export { parseArgs };
