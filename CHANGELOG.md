﻿# Change Log
All notable changes to this project will be documented in this file.

## [1.2.1] - 2016-11-17
### Added
- Added warning when no page title specified.

### Fixed
- Fixed bugs when `MetadataModule` is called without arguments.

## [1.2.0] - 2016-11-17
### Added
- Added metadata.json & *.d.ts files for AoT.

### Fixed
- Fixed the AoT compilation issue ([#2](https://github.com/fulls1z3/ng2-metadata/issues/2)).
- Fixed `isSet` behavior in `MetadataService`.
- Fixed method signatures in `MetadataService`.

## [1.1.3] - 2016-11-15
### Added
- Added HTML tag `lang` attribute generation (based on "og:locale" setting).

### Changed
- `setTag` method now overrides default settings.

### Fixed
- Fixed "og:locale:alternate" issue, multiple tags are being generated for each available locale.
- Fixed the "og:url" bug when applicationUrl is not supplied with the default settings.
- Fixed the issue with trailing slash at "og:url".

## 1.1.2 - 2016-11-14
- pre-release

## 1.1.1 - 2016-11-14
- pre-release

## 1.1.0 - 2016-11-14
- pre-release

## [1.0.5] - 2016-11-11
### Added
- Added typings (*.d.ts) for IDE intellisense.
- Added (this) CHANGELOG.md file.

### Changed
- Updated gulpfile.js.
- Updated package.json (main, typings).

## 1.0.4 - 2016-11-11
- pre-release

## [1.0.3] - 2016-11-10
### Added
- Added gulpfile.js

### Changed
- Changed the default `pageTitlePositioning` to **`PageTitlePositioning.PrependPageTitle`**, at the `MetadataModule.forRoot` method.

### Removed
- Removed ng2-metadata.ruleset.

### Fixed
- Fixed bugs with the bundle.

## 1.0.2 - 2016-11-10
- pre-release

## 1.0.1 - 2016-11-10
- pre-release

## 1.0.0 - 2016-11-10
- pre-release

[1.2.1]: https://github.com/fulls1z3/ng2-metadata/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/fulls1z3/ng2-metadata/compare/1.1.3...1.2.0
[1.1.3]: https://github.com/fulls1z3/ng2-metadata/compare/1.0.5...1.1.3
[1.0.5]: https://github.com/fulls1z3/ng2-metadata/compare/1.0.3...1.0.5
[1.0.3]: https://github.com/fulls1z3/ng2-metadata/compare/1.0.2...1.0.3
