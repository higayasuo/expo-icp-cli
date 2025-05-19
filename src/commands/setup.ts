import { execCommand } from '../utils/execCommand';
import {
  defaultPackages,
  iiIntegrationHelpersPackages,
  expoIcpHelpersPackages,
  expoIcpAppConnectPackages,
  expoCryptoUniversalPackages,
  expoStorageUniversalPackages,
} from './packages';

/**
 * Options for the setup command.
 */
export type SetupOptions = {
  /**
   * Whether to install packages related to II integration helpers.
   */
  iiIntegrationHelpers?: boolean;
  /**
   * Whether to install packages related to Expo ICP helpers.
   */
  expoIcpHelpers?: boolean;

  /**
   * Whether to install packages related to Expo storage universal.
   */
  expoStorageUniversal?: boolean;

  /**
   * Whether to install packages related to Expo crypto universal.
   */
  expoCryptoUniversal?: boolean;

  /**
   * Whether to install packages related to Expo ICP app connect.
   */
  expoIcpAppConnect?: boolean;
};

/**
 * Command to setup the project.
 */
export type SetupCommand = (options: SetupOptions) => Promise<void>;

/**
 * Get the packages to install based on the options.
 * @param options - The options for the setup command.
 * @returns The packages to install.
 */
export const getPackages = (options: SetupOptions) => {
  const packages: string[] = [];

  if (options.expoCryptoUniversal) {
    packages.push(...expoCryptoUniversalPackages);
  }
  if (options.expoStorageUniversal) {
    packages.push(...expoStorageUniversalPackages);
  }
  if (options.expoIcpHelpers) {
    packages.push(...expoIcpHelpersPackages);
  }
  if (options.iiIntegrationHelpers) {
    packages.push(...iiIntegrationHelpersPackages);
  }
  if (options.expoIcpAppConnect) {
    packages.push(...expoIcpAppConnectPackages);
  }

  if (packages.length === 0) {
    return defaultPackages;
  }

  return [...new Set(packages)];
};

/**
 * Sets up the project based on the provided options.
 * @param options - The options for the setup command.
 */
export const setup: SetupCommand = async (options) => {
  const packages = getPackages(options);

  console.log('Installing packages:', packages.join(', '));
  execCommand(`npm install ${packages.join(' ')}`);
};
