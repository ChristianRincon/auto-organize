import chalk from "chalk";

function collectParsedTypes(cliArguments, startIndex, flagName) {
  const typesCollected = [];
  let currentIndex = startIndex;

  while (currentIndex < cliArguments.length && !cliArguments[currentIndex].startsWith('-')) {
    typesCollected.push(cliArguments[currentIndex]);
    currentIndex++;
  }

  if (typesCollected.length === 0) {
    throw new Error(chalk.red(`\n${flagName} requires at least one valid type.`));
  }

  const parsedTypes = typesCollected
    .join(' ')
    .split(',')
    .map(type => type.trim().toLowerCase())
    .filter(Boolean);

  return {
    types: parsedTypes,
    newIndex: currentIndex - 1
  };
}

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
      const { types, newIndex } = collectParsedTypes(cliArguments, i + 1, '--only');
      cliFlags.only = types;
      i = newIndex;
      continue;
    }

    if (cliArgument === '--exclude' || cliArgument === '-e') {
      const { types, newIndex } = collectParsedTypes(cliArguments, i + 1, '--exclude');
      cliFlags.exclude = types;
      i = newIndex;
      continue;
    }
  }

  return cliFlags;
}

export { parseArgs };
