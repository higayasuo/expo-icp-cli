# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.24] - 2025-05-20

### Changed

- Replaced `npm update` with `npm outdated` and `npm install` combination for better performance
- Updated tests to reflect the new implementation

## [0.1.23] - 2025-05-20

### Changed

- Renamed `install` command to `update` for better clarity
- Added `install` as an alias for the `update` command to maintain backward compatibility
- Updated documentation to reflect the command name change

## [0.1.22] - 2025-05-19

### Added

- Added `--expo-crypto-universal` option to install Expo Crypto Universal packages
- Added `--expo-storage-universal` option to install Expo Storage Universal packages

### Changed

- Updated package lists in README.md to reflect correct dependencies for each option
- Reorganized default installation package list for better readability
- Updated package lists for `--expo-icp-helpers`, `--ii-integration-helpers`, and `--expo-icp-app-connect` options
- Added missing dependencies to `--expo-icp-app-connect` option

## [0.1.21] - 2025-05-19

### Changed

- Reverted setup command to include three options for specific package sets
- Simplified install command to have no options
- Updated documentation to reflect these changes

## [0.1.20] - 2025-05-19

### Added

- Added `--expo-icp-app-connect` option to install and setup commands
- I had previously fogotten to implement it for `buildSetupCommand` and `buildInstallCommand`

## [0.1.19] - 2025-05-19

### Added

- Added `--expo-icp-app-connect` option to install and setup commands
- Added support for installing Expo ICP app connect packages

## [0.1.18] - 2025-05-19

### Added

- Added `setup` command for initial project setup
- Added support for installing all recommended packages at once

### Changed

- Clarified command responsibilities:
  - `setup`: Install all recommended packages for new projects
  - `install`: Update outdated packages in existing projects

## [0.1.17] - 2025-05-19

### Added

- Added --expo-icp-helpers option to install command
- Added support for installing only Expo ICP helper packages

## [0.1.16] - 2025-05-16

### Changed

- Updated install command to install all outdated packages in a single npm install command
- Removed individual package installation messages for cleaner output

## [0.1.15] - 2025-05-16

### Changed

- Updated install command to display outdated packages in a comma-separated list

## [0.1.14] - 2025-05-16

### Changed

- Improved error handling in getOutdatedPackages function
- Updated tests to properly handle npm outdated command errors
- Added proper error propagation for npm outdated command failures

## [0.1.13] - 2025-05-16

### Changed

- Improved error messages for npm outdated command
- Added clearer feedback when no packages need to be installed
- Updated install command to show more informative status messages

## [0.1.12] - 2025-05-16

### Added

- Added outdated package checking functionality to install command
- Added getOutdatedPackages utility to check for outdated packages
- Updated install command to only install outdated packages

## [0.1.11] - 2025-05-16

### Added

- Added --ii-integration-helpers option to install command
- Added support for installing only II integration helper packages
- Updated test cases to cover both default and II integration helper installation paths

## [0.1.10] - 2025-05-16

### Changed

- Updated README.md with clearer npx usage instructions
- Added example for running without installation using npx -p
- Removed preferGlobal flag from package.json

## [0.1.9] - 2025-05-15

### Fixed

- Fixed npx command not found issue by updating bin field format in package.json
- Improved command execution through proper binary configuration

## [0.1.8] - 2025-05-15

### Changed

- Switched build tool from vitest to tsc for simpler and more direct TypeScript compilation

## [0.1.7] - 2025-05-15

### Added

- Added expo-icp to the list of necessary packages in install command

## [0.1.5] - 2025-05-15

### Fixed

- Fixed npm package resolution issue by simplifying bin field format
- Resolved npx executable detection problem
- Fixed incorrect version resolution in npm
- Fixed build target in Vite configuration to match Node.js version
- Resolved dependency resolution issue with @esbuild/aix-ppc64
- Updated Node.js target to 20.x

## [0.1.4] - 2025-05-15

### Fixed

- Fixed bin field format in package.json to use object notation
- Resolved npm executable detection issue
- Fixed version mismatch in npm package resolution

## [0.1.3] - 2025-05-15

### Fixed

- Fixed bin field format in package.json to use object notation
- Resolved npm executable detection issue
- Fixed version mismatch in npm package resolution

## [0.1.2] - 2025-05-15

### Fixed

- Fixed binary configuration in package.json
- Simplified bin field to use direct path
- Improved npx compatibility

## [0.1.1] - 2025-05-15

### Fixed

- Fixed binary execution issues with npx
- Added proper file permissions for CLI executable
- Updated build process to ensure executable permissions

## [0.1.0] - 2025-05-15

### Added

- Initial release
- Basic CLI structure with Commander.js
- `install` command to install necessary packages for Expo ICP integration
- Support for installing the following packages:
  - canister-manager
  - expo-crypto-universal
  - expo-crypto-universal-native
  - expo-crypto-universal-web
  - expo-icp-app-connect
  - expo-icp-app-connect-helpers
  - expo-icp-frontend-helpers
  - expo-ii-integration
  - expo-storage-universal
  - expo-storage-universal-native
  - expo-storage-universal-web
- TypeScript support with Vite
- Vitest for testing
- NPX support for running without global installation
