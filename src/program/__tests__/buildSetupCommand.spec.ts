import { describe, it, expect, vi } from 'vitest';
import { Command } from 'commander';
import { buildSetupCommand } from '../buildSetupCommand';
import { InstallCommand } from '../../commands/installCommon';

describe('buildSetupCommand', () => {
  it('should add setup command to program with correct options', () => {
    const program = new Command();
    const mockSetup = vi.fn() as InstallCommand;

    buildSetupCommand(program, mockSetup);

    const setupCommand = program.commands.find((cmd) => cmd.name() === 'setup');
    expect(setupCommand).toBeDefined();
    expect(setupCommand?.description()).toBe(
      'Setup the project for Expo ICP integration',
    );

    const options = setupCommand?.options || [];
    expect(options).toHaveLength(2);
    expect(options[0].long).toBe('--ii-integration-helpers');
    expect(options[1].long).toBe('--expo-icp-helpers');
  });

  it('should set default values for options to false', () => {
    const program = new Command();
    const mockSetup = vi.fn() as InstallCommand;

    buildSetupCommand(program, mockSetup);

    const setupCommand = program.commands.find((cmd) => cmd.name() === 'setup');
    const options = setupCommand?.options || [];
    expect(options[0].defaultValue).toBe(false);
    expect(options[1].defaultValue).toBe(false);
  });

  it('should set correct option descriptions', () => {
    const program = new Command();
    const mockSetup = vi.fn() as InstallCommand;

    buildSetupCommand(program, mockSetup);

    const setupCommand = program.commands.find((cmd) => cmd.name() === 'setup');
    const options = setupCommand?.options || [];
    expect(options[0].description).toBe(
      'Install II integration helper packages',
    );
    expect(options[1].description).toBe('Install Expo ICP helper packages');
  });

  it('should execute the setup action when command is run', async () => {
    const program = new Command();
    const mockSetup = vi.fn() as InstallCommand & {
      mock: { calls: any[][] };
    };

    buildSetupCommand(program, mockSetup);

    await program.parseAsync(['/usr/local/bin/node', '/path/to/cli', 'setup']);
    expect(mockSetup).toHaveBeenCalled();
    const callArgs = mockSetup.mock.calls[0];
    expect(callArgs[0]).toEqual({
      iiIntegrationHelpers: false,
      expoIcpHelpers: false,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });

  it('should execute the setup action with iiIntegrationHelpers: true when command is run with --ii-integration-helpers', async () => {
    const program = new Command();
    const mockSetup = vi.fn() as InstallCommand & {
      mock: { calls: any[][] };
    };

    buildSetupCommand(program, mockSetup);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'setup',
      '--ii-integration-helpers',
    ]);
    expect(mockSetup).toHaveBeenCalled();
    const callArgs = mockSetup.mock.calls[0];
    expect(callArgs[0]).toEqual({
      iiIntegrationHelpers: true,
      expoIcpHelpers: false,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });

  it('should execute the setup action with expoIcpHelpers: true when command is run with --expo-icp-helpers', async () => {
    const program = new Command();
    const mockSetup = vi.fn() as InstallCommand & {
      mock: { calls: any[][] };
    };

    buildSetupCommand(program, mockSetup);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'setup',
      '--expo-icp-helpers',
    ]);
    expect(mockSetup).toHaveBeenCalled();
    const callArgs = mockSetup.mock.calls[0];
    expect(callArgs[0]).toEqual({
      iiIntegrationHelpers: false,
      expoIcpHelpers: true,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });
});
