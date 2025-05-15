import { execSync } from 'child_process';

export const execCommand = (command: string) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Command execution failed: ${command}`);
    throw error;
  }
}