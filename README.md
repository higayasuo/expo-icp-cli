# expo-icp-cli

A command-line interface tool for integrating Internet Computer Protocol (ICP) with Expo applications.

## Usage

```bash
npx -p expo-icp@latest expo-icp <command> [options]
```

## Available Commands

### setup

Sets up a new project for Expo ICP integration packages. You can use the following options to install specific package sets:

- `--expo-crypto-universal`: Install Expo Crypto Universal packages
- `--expo-storage-universal`: Install Expo Storage Universal packages
- `--expo-icp-helpers`: Install Expo ICP helper packages
- `--ii-integration-helpers`: Install II integration helper packages
- `--expo-icp-app-connect`: Install Expo ICP app connect packages

```bash
# Install all recommended packages
npx -p expo-icp@latest expo-icp setup

# Install only Expo Crypto Universal packages
npx -p expo-icp@latest expo-icp setup --expo-crypto-universal

# Install only Expo Storage Universal packages
npx -p expo-icp@latest expo-icp setup --expo-storage-universal

# Install only Expo ICP helper packages
npx -p expo-icp@latest expo-icp setup --expo-icp-helpers

# Install only II integration helper packages
npx -p expo-icp@latest expo-icp setup --ii-integration-helpers

# Install only Expo ICP app connect packages
npx -p expo-icp@latest expo-icp setup --expo-icp-app-connect
```

### update

Updates outdated packages in an existing project. You can also use `install` as an alias for this command.

```bash
# Update all outdated packages
npx -p expo-icp@latest expo-icp update

# Or using the install alias
npx -p expo-icp@latest expo-icp install
```

#### Default Packages

The following packages are included in the default installation:

- expo-crypto-universal
- expo-crypto-universal-native
- expo-crypto-universal-web
- expo-storage-universal
- expo-storage-universal-native
- expo-storage-universal-web
- expo-icp-frontend-helpers
- canister-manager
- expo-icp-app-connect-helpers
- expo-icp-app-connect
- expo-ii-integration

#### Expo Crypto Universal Packages

When using `--expo-crypto-universal`, these packages are installed:

- expo-crypto-universal
- expo-crypto-universal-native
- expo-crypto-universal-web

#### Expo Storage Universal Packages

When using `--expo-storage-universal`, these packages are installed:

- expo-storage-universal
- expo-storage-universal-native
- expo-storage-universal-web

#### Expo ICP Helper Packages

When using `--expo-icp-helpers`, these packages are installed:

- canister-manager
- expo-icp-app-connect-helpers
- expo-icp-frontend-helpers

#### II Integration Helper Packages

When using `--ii-integration-helpers`, these packages are installed:

- expo-icp-frontend-helpers
- canister-manager
- expo-icp-app-connect-helpers
- ii-integration-helpers

#### Expo ICP App Connect Packages

When using `--expo-icp-app-connect`, these packages are installed:

- expo-crypto-universal
- expo-crypto-universal-native
- expo-crypto-universal-web
- expo-storage-universal
- expo-storage-universal-native
- expo-storage-universal-web
- canister-manager
- expo-icp-frontend-helpers
- expo-icp-app-connect-helpers
- expo-icp-app-connect

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
