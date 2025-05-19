import { execCommand } from '../utils/execCommand';
import { getOutdatedPackages } from '../utils/getOutdatedPackages';
import { InstallCommand, getPackages } from './installCommon';

/**
 * Installs packages based on the provided options.
 * @param options - The options for the install command.
 */
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
