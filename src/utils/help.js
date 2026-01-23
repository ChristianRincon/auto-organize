function showHelp(availableTypes) {
  console.log(`
Auto Organize CLI

Usage:
  auto-organize [options]

Options:
  --dry-run           Show a preview without making changes
  --only <type>       Organize only a specific file type
  --exclude <type>    Exclude a file type from organization
  --help              Show this help message

Available types:
  ${availableTypes.join(', ')}

Examples:
  auto-organize --dry-run
  auto-organize --only images
  auto-organize --exclude archives
`);
}

export { showHelp };
