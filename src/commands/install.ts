import { execCommand } from '../utils/execCommand';
import { getOutdatedPackages } from '../utils/getOutdatedPackages';

const defaultPackages = [
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
  'expo-icp-app-connect-helpers',
  'expo-icp-frontend-helpers',
  'ii-integration-helpers',
];

const expoIcpHelpersPackages = [
  'expo-icp-app-connect-helpers',
  'expo-icp-frontend-helpers',
];

export type InstallOptions = {
  iiIntegrationHelpers?: boolean;
  expoIcpHelpers?: boolean;
};

export type InstallCommand = (options: InstallOptions) => Promise<void>;

export const getPackages = (options: InstallOptions) => {
  if (options.iiIntegrationHelpers) {
    return iiIntegrationHelpersPackages;
  }
  if (options.expoIcpHelpers) {
    return expoIcpHelpersPackages;
  }
  return defaultPackages;
};

export const install: InstallCommand = async (options) => {
  const packages = getPackages(options);

  const outdatedPackages = getOutdatedPackages(packages);

  if (outdatedPackages.length === 0) {
    console.log('No packages need to be installed.');
    return;
  }

  console.log('Installing outdated packages:', outdatedPackages.join(', '));
  execCommand(`npm install ${outdatedPackages.join(' ')}`);
};
