import { execCommand } from '../utils/execCommand';
import {
  defaultPackages,
  iiIntegrationHelpersPackages,
  expoIcpHelpersPackages,
  expoIcpAppConnectPackages,
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
  if (options.iiIntegrationHelpers) {
    return iiIntegrationHelpersPackages;
  }
  if (options.expoIcpHelpers) {
    return expoIcpHelpersPackages;
  }
  if (options.expoIcpAppConnect) {
    return expoIcpAppConnectPackages;
  }
  return defaultPackages;
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
