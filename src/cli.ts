#!/usr/bin/env node

import { update } from './commands/update';
import { setup } from './commands/setup';
import { buildProgram } from './program/buildProgram';

if (
  import.meta.url &&
  import.meta.url.startsWith('file://') &&
  process.env.NODE_ENV !== 'test'
) {
  const program = buildProgram({ update, setup });
  program.parse();
}
