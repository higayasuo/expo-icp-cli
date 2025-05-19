# expo-icp-cli

A command-line interface tool for integrating Internet Computer Protocol (ICP) with Expo applications.

## Usage

```bash
npx -p expo-icp@latest expo-icp <command> [options]
```

## Available Commands

### setup

Sets up a new project for Expo ICP integration packages. You can use the following options to install specific package sets:

- `--ii-integration-helpers`: Install II integration helper packages
- `--expo-icp-helpers`: Install Expo ICP helper packages
- `--expo-icp-app-connect`: Install Expo ICP app connect packages

```bash
# Install all recommended packages
npx -p expo-icp@latest expo-icp setup

# Install only II integration helper packages
npx -p expo-icp@latest expo-icp setup --ii-integration-helpers

# Install only Expo ICP helper packages
npx -p expo-icp@latest expo-icp setup --expo-icp-helpers

# Install only Expo ICP app connect packages
npx -p expo-icp@latest expo-icp setup --expo-icp-app-connect
```

### install

Updates outdated packages in an existing project. By default, it updates II integration packages. You can use the following options to update specific package sets:

- `--ii-integration-helpers`: Update II integration helper packages
- `--expo-icp-helpers`: Update Expo ICP helper packages
- `--expo-icp-app-connect`: Update Expo ICP app connect packages

```bash
# Update all outdated packages
npx -p expo-icp@latest expo-icp install

# Update only II integration helper packages
npx -p expo-icp@latest expo-icp install --ii-integration-helpers

# Update only Expo ICP helper packages
npx -p expo-icp@latest expo-icp install --expo-icp-helpers

# Update only Expo ICP app connect packages
npx -p expo-icp@latest expo-icp install --expo-icp-app-connect
```

#### Default Packages

The following packages are included in the default installation:

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

When using `--ii-integration-helpers`, these packages are installed:

- expo-icp-app-connect-helpers
- expo-icp-frontend-helpers
- ii-integration-helpers

#### Expo ICP Helper Packages

When using `--expo-icp-helpers`, these packages are installed:

- expo-icp-app-connect-helpers
- expo-icp-frontend-helpers

#### Expo ICP App Connect Packages

When using `--expo-icp-app-connect`, these packages are installed:

- expo-icp-app-connect
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
