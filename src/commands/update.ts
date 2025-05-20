import { execCommand } from '../utils/execCommand';
import { defaultPackages } from './packages';
import { getOutdatedPackages } from '../utils/getOutdatedPackages';
/**
 * Command to update packages.
 */
export type UpdateCommand = () => Promise<void>;

/**
 * Updates packages based on the provided options.
 */
export const update: UpdateCommand = async () => {
  const outdatedPackages = getOutdatedPackages(defaultPackages);

  if (outdatedPackages.length > 0) {
    console.log(`Updating packages: ${outdatedPackages.join(' ')}`);
    execCommand(`npm install ${outdatedPackages.join(' ')}`);
  } else {
    console.log('No outdated packages found');
  }
};
