const RULES_BY_TYPE = {
  Images: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff', '.ico', '.heic', '.psd', '.eps'],
  Documents: ['.pdf', '.doc', '.docx', '.txt', '.md', '.rtf', '.odt', '.tex', '.wpd', '.epub', '.fb2', '.djvu', '.xps', '.pages'],
  Spreadsheets: ['.xls', '.xlsx', '.csv', '.ods', '.tsv', '.xlsm', '.xltx', '.xltm', '.xlsb', '.xlam', '.xla', '.xlw', '.xlc', '.xlt'],
  Presentations: ['.ppt', '.pptx', '.odp', '.key', '.ppsx', '.potx', '.pptm', '.ppsm', '.potm', '.pps', '.pot', '.ppa', '.thmx', '.sldx', '.sldm'],
  Archives: ['.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.xz', '.tgz', '.tbz2'],
  Audio: ['.mp3', '.wav', '.ogg', '.flac', '.aac', '.m4a'],
  Video: ['.mp4', '.mov', '.avi', '.mkv', '.webm', '.wmv', '.flv']
};

const DEFAULT_FOLDER = 'Others';

function getFolderByExtension(extension) {
  const lowerExtension = extension.toLowerCase();

  for (const [folder, extensions] of Object.entries(RULES_BY_TYPE)) {
    if (extensions.includes(lowerExtension)) {
      return folder;
    }
  }

  return DEFAULT_FOLDER;
}

function getAvailableTypes() {
  return Object.keys(RULES_BY_TYPE).map(availableType => availableType.toLowerCase());
}

export { getFolderByExtension, getAvailableTypes };
