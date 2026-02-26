# Changelog

<br>

## [1.5.0] - 2026-02-26

### Added
- Support for multiple types in `--only` and `--exclude` flags.
- Flexible parsing of comma separated types.

### Changed
- All type categories are now pluralized.
- Help menu updated to reflect multi-type usage.

<br>

## [1.4.1] - 2026-02-15
### Added
- New `Code` category to organize source code and development-related files.
- Support for multiple programming, scripting, markup, and configuration file extensions.

<br>

## [1.3.0] - 2026-02-08
### Added
- Detection of directories with no supported file types to organize.
- Clear feedback when no valid files are found.

### Changed
- Unsupported file extensions are now ignored instead of being moved to a default folder.
- The organizer only processes explicitly supported file types.

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
