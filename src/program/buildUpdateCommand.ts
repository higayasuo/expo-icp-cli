import { Command } from 'commander';
import { UpdateCommand } from '../commands/update';

/**
 * Builds the update command for the Expo ICP integration CLI tool.
 *
 * @param {Command} program - The commander program instance.
 * @param {UpdateCommand} update - The update command action.
 */
export const buildUpdateCommand = (program: Command, update: UpdateCommand) => {
  program
    .command('update')
    .description('Update necessary packages for Expo ICP integration')
    .action(update)
    .alias('install');
};
