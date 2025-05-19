import {
  defaultPackages,
  iiIntegrationHelpersPackages,
  expoIcpHelpersPackages,
  expoIcpAppConnectPackages,
} from './packages';

/**
 * Options for the install command.
 */
export type InstallOptions = {
  /**
   * Whether to install II integration helpers.
   */
  iiIntegrationHelpers?: boolean;
  /**
   * Whether to install Expo ICP helpers.
   */
  expoIcpHelpers?: boolean;
  /**
   * Whether to install Expo ICP app connect packages.
   */
  expoIcpAppConnect?: boolean;
};

/**
 * Command to install packages.
 */
export type InstallCommand = (options: InstallOptions) => Promise<void>;

/**
 * Get the packages to install based on the options.
 * @param options - The options for the install command.
 * @returns The packages to install.
 */
export const getPackages = (options: InstallOptions) => {
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
