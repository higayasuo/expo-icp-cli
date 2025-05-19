import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setup } from '../setup';
import { execCommand } from '../../utils/execCommand';
import {
  defaultPackages,
  iiIntegrationHelpersPackages,
  expoIcpHelpersPackages,
  expoIcpAppConnectPackages,
  expoCryptoUniversalPackages,
  expoStorageUniversalPackages,
} from '../packages';

vi.mock('../../utils/execCommand', () => ({
  execCommand: vi.fn(),
}));

describe('setup command', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('should install all default packages when no options provided', async () => {
    await setup({});

    expect(console.log).toHaveBeenCalledWith(
      'Installing packages:',
      defaultPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${defaultPackages.join(' ')}`,
    );
  });

  it('should install only II integration helper packages when --ii-integration-helpers is true', async () => {
    await setup({ iiIntegrationHelpers: true });

    expect(console.log).toHaveBeenCalledWith(
      'Installing packages:',
      iiIntegrationHelpersPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${iiIntegrationHelpersPackages.join(' ')}`,
    );
  });

  it('should install only Expo ICP helper packages when --expo-icp-helpers is true', async () => {
    await setup({ expoIcpHelpers: true });

    expect(console.log).toHaveBeenCalledWith(
      'Installing packages:',
      expoIcpHelpersPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${expoIcpHelpersPackages.join(' ')}`,
    );
  });

  it('should install only Expo ICP app connect packages when --expo-icp-app-connect is true', async () => {
    await setup({ expoIcpAppConnect: true });

    expect(console.log).toHaveBeenCalledWith(
      'Installing packages:',
      expoIcpAppConnectPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${expoIcpAppConnectPackages.join(' ')}`,
    );
  });

  it('should install only Expo crypto universal packages when --expo-crypto-universal is true', async () => {
    await setup({ expoCryptoUniversal: true });

    expect(console.log).toHaveBeenCalledWith(
      'Installing packages:',
      expoCryptoUniversalPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${expoCryptoUniversalPackages.join(' ')}`,
    );
  });

  it('should install only Expo storage universal packages when --expo-storage-universal is true', async () => {
    await setup({ expoStorageUniversal: true });

    expect(console.log).toHaveBeenCalledWith(
      'Installing packages:',
      expoStorageUniversalPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${expoStorageUniversalPackages.join(' ')}`,
    );
  });

  it('should install both II integration helper and Expo ICP helper packages when both options are true', async () => {
    const expectedPackages = [
      ...new Set([...expoIcpHelpersPackages, ...iiIntegrationHelpersPackages]),
    ];
    await setup({ iiIntegrationHelpers: true, expoIcpHelpers: true });

    expect(console.log).toHaveBeenCalledWith(
      'Installing packages:',
      expectedPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${expectedPackages.join(' ')}`,
    );
  });

  it('should install both Expo crypto universal and Expo storage universal packages when both options are true', async () => {
    const expectedPackages = [
      ...new Set([
        ...expoCryptoUniversalPackages,
        ...expoStorageUniversalPackages,
      ]),
    ];
    await setup({ expoCryptoUniversal: true, expoStorageUniversal: true });

    expect(console.log).toHaveBeenCalledWith(
      'Installing packages:',
      expectedPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${expectedPackages.join(' ')}`,
    );
  });

  it('should install all selected packages when multiple options are true', async () => {
    const expectedPackages = [
      ...new Set([
        ...expoCryptoUniversalPackages,
        ...expoStorageUniversalPackages,
        ...expoIcpHelpersPackages,
        ...iiIntegrationHelpersPackages,
        ...expoIcpAppConnectPackages,
      ]),
    ];
    await setup({
      iiIntegrationHelpers: true,
      expoIcpHelpers: true,
      expoIcpAppConnect: true,
      expoCryptoUniversal: true,
      expoStorageUniversal: true,
    });

    expect(console.log).toHaveBeenCalledWith(
      'Installing packages:',
      expectedPackages.join(', '),
    );
    expect(execCommand).toHaveBeenCalledWith(
      `npm install ${expectedPackages.join(' ')}`,
    );
  });
});
