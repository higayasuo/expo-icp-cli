import { Command } from 'commander';
import packageJson from '../../package.json';
import { UpdateCommand } from '../commands/update';
import { SetupCommand } from '../commands/setup';
import { buildUpdateCommand } from './buildUpdateCommand';
import { buildSetupCommand } from './buildSetupCommand';

/**
 * Type definition for available commands in the CLI
 */
type Commands = {
  /** Command for updating necessary packages */
  update: UpdateCommand;
  /** Command for setting up the project */
  setup: SetupCommand;
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

  buildUpdateCommand(program, commands.update);
  buildSetupCommand(program, commands.setup);

  return program;
};
