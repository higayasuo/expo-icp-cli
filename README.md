# expo-icp-cli

A command-line interface tool for integrating Internet Computer Protocol (ICP) with Expo applications.

## Usage

```bash
npx -p expo-icp@latest expo-icp <command> [options]
```

## Available Commands

### install

Installs necessary packages for Expo ICP integration. By default, it installs all required packages. You can use the following options to install specific package sets:

- `--ii-integration-helpers`: Install only II integration helper packages
- `--expo-icp-helpers`: Install only Expo ICP helper packages

```bash
# Install all required packages
npx -p expo-icp@latest expo-icp install

# Install only II integration helper packages
npx -p expo-icp@latest expo-icp install --ii-integration-helpers

# Install only Expo ICP helper packages
npx -p expo-icp@latest expo-icp install --expo-icp-helpers
```

#### Default Packages

When run without options, the command installs the following packages:

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

#### II Integration Helper Packages

When run with `--ii-integration-helpers`, the command installs only these packages:

- expo-icp-app-connect-helpers
- expo-icp-frontend-helpers
- ii-integration-helpers

#### Expo ICP Helper Packages

When run with `--expo-icp-helpers`, the command installs only these packages:

- expo-icp-app-connect-helpers
- expo-icp-frontend-helpers

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
