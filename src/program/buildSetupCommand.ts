import { Command } from 'commander';
import { InstallCommand } from '../commands/installCommon';

/**
 * Builds the setup command for the Expo ICP integration CLI tool.
 *
 * @param {Command} program - The commander program instance.
 * @param {InstallCommand} setup - The setup command action.
 */
export const buildSetupCommand = (program: Command, setup: InstallCommand) => {
  program
    .command('setup')
    .description('Setup the project for Expo ICP integration')
    .option(
      '--ii-integration-helpers',
      'Install II integration helper packages',
      false,
    )
    .option('--expo-icp-helpers', 'Install Expo ICP helper packages', false)
    .option(
      '--expo-icp-app-connect',
      'Install Expo ICP app connect packages',
      false,
    )
    .action(setup);
};
