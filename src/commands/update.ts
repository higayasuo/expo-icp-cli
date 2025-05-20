import { execCommand } from '../utils/execCommand';
import { defaultPackages } from './packages';

/**
 * Command to update packages.
 */
export type UpdateCommand = () => Promise<void>;

/**
 * Updates packages based on the provided options.
 */
export const update: UpdateCommand = async () => {
  execCommand(`npm update ${defaultPackages.join(' ')}`);
};
