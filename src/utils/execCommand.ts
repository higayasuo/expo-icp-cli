import { execSync } from 'child_process';

export const execCommand = (command: string): string => {
  try {
    return execSync(command, { encoding: 'utf-8' });
  } catch (error) {
    console.error(`Command execution failed: ${command}`);
    throw error;
  }
};
