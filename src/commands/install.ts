import { execCommand } from '../utils/execCommand';

const packages = [
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

export const install = async () => {
  console.log('Installing necessary packages...');
  packages.forEach((pkg) => {
    console.log(`Installing ${pkg}...`);
    execCommand(`npm install ${pkg}`);
  });
};
