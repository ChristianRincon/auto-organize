const RULES_BY_TYPE = {
  Images: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff', '.ico', '.heic', '.psd', '.eps'],
  Documents: ['.pdf', '.doc', '.docx', '.txt', '.md', '.rtf', '.odt', '.tex', '.wpd', '.epub', '.fb2', '.djvu', '.xps', '.pages'],
  Spreadsheets: ['.xls', '.xlsx', '.csv', '.ods', '.tsv', '.xlsm', '.xltx', '.xltm', '.xlsb', '.xlam', '.xla', '.xlw', '.xlc', '.xlt'],
  Presentations: ['.ppt', '.pptx', '.odp', '.key', '.ppsx', '.potx', '.pptm', '.ppsm', '.potm', '.pps', '.pot', '.ppa', '.thmx', '.sldx', '.sldm'],
  Archives: ['.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.xz', '.tgz', '.tbz2'],
  Audios: ['.mp3', '.wav', '.ogg', '.flac', '.aac', '.m4a'],
  Videos: ['.mp4', '.mov', '.avi', '.mkv', '.webm', '.wmv', '.flv'],
  Codes: ['.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.cpp', '.c', '.h', '.hpp', '.cs', '.php', '.rb', '.go', '.rs', '.kotlin', '.swift', '.scala', '.m', '.mm', '.pl', '.sh', '.bash', '.zsh', '.fish', '.ps1', '.bat', '.cmd', '.html', '.htm', '.css', '.scss', '.sass', '.less', '.json', '.jsonc', '.xml', '.yaml', '.yml', '.toml', '.ini', '.cfg', '.conf', '.sql', '.r', '.lua', '.dart', '.clj', '.cljs', '.ex', '.exs', '.erl', '.hrl', '.vim', '.gradle', '.maven', '.cmake', '.makefile', '.dockerfile'],
};

function getFolderNameByExtensionType(extension) {
  const extensionToLowerCase = extension.toLowerCase();

  for (const [folderName, extensionsList] of Object.entries(RULES_BY_TYPE)) {
    if (extensionsList.includes(extensionToLowerCase)) {
      return folderName;
    }
  }

  return null;
}

function getAvailableTypes() {
  return Object.keys(RULES_BY_TYPE).map(availableType => availableType.toLowerCase());
}

export { getFolderNameByExtensionType, getAvailableTypes };
