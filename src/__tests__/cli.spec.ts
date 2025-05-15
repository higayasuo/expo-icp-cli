import { describe, it, expect } from 'vitest';
import { Command } from 'commander';

describe('CLI', () => {
  it('should have an init command', () => {
    const program = new Command();
    program.command('init');
    expect(program.commands.find(cmd => cmd.name() === 'init')).toBeDefined();
  });
});