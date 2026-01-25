import chalk from "chalk";

function showHelp(availableTypes) {
  console.log(`
    ${chalk.blueBright('Auto Organize CLI Help Menu')}

    Usage:
      auto-organize [${chalk.green('options')}]

    Options:
      ${chalk.green('--preview,  -p')}           Show a preview without making changes
      ${chalk.green('--only,     -o <type>')}    Organize only a specific file type
      ${chalk.green('--exclude,  -e <type>')}    Exclude a file type from organization
      ${chalk.green('--help,     -h')}           Show this help message

    Available types:
      ${chalk.yellow(availableTypes.join(', '))}

    Examples:
      auto-organize ${chalk.green('--preview')} || auto-organize ${chalk.green('-p')}

      auto-organize ${chalk.green('--only')} ${chalk.yellow('images')} || auto-organize ${chalk.green('-o')} ${chalk.yellow('images')}
      
      auto-organize ${chalk.green('--exclude')} ${chalk.yellow('archives')} || auto-organize ${chalk.green('-e')} ${chalk.yellow('archives')}
  `);
}

export { showHelp };
