function parseArgs(args) {

  if (!args[0].startsWith('--')) {
    throw new Error(`\n'${args[0]}' is invalid. Run 'auto-organize --help' to see available options.`);
  }

  const options = {
    dryRun: false,
    only: null,
    exclude: null,
    help: false
  };

  const allowedFlags = ['--dry-run', '--only', '--exclude', '--help'];

  args.forEach((arg, index) => {
    if (arg.startsWith('--') && !allowedFlags.includes(arg)) {
      throw new Error(`\nUnknown flag '${arg}'. Run 'auto-organize --help' to see available flags.`);
    }

    if (arg === '--dry-run') {
      options.dryRun = true;
    }

    if (arg === '--help') {
      options.help = true;
    }

    if (arg === '--only') {
      options.only = args[index + 1]?.toLowerCase() || null;
    }

    if (arg === '--exclude') {
      options.exclude = args[index + 1]?.toLowerCase() || null;
    }
  });

  return options;
}

module.exports = { parseArgs };
