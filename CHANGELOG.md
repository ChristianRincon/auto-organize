# Changelog

<br>

## [1.2.1] - 2026-02-04
### Fixed
- Fixed an error where invalid CLI flags could trigger an internal spinner error instead of a proper validation message.

<br>

## [1.2.0] - 2026-02-02
### Added
- CLI spinner to provide visual feedback while organizing files.
- Improved user feedback during long-running operations.

<br>

## [1.1.0] - 2026-01-28
### Added
- File collision detection before moving files to the destination directory.
- Safety validation to prevent overwriting existing files with the same name.

### Changed
- The organize process now aborts when a filename collision is detected instead of overwriting files.
