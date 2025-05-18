import { Command } from 'commander';
import packageJson from '../../package.json';
import { InstallCommand } from '../commands/install';
import { buildInstallCommand } from './buildInstallCommand';

/**
 * Type definition for available commands in the CLI
 */
type Commands = {
  /** Command for installing necessary packages */
  install: InstallCommand;
};

/**
 * Builds the CLI program with all available commands and options
 *
 * @param commands - Object containing command implementations
 * @param commands.install - Implementation of the install command
 * @returns Configured Commander.js program instance
 *
 * @example
 * ```ts
 * const program = buildProgram({
 *   install: installCommand
 * });
 * ```
 */
export const buildProgram = (commands: Commands) => {
  const program = new Command();

  program
    .name('expo-icp')
    .description('CLI tool for Expo ICP integration')
    .version(packageJson.version);

  buildInstallCommand(program, commands.install);

  return program;
};
