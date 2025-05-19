import { execCommand } from '../utils/execCommand';
import { getOutdatedPackages } from '../utils/getOutdatedPackages';
import { defaultPackages } from './packages';

/**
 * Command to install packages.
 */
export type InstallCommand = () => Promise<void>;

/**
 * Installs packages based on the provided options.
 */
export const install: InstallCommand = async () => {
  const outdatedPackages = getOutdatedPackages(defaultPackages);

  if (outdatedPackages.length === 0) {
    console.log('No packages need to be installed.');
    return;
  }

  console.log('Installing outdated packages:', outdatedPackages.join(', '));
  execCommand(`npm install ${outdatedPackages.join(' ')}`);
};
