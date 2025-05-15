# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

- Simplified bin field in package.json to use direct path
- Improved npx compatibility by using simpler binary configuration

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
