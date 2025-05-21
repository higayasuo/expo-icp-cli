/**
 * Packages related to Expo Crypto Universal functionality.
 */
export const expoCryptoUniversalPackages = [
  'expo-crypto-universal',
  'expo-crypto-universal-native',
  'expo-crypto-universal-web',
];

/**
 * Packages related to Expo Storage Universal functionality.
 */
export const expoStorageUniversalPackages = [
  'expo-storage-universal',
  'expo-storage-universal-native',
  'expo-storage-universal-web',
];

/**
 * Packages related to Expo ICP helpers functionality.
 */
export const expoIcpHelpersPackages = [
  'canister-manager',
  'expo-icp-app-connect-helpers',
  'expo-icp-frontend-helpers',
];

/**
 * Packages related to II Integration helpers functionality.
 */
export const iiIntegrationHelpersPackages = [
  'ii-integration-helpers',
  ...expoIcpHelpersPackages,
];

/**
 * Packages related to Expo ICP App Connect functionality.
 */
export const expoIcpAppConnectPackages = [
  'expo-icp-app-connect',
  'expo-error-toast',
  ...expoIcpHelpersPackages,
  ...expoCryptoUniversalPackages,
  ...expoStorageUniversalPackages,
];

/**
 * Default packages to be installed when no specific options are provided.
 */
export const defaultPackages = [
  'expo-ii-integration',
  ...expoIcpAppConnectPackages,
];
