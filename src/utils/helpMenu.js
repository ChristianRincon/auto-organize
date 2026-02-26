import chalk from "chalk";

function showHelp(availableTypes) {
  console.log(`
    ${chalk.blueBright('Auto Organize CLI Help Menu')}

    Usage:
      auto-organize [${chalk.green('options')}]

    Options:
      ${chalk.green('--preview,  -p')}             Show a preview without making changes
      ${chalk.green('--only,     -o <type(s)>')}   Organize only specific file types
      ${chalk.green('--exclude,  -e <type(s)>')}   Exclude specific file types
      ${chalk.green('--help,     -h')}             Show this help message

    ${chalk.yellow('Multiple types can be separated by commas')}

    Available types:
      ${chalk.yellow(availableTypes.join(', '))}

    Examples:

      ${chalk.blueBright('Preview')}:
        auto-organize ${chalk.green('--preview')} || auto-organize ${chalk.green('-p')}

      ${chalk.blueBright('Only')}:
        auto-organize ${chalk.green('--only')} ${chalk.yellow('images')} || auto-organize ${chalk.green('-o')} ${chalk.yellow('images')}
        auto-organize ${chalk.green('--only')} ${chalk.yellow('images,videos')} || auto-organize ${chalk.green('-o')} ${chalk.yellow('images,videos')}
        
      ${chalk.blueBright('Exclude')}:
        auto-organize ${chalk.green('--exclude')} ${chalk.yellow('archives')} || auto-organize ${chalk.green('-e')} ${chalk.yellow('archives')}
        auto-organize ${chalk.green('--exclude')} ${chalk.yellow('archives,documents')} || auto-organize ${chalk.green('-e')} ${chalk.yellow('archives,documents')}
  `);
}

export { showHelp };
