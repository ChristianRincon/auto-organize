const RULES_BY_TYPE = {
  Images: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'],
  Documents: ['.pdf', '.doc', '.docx', '.txt', '.md'],
  Spreadsheets: ['.xls', '.xlsx', '.csv'],
  Presentations: ['.ppt', '.pptx'],
  Archives: ['.zip', '.rar', '.7z', '.tar', '.gz'],
  Audio: ['.mp3', '.wav', '.ogg'],
  Video: ['.mp4', '.mov', '.avi', '.mkv']
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

module.exports = { getFolderByExtension };
