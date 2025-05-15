# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
