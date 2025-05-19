import { describe, it, expect, vi } from 'vitest';
import { Command } from 'commander';
import { buildInstallCommand } from '../buildInstallCommand';
import { InstallCommand } from '../../commands/install';

describe('buildInstallCommand', () => {
  it('should add install command to program with correct description', () => {
    const program = new Command();
    const mockInstall = vi.fn() as InstallCommand;

    buildInstallCommand(program, mockInstall);

    const installCommand = program.commands.find(
      (cmd) => cmd.name() === 'install',
    );
    expect(installCommand).toBeDefined();
    expect(installCommand?.description()).toBe(
      'Install necessary packages for Expo ICP integration',
    );
  });

  it('should execute the install action when command is run', async () => {
    const program = new Command();
    const mockInstall = vi.fn() as InstallCommand;

    buildInstallCommand(program, mockInstall);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'install',
    ]);
    expect(mockInstall).toHaveBeenCalled();
  });
});
