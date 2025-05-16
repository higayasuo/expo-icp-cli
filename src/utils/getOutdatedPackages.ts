import { execCommand } from './execCommand';

/**
 * Gets information about outdated packages using npm outdated command.
 * @returns {Promise<OutdatedPackage[]>} Array of outdated packages with their current and latest versions.
 */
export const getOutdatedPackages = (targetPackages: string[]): string[] => {
  try {
    const output = execCommand(
      `npm outdated --json ${targetPackages.join(' ')}`,
    );
    const outdatedData = JSON.parse(output);

    return Object.keys(outdatedData);
  } catch (error) {
    if (error instanceof Error && error.message.includes('npm outdated')) {
      // No outdated packages
      return [];
    }
    throw error;
  }
};
