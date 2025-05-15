# expo-icp-cli

A command-line interface tool for integrating Internet Computer Protocol (ICP) with Expo applications.

## Usage

First, install the package locally:

```bash
npm install expo-icp
```

Then, you can use the CLI:

```bash
npx expo-icp <command> [options]
```

## Available Commands

### install

Installs all necessary packages for Expo ICP integration, including expo-icp itself:

```bash
npx expo-icp install
```

This command will install the following packages:

- expo-icp
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

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm

### Setup

1. Clone the repository:

```bash
git clone https://github.com/higayasuo/expo-icp-cli.git
cd expo-icp-cli
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

### Testing

Run tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

## License

MIT
