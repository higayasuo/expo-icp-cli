import { describe, it, expect, vi } from 'vitest';
import { Command } from 'commander';
import { buildUpdateCommand } from '../buildUpdateCommand';
import { UpdateCommand } from '../../commands/update';

describe('buildUpdateCommand', () => {
  it('should add update command to program with correct description', () => {
    const program = new Command();
    const mockUpdate = vi.fn() as UpdateCommand;

    buildUpdateCommand(program, mockUpdate);

    const updateCommand = program.commands.find(
      (cmd) => cmd.name() === 'update',
    );
    expect(updateCommand).toBeDefined();
    expect(updateCommand?.description()).toBe(
      'Update necessary packages for Expo ICP integration',
    );
  });

  it('should have install as an alias for update command', () => {
    const program = new Command();
    const mockUpdate = vi.fn() as UpdateCommand;

    buildUpdateCommand(program, mockUpdate);

    const updateCommand = program.commands.find(
      (cmd) => cmd.name() === 'update',
    );
    expect(updateCommand?.aliases()).toContain('install');
  });

  it('should execute the update action when update command is run', async () => {
    const program = new Command();
    const mockUpdate = vi.fn() as UpdateCommand;

    buildUpdateCommand(program, mockUpdate);

    await program.parseAsync(['/usr/local/bin/node', '/path/to/cli', 'update']);
    expect(mockUpdate).toHaveBeenCalled();
  });

  it('should execute the update action when install alias is used', async () => {
    const program = new Command();
    const mockUpdate = vi.fn() as UpdateCommand;

    buildUpdateCommand(program, mockUpdate);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'install',
    ]);
    expect(mockUpdate).toHaveBeenCalled();
  });
});
