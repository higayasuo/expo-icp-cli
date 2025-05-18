import { Command } from 'commander';
import { InstallCommand } from '../commands/install';

/**
 * Builds the install command for the Expo ICP integration CLI tool.
 *
 * @param {Command} program - The commander program instance.
 * @param {InstallCommand} install - The install command action.
 */
export const buildInstallCommand = (
  program: Command,
  install: InstallCommand,
) => {
  program
    .command('install')
    .description('Install necessary packages for Expo ICP integration')
    .option(
      '--ii-integration-helpers',
      'Install II integration helper packages',
      false,
    )
    .option('--expo-icp-helpers', 'Install Expo ICP helper packages', false)
    .action(install);
};
