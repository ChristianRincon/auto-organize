function shouldSkipFile(folder, cliFlags) {
  const { only, exclude } = cliFlags;
  const normalizedFolder = folder.toLowerCase();

  if (only && !only.includes(normalizedFolder)) return true;
  if (exclude && exclude.includes(normalizedFolder)) return true;
  
  return false;
}

export { shouldSkipFile };