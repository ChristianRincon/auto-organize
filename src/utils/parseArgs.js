function parseArgs(args) {
  const options = {
    dryRun: false,
    only: null,
    exclude: null,
    help: false
  };

  args.forEach((arg, index) => {
    if (arg === '--dry-run') options.dryRun = true;
    if (arg === '--help') options.help = true;

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
