import { describe, it, expect, vi } from 'vitest';
import { Command } from 'commander';
import { buildInstallCommand } from '../buildInstallCommand';
import { InstallCommand } from '../../commands/installCommon';

describe('buildInstallCommand', () => {
  it('should add install command to program with correct options', () => {
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

    const options = installCommand?.options || [];
    expect(options).toHaveLength(3);
    expect(options[0].long).toBe('--ii-integration-helpers');
    expect(options[1].long).toBe('--expo-icp-helpers');
    expect(options[2].long).toBe('--expo-icp-app-connect');
  });

  it('should set default values for options to false', () => {
    const program = new Command();
    const mockInstall = vi.fn() as InstallCommand;

    buildInstallCommand(program, mockInstall);

    const installCommand = program.commands.find(
      (cmd) => cmd.name() === 'install',
    );
    const options = installCommand?.options || [];
    expect(options[0].defaultValue).toBe(false);
    expect(options[1].defaultValue).toBe(false);
    expect(options[2].defaultValue).toBe(false);
  });

  it('should set correct option descriptions', () => {
    const program = new Command();
    const mockInstall = vi.fn() as InstallCommand;

    buildInstallCommand(program, mockInstall);

    const installCommand = program.commands.find(
      (cmd) => cmd.name() === 'install',
    );
    const options = installCommand?.options || [];
    expect(options[0].description).toBe(
      'Install II integration helper packages',
    );
    expect(options[1].description).toBe('Install Expo ICP helper packages');
    expect(options[2].description).toBe(
      'Install Expo ICP app connect packages',
    );
  });

  it('should execute the install action when command is run', async () => {
    const program = new Command();
    const mockInstall = vi.fn() as InstallCommand & {
      mock: { calls: any[][] };
    };

    buildInstallCommand(program, mockInstall);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'install',
    ]);
    expect(mockInstall).toHaveBeenCalled();
    const callArgs = mockInstall.mock.calls[0];
    expect(callArgs[0]).toEqual({
      iiIntegrationHelpers: false,
      expoIcpHelpers: false,
      expoIcpAppConnect: false,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });

  it('should execute the install action with iiIntegrationHelpers: true when command is run with --ii-integration-helpers', async () => {
    const program = new Command();
    const mockInstall = vi.fn() as InstallCommand & {
      mock: { calls: any[][] };
    };

    buildInstallCommand(program, mockInstall);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'install',
      '--ii-integration-helpers',
    ]);
    expect(mockInstall).toHaveBeenCalled();
    const callArgs = mockInstall.mock.calls[0];
    expect(callArgs[0]).toEqual({
      iiIntegrationHelpers: true,
      expoIcpHelpers: false,
      expoIcpAppConnect: false,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });

  it('should execute the install action with expoIcpHelpers: true when command is run with --expo-icp-helpers', async () => {
    const program = new Command();
    const mockInstall = vi.fn() as InstallCommand & {
      mock: { calls: any[][] };
    };

    buildInstallCommand(program, mockInstall);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'install',
      '--expo-icp-helpers',
    ]);
    expect(mockInstall).toHaveBeenCalled();
    const callArgs = mockInstall.mock.calls[0];
    expect(callArgs[0]).toEqual({
      iiIntegrationHelpers: false,
      expoIcpHelpers: true,
      expoIcpAppConnect: false,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });

  it('should execute the install action with expoIcpAppConnect: true when command is run with --expo-icp-app-connect', async () => {
    const program = new Command();
    const mockInstall = vi.fn() as InstallCommand & {
      mock: { calls: any[][] };
    };

    buildInstallCommand(program, mockInstall);

    await program.parseAsync([
      '/usr/local/bin/node',
      '/path/to/cli',
      'install',
      '--expo-icp-app-connect',
    ]);
    expect(mockInstall).toHaveBeenCalled();
    const callArgs = mockInstall.mock.calls[0];
    expect(callArgs[0]).toEqual({
      iiIntegrationHelpers: false,
      expoIcpHelpers: false,
      expoIcpAppConnect: true,
    });
    expect(callArgs[1]).toBeInstanceOf(Command);
  });
});
