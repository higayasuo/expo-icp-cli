import { describe, it, expect, vi } from 'vitest';
import { buildProgram } from '../buildProgram';
import { UpdateCommand } from '../../commands/update';
import { SetupCommand } from '../../commands/setup';

describe('buildProgram', () => {
  it('should create a program with correct name and version', () => {
    const mockUpdate = vi.fn() as UpdateCommand;
    const mockSetup = vi.fn() as SetupCommand;
    const program = buildProgram({ update: mockUpdate, setup: mockSetup });

    expect(program.name()).toBe('expo-icp');
    expect(program.description()).toBe('CLI tool for Expo ICP integration');
    expect(program.version()).toBeDefined();
  });

  it('should register update command', () => {
    const mockUpdate = vi.fn() as UpdateCommand;
    const mockSetup = vi.fn() as SetupCommand;
    const program = buildProgram({ update: mockUpdate, setup: mockSetup });

    const updateCommand = program.commands.find(
      (cmd) => cmd.name() === 'update',
    );
    expect(updateCommand).toBeDefined();
    expect(updateCommand?.description()).toBe(
      'Update necessary packages for Expo ICP integration',
    );
  });

  it('should register setup command with correct options', () => {
    const mockUpdate = vi.fn() as UpdateCommand;
    const mockSetup = vi.fn() as SetupCommand;
    const program = buildProgram({ update: mockUpdate, setup: mockSetup });

    const setupCommand = program.commands.find((cmd) => cmd.name() === 'setup');
    expect(setupCommand).toBeDefined();
    expect(setupCommand?.description()).toBe(
      'Setup the project for Expo ICP integration',
    );

    const options = setupCommand?.options || [];
    expect(options).toHaveLength(5);
    expect(options[0].long).toBe('--expo-crypto-universal');
    expect(options[1].long).toBe('--expo-storage-universal');
    expect(options[2].long).toBe('--expo-icp-helpers');
    expect(options[3].long).toBe('--ii-integration-helpers');
    expect(options[4].long).toBe('--expo-icp-app-connect');
  });

  it('should handle unknown options', async () => {
    const mockUpdate = vi.fn() as UpdateCommand;
    const mockSetup = vi.fn() as SetupCommand;
    const program = buildProgram({ update: mockUpdate, setup: mockSetup });

    const processExitSpy = vi
      .spyOn(process, 'exit')
      .mockImplementation(() => undefined as never);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'setup',
      '--unknown-option',
    ]);

    expect(processExitSpy).toHaveBeenCalledWith(1);
  });

  it('should handle excess arguments', async () => {
    const mockUpdate = vi.fn() as UpdateCommand;
    const mockSetup = vi.fn() as SetupCommand;
    const program = buildProgram({ update: mockUpdate, setup: mockSetup });

    const processExitSpy = vi
      .spyOn(process, 'exit')
      .mockImplementation(() => undefined as never);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'setup',
      'aaa',
    ]);

    expect(processExitSpy).toHaveBeenCalledWith(1);
  });
});
