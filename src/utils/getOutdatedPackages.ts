import { execCommand } from './execCommand';

/**
 * Gets information about outdated packages using npm outdated command.
 * @param {string[]} targetPackages - Array of package names to check
 * @returns {string[]} Array of outdated package names
 * @throws {Error} If the command fails or output cannot be parsed
 */
export const getOutdatedPackages = (targetPackages: string[]): string[] => {
  try {
    const output = execCommand(
      `npm outdated --json ${targetPackages.join(' ')}`,
    );
    const outdatedData = JSON.parse(output);
    return Object.keys(outdatedData);
  } catch (error) {
    // npm outdated returns non-zero exit code when packages are outdated
    // but still outputs valid JSON data
    if (error instanceof Error && 'stdout' in error) {
      const output = (error as { stdout: string }).stdout;
      if (!output) {
        throw new Error('npm outdated command failed with no output');
      }

      const outdatedData = JSON.parse(output);
      return Object.keys(outdatedData);
    }
    throw error;
  }
};
