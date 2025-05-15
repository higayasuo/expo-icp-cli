import { execCommand } from '../utils/execCommand';

const defaultPackages = [
  'expo-icp',
  'canister-manager',
  'expo-crypto-universal',
  'expo-crypto-universal-native',
  'expo-crypto-universal-web',
  'expo-icp-app-connect',
  'expo-icp-app-connect-helpers',
  'expo-icp-frontend-helpers',
  'expo-ii-integration',
  'expo-storage-universal',
  'expo-storage-universal-native',
  'expo-storage-universal-web',
];

const iiIntegrationHelpersPackages = [
  'expo-icp',
  'expo-icp-app-connect-helpers',
  'expo-icp-frontend-helpers',
  'ii-integration-helpers',
];

type InstallOptions = {
  iiIntegrationHelpers?: boolean;
};

export const install = async (options: InstallOptions) => {
  console.log('Installing necessary packages...', options);
  const packages = options.iiIntegrationHelpers
    ? iiIntegrationHelpersPackages
    : defaultPackages;
  packages.forEach((pkg) => {
    console.log(`Installing ${pkg}...`);
    execCommand(`npm install ${pkg}`);
  });
};
