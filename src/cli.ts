#!/usr/bin/env node

import { Command } from 'commander';
import { install } from './commands/install';
import { setup } from './commands/setup';
import { buildProgram } from './program/buildProgram';

if (
  import.meta.url &&
  import.meta.url.startsWith('file://') &&
  process.env.NODE_ENV !== 'test'
) {
  const program = buildProgram({ install, setup });
  program.parse();
}
