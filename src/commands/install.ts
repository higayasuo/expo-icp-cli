import { execCommand } from '../utils/execCommand';
import { getOutdatedPackages } from '../utils/getOutdatedPackages';

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
  const packages = options.iiIntegrationHelpers
    ? iiIntegrationHelpersPackages
    : defaultPackages;

  const outdatedPackages = getOutdatedPackages(packages);

  if (outdatedPackages.length === 0) {
    console.log('No packages need to be installed.');
    return;
  }

  console.log('Installing outdated packages:', outdatedPackages.join(', '));
  outdatedPackages.forEach((pkg) => {
    console.log(`Installing ${pkg}...`);
    execCommand(`npm install ${pkg}`);
  });
};
