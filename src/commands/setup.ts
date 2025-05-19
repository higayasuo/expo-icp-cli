import { execCommand } from '../utils/execCommand';
import { InstallCommand, getPackages } from './installCommon';

/**
 * Sets up the project based on the provided options.
 * @param options - The options for the setup command.
 */
export const setup: InstallCommand = async (options) => {
  const packages = getPackages(options);

  console.log('Installing packages:', packages.join(', '));
  execCommand(`npm install ${packages.join(' ')}`);
};
