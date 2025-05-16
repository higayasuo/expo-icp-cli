import { execCommand } from './execCommand';

/**
 * Gets information about outdated packages using npm outdated command.
 * @returns {Promise<OutdatedPackage[]>} Array of outdated packages with their current and latest versions.
 */
export const getOutdatedPackages = (targetPackages: string[]): string[] => {
  const output = execCommand(`npm outdated --json ${targetPackages.join(' ')}`);
  const outdatedData = JSON.parse(output);

  return Object.keys(outdatedData);
};
