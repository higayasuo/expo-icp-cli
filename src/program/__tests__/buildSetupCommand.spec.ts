import { describe, it, expect, vi } from 'vitest';
import { Command } from 'commander';
import { buildSetupCommand } from '../buildSetupCommand';
import { SetupCommand } from '../../commands/setup';

describe('buildSetupCommand', () => {
  it('should add setup command to program with correct options', () => {
    const program = new Command();
    const mockSetup = vi.fn() as SetupCommand;

    buildSetupCommand(program, mockSetup);

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

  it('should set default values for options to false', () => {
    const program = new Command();
    const mockSetup = vi.fn() as SetupCommand;

    buildSetupCommand(program, mockSetup);

    const setupCommand = program.commands.find((cmd) => cmd.name() === 'setup');
    const options = setupCommand?.options || [];
    expect(options[0].defaultValue).toBe(false);
    expect(options[1].defaultValue).toBe(false);
    expect(options[2].defaultValue).toBe(false);
    expect(options[3].defaultValue).toBe(false);
    expect(options[4].defaultValue).toBe(false);
  });

  it('should set correct option descriptions', () => {
    const program = new Command();
    const mockSetup = vi.fn() as SetupCommand;

    buildSetupCommand(program, mockSetup);

    const setupCommand = program.commands.find((cmd) => cmd.name() === 'setup');
    const options = setupCommand?.options || [];
    expect(options[0].description).toBe(
      'Install Expo Crypto Universal packages',
    );
    expect(options[1].description).toBe(
      'Install Expo Storage Universal packages',
    );
    expect(options[2].description).toBe('Install Expo ICP helper packages');
    expect(options[3].description).toBe(
      'Install II integration helper packages',
    );
    expect(options[4].description).toBe(
      'Install Expo ICP app connect packages',
    );
  });

  it('should execute the setup action when command is run', async () => {
    const program = new Command();
    const mockSetup = vi.fn() as SetupCommand & {
      mock: { calls: any[][] };
    };

    buildSetupCommand(program, mockSetup);

    await program.parseAsync(['/usr/local/bin/node', '/path/to/cli', 'setup']);
    expect(mockSetup).toHaveBeenCalled();
    const callArgs = mockSetup.mock.calls[0];
    expect(callArgs[0]).toEqual({
      expoCryptoUniversal: false,
      expoStorageUniversal: false,
      expoIcpHelpers: false,
      iiIntegrationHelpers: false,
      expoIcpAppConnect: false,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });

  it('should execute the setup action with expoCryptoUniversal: true when command is run with --expo-crypto-universal', async () => {
    const program = new Command();
    const mockSetup = vi.fn() as SetupCommand & {
      mock: { calls: any[][] };
    };

    buildSetupCommand(program, mockSetup);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'setup',
      '--expo-crypto-universal',
    ]);
    expect(mockSetup).toHaveBeenCalled();
    const callArgs = mockSetup.mock.calls[0];
    expect(callArgs[0]).toEqual({
      expoCryptoUniversal: true,
      expoStorageUniversal: false,
      expoIcpHelpers: false,
      iiIntegrationHelpers: false,
      expoIcpAppConnect: false,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });

  it('should execute the setup action with expoStorageUniversal: true when command is run with --expo-storage-universal', async () => {
    const program = new Command();
    const mockSetup = vi.fn() as SetupCommand & {
      mock: { calls: any[][] };
    };

    buildSetupCommand(program, mockSetup);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'setup',
      '--expo-storage-universal',
    ]);
    expect(mockSetup).toHaveBeenCalled();
    const callArgs = mockSetup.mock.calls[0];
    expect(callArgs[0]).toEqual({
      expoCryptoUniversal: false,
      expoStorageUniversal: true,
      expoIcpHelpers: false,
      iiIntegrationHelpers: false,
      expoIcpAppConnect: false,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });

  it('should execute the setup action with expoIcpHelpers: true when command is run with --expo-icp-helpers', async () => {
    const program = new Command();
    const mockSetup = vi.fn() as SetupCommand & {
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
      expoCryptoUniversal: false,
      expoStorageUniversal: false,
      expoIcpHelpers: true,
      iiIntegrationHelpers: false,
      expoIcpAppConnect: false,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });

  it('should execute the setup action with iiIntegrationHelpers: true when command is run with --ii-integration-helpers', async () => {
    const program = new Command();
    const mockSetup = vi.fn() as SetupCommand & {
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
      expoCryptoUniversal: false,
      expoStorageUniversal: false,
      expoIcpHelpers: false,
      iiIntegrationHelpers: true,
      expoIcpAppConnect: false,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });

  it('should execute the setup action with expoIcpAppConnect: true when command is run with --expo-icp-app-connect', async () => {
    const program = new Command();
    const mockSetup = vi.fn() as SetupCommand & {
      mock: { calls: any[][] };
    };

    buildSetupCommand(program, mockSetup);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'setup',
      '--expo-icp-app-connect',
    ]);
    expect(mockSetup).toHaveBeenCalled();
    const callArgs = mockSetup.mock.calls[0];
    expect(callArgs[0]).toEqual({
      expoCryptoUniversal: false,
      expoStorageUniversal: false,
      expoIcpHelpers: false,
      iiIntegrationHelpers: false,
      expoIcpAppConnect: true,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });
});
