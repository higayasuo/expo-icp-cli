#!/usr/bin/env node

import { Command } from 'commander';
import { install } from './commands/install';

const program = new Command();

program
  .name('expo-icp')
  .description('CLI tool for Expo ICP integration')
  .version('0.1.0');

program
  .command('install')
  .description('Install necessary packages for Expo ICP integration')
  .action(install);

// Only parse arguments if this file is being run directly
if (import.meta.url && import.meta.url.startsWith('file://')) {
  program.parse();
}

export { program };
