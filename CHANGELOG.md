# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2018-11-06
### Changed
- Convert CJS to js modules
- Replaced Vows with AVA tests

## [1.0.4] - 2018-11-06
### Changed
- Add prettier and format code

## [1.0.3] - 2018-11-06
### Fixed
- Added eslint and fixed lint errors

## [1.0.2] - 2018-11-06
### Fixed
- Fixed object pattern tests

## [1.0.1] - 2014-05-06
### Added
- Add missing concatenated and minified versions

## [1.0.0] - 2014-05-03
### Changed
- Proper implementation of regexp and quantified properties
- The library has been stable for a long time now, so it's time to release 1.0. It will also make it possible
   to signal API breakage in the future (using semantic versioning).

## [0.7.2] - 2014-12-02
### Fixed
- Reverting the object pattern fix released in 0.7.1 because of breaking error reporting functionality

## [0.7.1] - 2014-11-09
### Changed
- A bugfix for OrSchema `errors()` method (thanks to Kuba Wyrobek)
- Type checking for `Array.of()` that prevents misusages like:
   `Array.of(schema, length)` or `Array.of(schema, minLength, maxLength)` (thanks to Kuba Wyrobek)
- A bugfix for the object pattern to handle `{ "+.+" : String }` and similar patterns correctly
   (thanks to Alex Ivanov)
- The `String.of()` extension now has `.` as default instead of `[a-zA-Z0-9]` (thanks to Mikael Berg)

## [0.7.0] - 2014-09-01
### Changed
- Support for error reporting
- Addition of .jshintrc file for code style consistency
- Addition of unit tests

## [0.6.4] - 2014-08-11
### Changed
- Fixing Bower issues

## [0.6.3] - 2014-05-03
### Changed
- Bower front-end package manager support

## [0.6.2] - 2013-02-03
### Changed
- Fixing Windows and Mac compatibility issues (#3, #5)

## [0.6.1] - 2012-08-19
### Changed
- Minor bugfixes

## [0.6.0] - 2012-08-18
### Changed
- Support for general purpose referencing (with JSON Schema serialization/deserialization)
- Property description support
- Splitting out random generation into a separate library (molnarg/generate.js)
- Removal of the premature compilation system (optimizations will reappear in a future release)
- Cleaner codebase
- Js-schema is now self-contained: it has no dependencies
- Reduced size: 15kb -> 5kb (minified and gzipped)

## [0.5.0] - 2012-06-27
### Changed
- Support for self-referencing

## [0.4.1] - 2012-06-19
### Changed
- Browser support

## [0.4.0] - 2012-06-17
### Changed
- Regexp object properties
- Enhanced JSON Schema serialization/deserialization support
- Deep equality pattern

## [0.3.0] - 2012-06-13
### Changed
- Optional properties in objects
- Introduction of schema.generate()

## [0.2.0] - 2012-06-04
### Changed
- Compilation infrastructure
- Pattern documentation

## [0.1.1] - 2012-05-27
### Changed
- Basic patterns are in place.
