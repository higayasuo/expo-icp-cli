import { Command } from 'commander';
import { SetupCommand } from '../commands/setup';

/**
 * Builds the setup command for the Expo ICP integration CLI tool.
 *
 * @param {Command} program - The commander program instance.
 * @param {SetupCommand} setup - The setup command action.
 */
export const buildSetupCommand = (program: Command, setup: SetupCommand) => {
  program
    .command('setup')
    .description('Setup the project for Expo ICP integration')
    .option(
      '--expo-crypto-universal',
      'Install Expo Crypto Universal packages',
      false,
    )
    .option(
      '--expo-storage-universal',
      'Install Expo Storage Universal packages',
      false,
    )
    .option('--expo-icp-helpers', 'Install Expo ICP helper packages', false)
    .option(
      '--ii-integration-helpers',
      'Install II integration helper packages',
      false,
    )
    .option(
      '--expo-icp-app-connect',
      'Install Expo ICP app connect packages',
      false,
    )
    .action(setup);
};
