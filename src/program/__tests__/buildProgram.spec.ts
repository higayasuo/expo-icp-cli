import { describe, it, expect, vi } from 'vitest';
import { buildProgram } from '../buildProgram';
import { InstallCommand } from '../../commands/installCommon';

describe('buildProgram', () => {
  it('should create a program with correct name and version', () => {
    const mockInstall = vi.fn() as InstallCommand;
    const mockSetup = vi.fn() as InstallCommand;
    const program = buildProgram({ install: mockInstall, setup: mockSetup });

    expect(program.name()).toBe('expo-icp');
    expect(program.description()).toBe('CLI tool for Expo ICP integration');
    expect(program.version()).toBeDefined();
  });

  it('should register install command with correct options', () => {
    const mockInstall = vi.fn() as InstallCommand;
    const mockSetup = vi.fn() as InstallCommand;
    const program = buildProgram({ install: mockInstall, setup: mockSetup });

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

  it('should register setup command with correct options', () => {
    const mockInstall = vi.fn() as InstallCommand;
    const mockSetup = vi.fn() as InstallCommand;
    const program = buildProgram({ install: mockInstall, setup: mockSetup });

    const setupCommand = program.commands.find((cmd) => cmd.name() === 'setup');
    expect(setupCommand).toBeDefined();
    expect(setupCommand?.description()).toBe(
      'Setup the project for Expo ICP integration',
    );

    const options = setupCommand?.options || [];
    expect(options).toHaveLength(3);
    expect(options[0].long).toBe('--ii-integration-helpers');
    expect(options[1].long).toBe('--expo-icp-helpers');
    expect(options[2].long).toBe('--expo-icp-app-connect');
  });
});
