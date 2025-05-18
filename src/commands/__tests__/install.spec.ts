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
  });

  it('should install all default packages when no options provided', async () => {
    const defaultPackages = [
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
      'Installing outdated packages:',
      defaultPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${defaultPackages.join(' ')}`,
    );
  });

  it('should install only II integration helper packages when --ii-integration-helpers is true', async () => {
    const iiIntegrationHelpersPackages = [
      'expo-icp-app-connect-helpers',
      'expo-icp-frontend-helpers',
      'ii-integration-helpers',
    ];

    vi.mocked(getOutdatedPackages).mockReturnValue(
      iiIntegrationHelpersPackages,
    );

    await install({ iiIntegrationHelpers: true });

    expect(console.log).toHaveBeenCalledWith(
      'Installing outdated packages:',
      iiIntegrationHelpersPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${iiIntegrationHelpersPackages.join(' ')}`,
    );
  });

  it('should install only Expo ICP helper packages when --expo-icp-helpers is true', async () => {
    const expoIcpHelpersPackages = [
      'expo-icp-app-connect-helpers',
      'expo-icp-frontend-helpers',
    ];

    vi.mocked(getOutdatedPackages).mockReturnValue(expoIcpHelpersPackages);

    await install({ expoIcpHelpers: true });

    expect(console.log).toHaveBeenCalledWith(
      'Installing outdated packages:',
      expoIcpHelpersPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${expoIcpHelpersPackages.join(' ')}`,
    );
  });
});
