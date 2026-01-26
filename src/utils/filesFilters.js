function shouldSkipFile(folder, cliFlags) {
  const { only, exclude } = cliFlags;
  const normalizedFolder = folder.toLowerCase();

  if (only && normalizedFolder !== only.toLowerCase()) return true;
  if (exclude && normalizedFolder === exclude.toLowerCase()) return true;
  
  return false;
}

export { shouldSkipFile };