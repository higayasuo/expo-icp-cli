import { execSync } from 'child_process';

/**
 * Executes a shell command synchronously.
 * @param {string} command - The command to execute
 * @returns {string} The command output
 * @throws {Error} If the command fails
 */
export const execCommand = (command: string): string => {
  try {
    return execSync(command, { encoding: 'utf-8' });
  } catch (error) {
    if (error instanceof Error && 'stdout' in error) {
      throw error;
    }
    throw new Error(`Command failed: ${command}`);
  }
};
