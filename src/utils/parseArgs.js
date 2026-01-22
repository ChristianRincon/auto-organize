function parseArgs(args) {
  const options = {
    dryRun: false,
    only: null,
    exclude: null,
    help: false
  };

  const allowedFlags = ['--dry-run', '--only', '--exclude', '--help'];

  args.forEach((arg, index) => {
    if (arg.startsWith('--') && !allowedFlags.includes(arg)) {
      throw new Error(`Flag '${arg}' desconocida. Ejecute 'auto-organize --help' para ver las opciones disponibles.`);
    }

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
