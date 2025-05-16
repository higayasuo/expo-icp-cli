import { describe, it, expect, vi, beforeEach } from 'vitest';
import { install } from '../install';
import { execCommand } from '../../utils/execCommand';
import { getOutdatedPackages } from '../../utils/getOutdatedPackages';

vi.mock('../../utils/execCommand', () => ({
  execCommand: vi.fn(),
}));

vi.mock('../../utils/getOutdatedPackages', () => ({
  getOutdatedPackages: vi.fn(),
}));

describe('install command', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
  });

  it('should install all default packages when no options provided', async () => {
    const defaultPackages = [
      'expo-icp',
      'canister-manager',
      'expo-crypto-universal',
      'expo-crypto-universal-native',
      'expo-crypto-universal-web',
      'expo-icp-app-connect',
      'expo-icp-app-connect-helpers',
      'expo-icp-frontend-helpers',
      'expo-ii-integration',
      'expo-storage-universal',
      'expo-storage-universal-native',
      'expo-storage-universal-web',
    ];

    vi.mocked(getOutdatedPackages).mockReturnValue(defaultPackages);

    await install({});

    expect(console.log).toHaveBeenCalledWith(
      'Installing necessary packages...',
      {},
    );
    expect(getOutdatedPackages).toHaveBeenCalledWith(defaultPackages);
    expect(execCommand).toHaveBeenCalledTimes(12);
    defaultPackages.forEach((pkg) => {
      expect(execCommand).toHaveBeenCalledWith(`npm install ${pkg}`);
    });
  });

  it('should install only II integration helper packages when --ii-integration-helpers is true', async () => {
    const iiIntegrationHelpersPackages = [
      'expo-icp',
      'expo-icp-app-connect-helpers',
      'expo-icp-frontend-helpers',
      'ii-integration-helpers',
    ];

    vi.mocked(getOutdatedPackages).mockReturnValue(
      iiIntegrationHelpersPackages,
    );

    await install({ iiIntegrationHelpers: true });

    expect(console.log).toHaveBeenCalledWith(
      'Installing necessary packages...',
      { iiIntegrationHelpers: true },
    );
    expect(getOutdatedPackages).toHaveBeenCalledWith(
      iiIntegrationHelpersPackages,
    );
    expect(execCommand).toHaveBeenCalledTimes(4);
    iiIntegrationHelpersPackages.forEach((pkg) => {
      expect(execCommand).toHaveBeenCalledWith(`npm install ${pkg}`);
    });
  });
});
